const express = require("express");
const router = express.Router();
const PhuketCommentSchema = require("../Models/Phuket-comments.model");
const ArticleCommentSchema = require("../Models/Article-1-comments.model");
const BangkokCommentSchema = require("../Models/Bangkok-comments.model");
const ThailandCommentSchema = require("../Models/Thailand-comments.model");
const BaliCommentSchema = require("../Models/Bali-comments.model");
const PhuketBeachCommentSchema  = require("../Models/Phuket-Beach-comments.model");
const VietnamCommentSchema = require("../Models/Vietnam-comments.model");
const SrilankaCommentSchema = require("../Models/Sri-Lanka-comments.model");
const PattayaCommentSchema = require("../Models/Pattaya-comments.model");
const ThailandTravelCommentSchema = require("../Models/Thailand-Travel-comments.model");
const SamuiCommentSchema = require("../Models/Samui-comments.model");

const PhuketReplySchema = require("../Models/PhuketReply.model")
const ThailandReplySchema = require("../Models/Thailand-reply.model")
const Article1ReplySchema = require("../Models/Article-1-Reply.model")
const BangkokReplySchema = require("../Models/Bangkok-reply.model")
const BaliReplySchema = require("../Models/Bali-reply.model")
const PhuketBeachReplySchema = require("../Models/Phuket-Beach-Reply.model");
const VietnamReplySchema = require("../Models/Vietnam-reply.model");
const SrilankaReplySchema = require("../Models/Sri-Lanka-reply.model");
const PattayaReplySchema = require("../Models/Pattaya-reply.model");
const ThailandTravelReplySchema = require("../Models/Thailand-Travel-reply.model");
const SamuiReplySchema = require("../Models/Samui-reply.model");


router.get("/PhuketComments", async (req,res) =>{
    console.log("PhuketComments hit")
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

router.get("/BaliComments", async (req,res) =>{
    const comments = await BaliCommentSchema.find()
    res.json(comments)
})
router.get("/PhuketBeachComments", async (req,res) =>{
    const comments = await PhuketBeachCommentSchema.find()
    res.json(comments)
})
router.get("/VietnamComments", async (req,res) =>{
    const comments = await VietnamCommentSchema.find()
    res.json(comments)
})
router.get("/SrilankaComments", async (req,res) =>{
    const comments = await SrilankaCommentSchema.find()
    res.json(comments)
})
router.get("/PattayaComments", async (req,res) =>{
    const comments = await PattayaCommentSchema.find()
    res.json(comments)
})
router.get("/ThailandTravelComments", async (req,res) =>{
    const comments = await ThailandTravelCommentSchema.find()
    res.json(comments)
})
router.get("/SamuiComments", async (req,res) =>{
    const comments = await SamuiCommentSchema.find()
    res.json(comments)
})



//GET REPLIES
router.post("/PhuketReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await PhuketReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/ThailandReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await ThailandReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/Article1Replies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await Article1ReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/BangkokReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await BangkokReplySchema.findOne({_id: replyId})
    res.json(comment)
})

router.post("/BaliReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await BaliReplySchema.findOne({_id: replyId})
    res.json(comment)
})
router.post("/PhuketBeachReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await PhuketBeachReplySchema.findOne({_id: replyId})
    res.json(comment)
})
router.post("/VietnamReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await VietnamReplySchema.findOne({_id: replyId})
    res.json(comment)
})
router.post("/SrilankaReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await SrilankaReplySchema.findOne({_id: replyId})
    res.json(comment)
})
router.post("/PattayaReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await PattayaReplySchema.findOne({_id: replyId})
    res.json(comment)
})
router.post("/ThailandTravelReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await ThailandTravelReplySchema.findOne({_id: replyId})
    res.json(comment)
})
router.post("/SamuiReplies", async (req,res) =>{
    const {replyId} = req.body
    const comment = await SamuiReplySchema.findOne({_id: replyId})
    res.json(comment)
})





module.exports = router;