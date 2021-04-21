const Product = require('../Model/User-model');


class ProductController{


    async ListAllProducts(products){

        return await Product.find(products);
    }

    async GetOneProduct(id){

        let id = req.body.id;

        return await Product.findById(id);
    }

    async StoreProduct(product){

       Product.create(product);
    }







}

let productController = new ProductController();
module.exports= productController;