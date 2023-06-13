const json_data = require("../articles.json")

const getAllArticles = (request, response) => {
    response.json(json_data)
}

const getArticle = (request, response) => {
    response.json(json_data.articles)
}

const getArticleByNumber = (request, response) => {
    const id = request.params.id

    const article_by_id = json_data.articles.filter((item)=> item.id == id)
    
    response.json(article_by_id)
}
module.exports = {
    getAllArticles,
    getArticleByNumber,
    getArticle
}