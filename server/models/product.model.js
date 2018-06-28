// =============== DB MODEL ===============

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.createConnection('mongodb://localhost/commerceSite'))

const ProductSchema = new mongoose.Schema(
    {
        idNum: { 
            type: Number
        },
        name: { 
            type: String, 
            required: [true, "Product must have a name!"], 
            minlength: [3, "Product name must be at least 3 characters long!"] 
        },
        qty: { 
            type: Number, 
            required: [true, "Product must have a quantity!"], 
            min: [0, "You cannot have a negative number of products!"] 
        },
        price: { 
            type: Number, 
            required: [true, "Product must have a quantity!"], 
            min: [0, "You cannot have a negative price!"] 
        }
    },  
    { timestamps: true }
);
ProductSchema.plugin(autoIncrement.plugin, { model: 'Book', field: 'idNum' })
mongoose.model('Product', ProductSchema)

