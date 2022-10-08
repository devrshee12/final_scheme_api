const Scheme = require("../models/Scheme");


const getAllSchemes = async(req, res) => {
    try {
        // {category: "Utility & Sanitation"}
        const data = await Scheme.find();
        return res.status(200).json({"data": data});
    } catch (err) {
        console.log(err);
    }
    // return res.status(200).json({"res" : "success"});
}
 

const getCategorySchemes = async(req, res) => {
    try {
        const cate = req.params.category;
        console.log(cate);
        const data = await Scheme.find({category: cate});
        return res.json({"data" : data});
    } catch (err) {
        console.log(err);
    }    
}

module.exports = {getAllSchemes, getCategorySchemes};