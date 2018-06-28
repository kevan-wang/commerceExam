const mongoose = require('mongoose')
const Product = mongoose.model('Product')


//  Prepopulated with basic CRUD operations
module.exports = {
    retrieveAllProducts : function(request, response) {
        Product.find({}, function(err, data) {
            if(err) {
                console.log("Error: ", err)
            } else {
                console.log("Success!")
                response.json(data)
            }
        })
    },

    retrieveOneProduct : function(request, response) {
        console.log("attempting to retrieve one product in main.ctrl")
        Product.find({ idNum: request.params.idNum }, function(err, data){
            if(err) {
                console.log("Error: ", err)
            } else{
                console.log("Success!")
                response.json(data)
            }
        })
    },

    createProduct : function(request, response) {
        var newProduct = new Product(
            { 
                name: request.body.name,
                qty: request.body.qty,
                price: request.body.price
            })
        newProduct.save(function(err) {
            if(err) {
                console.log("Error: ", err)
            }
            else {
                console.log("Success!")
                response.json({message: "Success", data: "Added " + newProduct.name })    
            }
        })
    },

    updateProduct : function(request, response) {
        Product.findOneAndUpdate({ idNum: request.params.idNum },
            {$set: { 
                name: request.body.name,
                qty: request.body.qty,
                price: request.body.price
            }},
            function(err, data) {
                if(err) {
                    console.log("Error: ", err)
                } else {
                    console.log("Success!")
                    response.json({message: "Success", data: "Updated " + data.name })    
                }
            }
        )
    },

    destroyProduct : function(request, response) {
        Product.deleteOne({ idNum: request.params.idNum }, function(err) {
            if(err) {
                console.log("Error: ", err)
            } else {
                console.log("Success!")
                response.json({message: "Success", data: "Product deleted." })    
            }
        });
    }
    // any other functions that will be linked to routes
}






