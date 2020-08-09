const express = require("express");
const router = express.Router();
const CommentSchema = require("../Models/comments.model");


router.post("/postComment", (req, res) => {
  // const year = getYear()
  // const month = getMonth()
  // const Day = getDay()

  try {
        const { name, email, comment } = req.body;

        const comment = new CommentSchema({
        name: name,
        email: email,
        year: getYear(),
        month: getMonth(),
        day: getDay(),
        comment: comment,
        replies: [],
        hour: getHour(),
        minute: getMinute(),
        });
        comment.save();
        res.json("successful");
        
  } catch (err) {
        res.json(err)
  }
});

router.get("/getComments", (req, res) => {
    CommentSchema.find()
});

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
  return initDate.getMinutes();
};
