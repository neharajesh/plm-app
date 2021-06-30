const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const lodash = require("lodash")
const { extend } = lodash

const { Article } = require("../models/article-model")

router.route("/")
.get(async(req, res) => {
    try {
        const articles = await Article.find({})
        res.json({success: true, message: "Articles retrieved successfully", articles: articles})
    } catch (err) {
        console.log("Error occurred while retrieving articles")
        res.json({success: false, message: "Error occurred while retrieving articles", errMessage: err.message})
    }
})
.post(async(req, res) => {
    try {
        const article = req.body
        const newArticle = new Article(article)
        const savedArticle = await newArticle.save()
        res.json({success: true, message: "Article saved successfully", article: savedArticle})
    } catch (err) {
        console.log("Article could not be saved")
        res.json({success: false, message: "Article could not be saved", errMessage: err.message})
    }
})

router.param("articleId", async(req, res, next, articleId) => {
    try {
        const article = await Article.findById(articleId)
        if(!article) {
            console.log("Article with id could not be found")
            return res.json({success: false, message: "Article could not be found", article: []})
        }
        req.article = article
        next()
    } catch (err) {
        console.log("Error occurred while fetching article")
        res.json({success: false, message: "Could not find article", errMessage: err.message})
    }
})

router.route("/:articleId")
.get((req, res) => {
    let { article } = req
    res.json({success: true, message: "Article fetched successfully", article: article})
})
.post(async(req, res) => {
    try {
        let { article } = req
        let articleUpdates = req.body
        article = extend(article, articleUpdates)
        article = await article.save()
        res.json({success: true, message: "Article updated successfully", article: article})
    } catch (err) {
        console.log("Article could not be updated")
        res.json({success: true, message: "Article could not be updated", errMessage: err.message})
    }
})
.delete(async(req, res) => {
    try {
        let { article } = req
        await article.remove()
        res.json({success: true, message: "Article deleted successfully"})
    } catch (err) {
        console.log("Could not delete article")
        res.json({success: false, message: "Article could not be deleted", errMessage: err.message})
    }
})

module.exports = router