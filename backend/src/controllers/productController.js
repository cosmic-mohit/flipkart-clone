const pool = require('../db');

// Get all products with filters
exports.getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = 'SELECT * FROM products';
    const params = [];

    if (category || search) {
      const conditions = [];
      if (category) {
        conditions.push(`category = $${params.length + 1}`);
        params.push(category);
      }
      if (search) {
        conditions.push(`LOWER(name) LIKE LOWER($${params.length + 1})`);
        params.push(`%${search}%`);
      }
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY created_at DESC';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get unique categories
exports.getCategories = async (req, res) => {
  try {
    const result = await pool.query('SELECT DISTINCT category FROM products ORDER BY category');
    res.json(result.rows.map(row => row.category));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product stock after purchase
exports.updateProductStock = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ error: 'Product ID and quantity required' });
    }

    // Check current stock
    const checkResult = await pool.query('SELECT stock FROM products WHERE id = $1', [productId]);
    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const currentStock = checkResult.rows[0].stock;
    if (currentStock < quantity) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }

    // Update stock
    const newStock = currentStock - quantity;
    await pool.query('UPDATE products SET stock = $1 WHERE id = $2', [newStock, productId]);

    res.json({ success: true, newStock, message: `Stock updated from ${currentStock} to ${newStock}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
