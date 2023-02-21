import { Router } from "express";
import carritoModel from "../models/Carrito.js";
import productModel from "../models/Productos.js";

const router= Router()

// crear un carrito: cuando ponga comprar/agregar al carrito se debe hacer un POST al carrito, y los id para el filter los saco del id del boton
// debo traer el carrito de la db

router.get('/carrito',async (req, res)=>{
    const productos= await productModel.find({})
    res.render('carrito', {quantity: productos.length} )
})

router.post('/carrito', async (req, res)=>{
    console.log(req.body)
    
    // await carritoModel.create({
    //     listProducts: [req.body]
    // })
})

export default router