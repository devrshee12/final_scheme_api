const express = require("express");
const router = express.Router();
const {getAllSchemes, getCategorySchemes} = require("../controllers/schemes");

  

router.route("/").get(getAllSchemes);
router.route("/categoryWise/:category").get(getCategorySchemes);

module.exports = router;
