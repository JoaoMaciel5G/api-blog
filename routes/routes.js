const express = require("express")
const router = express.Router()
const {getArticleByNumber, getAllArticles} = require("../controller/controller")

router.get("/", getAllArticles)

router.get("/:id", getArticleByNumber)

module.exports = router
