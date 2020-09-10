const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const PhuketCommentSchema = require("../Models/Phuket-comments.model");
const Article1CommentSchema = require("../Models/Article-1-comments.model");
const BangkokCommentSchema = require("../Models/Bangkok-comments.model");
const ThailandCommentSchema = require("../Models/Thailand-comments.model");
const BaliCommentSchema = require("../Models/Bali-comments.model");
const PhuketBeachCommentSchema = require("../Models/Phuket-Beach-comments.model");
const VietnamCommentSchema = require("../Models/Vietnam-comments.model");
const SrilankaCommentSchema = require("../Models/Sri-Lanka-comments.model");
const PattayaCommentSchema = require("../Models/Pattaya-comments.model");
const ThailandTravelCommentSchema = require("../Models/Thailand-Travel-comments.model");

//REPLY SCHEMA
const PhuketReplySchema = require("../Models/PhuketReply.model");
const ThailandReplySchema = require("../Models/Thailand-reply.model")
const Article1ReplySchema = require("../Models/Article-1-Reply.model")
const BangkokReplySchema = require("../Models/Bangkok-reply.model")
const BaliReplySchema = require("../Models/Bali-reply.model")
const PhuketBeachReplySchema = require("../Models/Phuket-Beach-Reply.model");
const VietnamReplySchema = require("../Models/Vietnam-reply.model");
const SrilankaReplySchema = require("../Models/Sri-Lanka-reply.model");
const PattayaReplySchema = require("../Models/Pattaya-reply.model");
const ThailandTravelReplySchema = require("../Models/Thailand-Travel-reply.model");

// PHUKET POST COMMENT ROUTE
router.post("/PhuketPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, PhuketCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/PhuketPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await PhuketReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, PhuketReplySchema, generatedId, PhuketCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, PhuketReplySchema, generatedId, PhuketCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF PHUKET COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - 


// THAILAND POST COMMENT ROUTE ===================================================================
router.post("/ThailandPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, ThailandCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/ThailandPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await ThailandReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, ThailandReplySchema, generatedId, ThailandCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, ThailandReplySchema, generatedId, ThailandCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF THAILAND COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// ARTICLE-1 POST COMMENT ROUTE ====================================================================================================================================
router.post("/Article1PostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, Article1CommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/Article1PostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await Article1ReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, Article1ReplySchema, generatedId, Article1CommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, Article1ReplySchema, generatedId, Article1CommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF ARTICLE 1 COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// BANGKOK POST COMMENT ROUTE ====================================================================================================================================
router.post("/BangkokPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, BangkokCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/BangkokPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await BangkokReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, BangkokReplySchema, generatedId, BangkokCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, BangkokReplySchema, generatedId, BangkokCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF BANGKOK COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// BALI POST COMMENT ROUTE ====================================================================================================================================
router.post("/BaliPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, BaliCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/BaliPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await BaliReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, BaliReplySchema, generatedId, BaliCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, BaliReplySchema, generatedId, BaliCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF BALI COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// PHUKET BEACH POST COMMENT ROUTE ====================================================================================================================================
router.post("/PhuketBeachPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, PhuketBeachCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/PhuketBeachPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await PhuketBeachReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, PhuketBeachReplySchema, generatedId, PhuketBeachCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, PhuketBeachReplySchema, generatedId, PhuketBeachCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF PHUKET BEACH COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// VIETNAM POST COMMENT ROUTE ====================================================================================================================================
router.post("/VietnamPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, VietnamCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/VietnamPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await VietnamReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, VietnamReplySchema, generatedId, VietnamCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, VietnamReplySchema, generatedId, VietnamCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF VIETNAM COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// SRI-LANKA POST COMMENT ROUTE ====================================================================================================================================
router.post("/SrilankaPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, SrilankaCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/SrilankaPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await SrilankaReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, SrilankaReplySchema, generatedId, SrilankaCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, SrilankaReplySchema, generatedId, SrilankaCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF SRI-LANKA COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//  POST COMMENT ROUTE ====================================================================================================================================
router.post("/PattayaPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, PattayaCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/PattayaPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await PattayaReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, PattayaReplySchema, generatedId, PattayaCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, PattayaReplySchema, generatedId, PattayaCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//END OF  COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


//THAILAND-TRAVEL  POST COMMENT ROUTE ====================================================================================================================================
router.post("/ThailandTravelPostComment", async (req, res) => {
  const { name, email, comment } = req.body;
  const status = commentHandler(name, email, comment, ThailandTravelCommentSchema)
  console.log(req.body)
  if (status){
    res.json("successful");
  }else{
    res.json(status)
  }
  
});

router.post("/ThailandTravelPostReply", async (req,res) => {
  const {name, email, comment, commentId, repliedToName} = req.body;
  let generatedReplyIndex;
  const generatedId = mongoose.Types.ObjectId();
  
  const fetchLatestReply = async() =>{
    const latestReply = await ThailandTravelReplySchema.findOne().sort({ _id: -1 })
    
    return latestReply
  }
 
  
  const latestReply = await fetchLatestReply()

  if (latestReply === null){
    generatedReplyIndex = 0;
    console.log("reply was null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, ThailandTravelReplySchema, generatedId, ThailandTravelCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  
  }else{
    generatedReplyIndex = latestReply.replyIndex + 1
    console.log("reply was NOT null")
    console.log(latestReply)
    const status = await replyHandler(name, email, comment, commentId, repliedToName, generatedReplyIndex, ThailandTravelReplySchema, generatedId, ThailandTravelCommentSchema)
    if (status){
      res.json("successful");
    }else{
      res.json(status)
    }
  }

})

//THAILAND-TRAVEL END OF  COMMENT ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// FUNCTIONS = = = = = = = = = = = = = = = = = 
const commentHandler = (name, email, comment, schema) =>{
  console.log(name)
  try {
    const commentPost = new schema({
    name: name,
    email: email,
    year: getYear(),
    month: getMonth(),
    day: getDay(),
    comment: comment,
    hour: getHour(),
    minute: getMinute(),
    });

    commentPost.save();
    return true

  } catch (err) {
      return err
  }
}

const replyHandler = async (name, email, comment, commentId, repliedToName, replyIndex, schema, generatedId, originSchema) =>{
  console.log(replyIndex);
  try {
    const reply = new schema({
    _id: generatedId,
    name: name,
    repliedToName: repliedToName,
    email: email,
    year: getYear(),
    month: getMonth(),
    day: getDay(),
    comment: comment,
    hour: getHour(),
    minute: getMinute(),
    replyIndex: replyIndex,
    });

    reply.save();
    await originSchema.updateOne({_id: commentId}, {$push: {replies:generatedId}})
    return true

  } catch (err) {
      return err
  }
}

const getYear = () => {
  const initDate = new Date();
  return initDate.getFullYear();
};

const getMonth = () => {
  const initDate = new Date();
  const month = initDate.getMonth();

  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      break;
  }
};

const getDay = () => {
  const initDate = new Date();
  return initDate.getDate();
};
const getHour = () => {
  const initDate = new Date();
  return initDate.getHours();
};
const getMinute = () => {
  const initDate = new Date();
  const minute = initDate.getMinutes()
  if (minute === 0){
    minute = 00
  }else if (minute < 10){
    minute = "0" + minute
  }
  
  return minute;
};


module.exports = router;