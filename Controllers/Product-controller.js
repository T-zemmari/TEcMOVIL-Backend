const Product = require('../Model/Product-model');


class ProductController{


    async ListAllProducts(products){

        return await Product.find(products);
    }

    async GetOneProduct(id){


        return await Product.findById(id);
    }

    async StoreProduct(MyProduct){

       Product.create(MyProduct);
    }







}

let productController = new ProductController();
module.exports= productController;