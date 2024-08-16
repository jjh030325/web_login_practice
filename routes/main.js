const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const IdPass = require("../models/IdPass");
const bcrypt = require("bcrypt");

router.get(
    ["/","/home"], 
    asyncHandler(async(req, res) => {
    const locals = {
        title: "Home",
    }
    const data = await IdPass.find();
    res.render("index", { message: ""});
})
);

router.post(
    "/register",
    asyncHandler(async(req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const idPass = await IdPass.create( {
            username: req.body.username,
            password: hashedPassword
        });
        res.redirect("/");
    })
)

router.post(
    "/login",
    asyncHandler(async(req, res) => {
        const { loginUsername, loginPassword } = req.body;
        const user = await IdPass.findOne({ username: loginUsername });
        if(!user) {
            return res.render("index", { message: "일치하는 사용자가 없습니다." });
        }

        const isValidPasswword = await bcrypt.compare(loginPassword, user.password);

        if(!isValidPasswword) {
            return res.render("index", { message: "비밀번호가 일치하지 않습니다." });
        }
        return res.render("index", { message: "로그인 성공!" });
    })
)

module.exports = router;