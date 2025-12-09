import { Sale, SaleItem, Product, sequelize } from "../models/index.js";

export const createSale = async (req, res) => {
  const transaction = await sequelize.transaction();
  
  try {
    const { items, paymentMethod = 'cash' } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Sale must have at least one item' });
    }
    
    let subtotal = 0;
    const saleNumber = `SALE-${Date.now()}`;
    
    // Create sale header
    const sale = await Sale.create({
      saleNumber,
      subtotal: 0,
      tax: 0,
      total: 0,
      paymentMethod
    }, { transaction });
    
    // Process each item
    for (const item of items) {
      const product = await Product.findByPk(item.productId, { transaction });
      
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }
      
      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for ${product.name}`);
      }
      
      const lineTotal = product.price * item.quantity;
      subtotal += parseFloat(lineTotal);
      
      // Create sale item
      await SaleItem.create({
        saleId: sale.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: product.price,
        lineTotal
      }, { transaction });
      
      // Update product stock
      await product.update({
        stock: product.stock - item.quantity
      }, { transaction });
    }
    
    // Calculate tax (10% for example)
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    // Update sale totals
    await sale.update({
      subtotal,
      tax,
      total
    }, { transaction });
    
    await transaction.commit();
    
    res.status(201).json(sale);
    
  } catch (error) {
    await transaction.rollback();
    console.error('Error creating sale:', error);
    res.status(500).json({ error: error.message || 'Failed to create sale' });
  }
};

export const getAllSales = async (req, res) => {
  try {
    const sales = await Sale.findAll({
      include: [{
        model: SaleItem,
        as: 'items',
        include: [Product]
      }],
      order: [['createdAt', 'DESC']]
    });
    
    res.json(sales);
  } catch (error) {
    console.error('Error fetching sales:', error);
    res.status(500).json({ error: 'Failed to fetch sales' });
  }
};