const express = require("express")
const json_data = require("../articles.json")

const router = express.Router()
const {getArticleByNumber, getArticle ,getAllArticles} = require("../controller/controller")

router.get("/articles", getAllArticles)

router.get("/articles/:id", getArticleByNumber)

module.exports = router
