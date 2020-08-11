const express = require("express");
const router = express.Router();
const PhuketCommentSchema = require("../Models/Phuket-comments.model");
const ArticleCommentSchema = require("../Models/Article-1-comments.model");
const BangkokCommentSchema = require("../Models/Bangkok-comments.model");
const ThailandCommentSchema = require("../Models/Thailand-comments.model");

router.get("/PhuketComments", async (req,res) =>{
    const comments = await PhuketCommentSchema.find()
    res.json(comments)
})

router.get("/Article1Comments", async (req,res) =>{
    const comments = await ArticleCommentSchema.find()
    res.json(comments)
})

router.get("/BangkokComments", async (req,res) =>{
    const comments = await BangkokCommentSchema.find()
    res.json(comments)
})

router.get("/ThailandComments", async (req,res) =>{
    const comments = await ThailandCommentSchema.find()
    res.json(comments)
})




module.exports = router;