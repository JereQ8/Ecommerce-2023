import productModel from "../models/Productos.js";


class ProductosDB {
    constructor() {

    }
    async createProduct(newProduct) {
        try {
            await productModel.create(newProduct);
            return 'Producto creado correctamente'
        } catch (err) {
            throw new Error(err)
        }
    }

    async deleteProduct(idProduct) {
        try {
            await productModel.deleteOne({ _id: idProduct }, {}, (err) => {
                if (!err) return 'Producto eliminado correctamente'
            })
        } catch (err) {
            return 'Producto no encontrado'
        }
    }

    async updateProduct(){
        
    }
}


export default ProductosDB