import { Router } from "express";
import productModel from "../models/Productos.js";
import ProductosDB from '../DAOs/productosDB.js'

const productosdb= new ProductosDB()

const router= Router()

router.get('/productos',async (req, res)=>{
    const productos= await productModel.find({}).lean()
    res.render('productos', {productos})
})

router.delete('/productos/:id', async (req, res)=>{
    const deleted= await productosdb.deleteProduct(req.params.id)
    res.send(deleted.toString())
})
 


export default router