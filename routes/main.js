const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const IdPass = require("../models/IdPass");

router.get(
    ["/","/home"], 
    asyncHandler(async(req, res) => {
    const locals = {
        title: "Home",
    }
    const data = await IdPass.find();
    res.render("index");
})
);

module.exports = router;