import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

export const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { 
    type: DataTypes.STRING, 
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 255]
    }
  },
  price: { 
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
    validate: {
      min: 0
    }
  },
  stock: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  barcode: {
    type: DataTypes.STRING,
    unique: true
  },
  category: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true,
  indexes: [
    { fields: ['name'] },
    { fields: ['barcode'] },
    { fields: ['category'] }
  ]
});