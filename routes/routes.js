const express = require("express")
const json_data = require("../articles.json")

const router = express.Router()
const {getArticleByNumber, getArticle ,getAllArticles} = require("../controller/controller")

router.get("/", getAllArticles)

router.get("/article", getArticle)

router.get("/:id", getArticleByNumber)

module.exports = router
