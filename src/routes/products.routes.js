import { Router } from 'express';
import pool from '../db.config.js';

const router = Router();


router.get('/', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


router.get('/products/:id', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products WHERE id = $1", [req.params.id]);
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


router.post('/products', async (req, res) => {
    const { productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [productThumbnail, productTitle, productDescription, productCost, onOffer]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


router.patch('/products/:id', async (req, res) => {
    const { productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
    try {
        const result = await pool.query(
            "UPDATE products SET productThumbnail = $1, productTitle = $2, productDescription = $3, productCost = $4, onOffer = $5 WHERE id = $6 RETURNING *",
            [productThumbnail, productTitle, productDescription, productCost, onOffer, req.params.id]
        );
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.delete('/products/:id', async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [req.params.id]);
        if (result.rows.length > 0) {
            res.status(200).json({ success: true, message: "Product deleted successfully" });
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
