import {Router} from 'express'
import pool from '../db.config.js';

const router = Router();

router.get('/', async (req, res)=>{
    try {
     const result = await pool.query("SELECT * FROM products")
     res.status(200).json(result);
    } catch (error) {
       res.status(500).json({success:false , message:error.message})
    }
 })
.get('/products/:id', async(req, res) => {
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

})
.patch('/products/:id', async(req, res) => {
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

})
.delete('/products/:id', async(req, res) => {
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

})
.post('/products',async (req, res)=>{
    try {
     const result = await pool.query("SELECT * FROM products")
     res.status(200).json(result);
    } catch (error) {
       res.status(500).json({success:false , message:error.message})
    }
 })
