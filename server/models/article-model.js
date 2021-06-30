const mongoose = require("mongoose")
const { Schema } = mongoose

const ArticleSchema = new Schema({
    articleName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    articleLink: {
        type: String,
        required: true
    },
    category: [{
        type: String
    }],
    articleImage: String
})

const Article = mongoose.model("Article", ArticleSchema)

module.exports = { Article }