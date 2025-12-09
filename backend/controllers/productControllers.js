import { Product } from "../models/index.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { isActive: true },
      order: [['name', 'ASC']]
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, stock, barcode, category } = req.body;
    
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }
    
    const product = await Product.create({ 
      name, 
      price, 
      stock: stock || 0,
      barcode,
      category
    });
    
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const [updatedRows] = await Product.update(updates, {
      where: { id, isActive: true }
    });
    
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const updatedProduct = await Product.findByPk(id);
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const [updatedRows] = await Product.update(
      { isActive: false },
      { where: { id } }
    );
    
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};