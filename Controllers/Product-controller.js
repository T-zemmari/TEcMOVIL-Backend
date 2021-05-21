const Product = require('../Model/Product-model');


class ProductController {

    //------------- Listar todos los accessorios---------------//


    async ListAllProducts(products) {

        return await Product.find(products);
    }

    //-------------Listar solo un accessorio-----------------//

    async GetOneProduct(id) {


        return await Product.findById(id);
    }

    //----------Guardar un accessorio en la base de datos---//  

    async StoreProduct(MyProduct) {

        Product.create(MyProduct);
    }


    //---------Modificar los datos del producto-------------//  


    async updateProduct(id, product) {
        Product.findByIdAndUpdate(id, product)
    }







}

let productController = new ProductController();
module.exports = productController;