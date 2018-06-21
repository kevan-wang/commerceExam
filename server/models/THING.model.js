// =============== DB MODEL ===============

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PROJECTNAME')
const THINGSchema = new mongoose.Schema({
    property1: { type: String, required: true, default: "DEFAULT" },
    property2: { type: String, required: true },
    property3: { type: String, required: true },
    property4: { type: String, required: true },
    },  { timestamps: true }
);
mongoose.model('THING', THINGSchema)

//const THING = mongoose.model('THING')
