console.log("script loaded");
const endpointURL = "https://y-flights.herokuapp.com/"
// const endpointURL = "http://localhost:5000/"
let commentsArray = [];
let globalRepliesArray = []
let currentReplyOpen = false;
let repliesArrayCtr = [];
let commentsCtr;

const clearCommentsDiv = () =>{
  const commentDiv = document.querySelector(".comment-section-inner");
  commentDiv.innerHTML = ""
}

const resetReplyOpen = () =>{
  currentReplyOpen = false
}

//HANDLES SUBMISSION OF COMMENT
const submitComment = async (event) => {
  event.preventDefault();
  repliesArrayCtr = [];
  
  const commentDiv = document.querySelector(".comment-section-inner");
  const commentorName = document.querySelector(".comment-input-name");
  const commentorEmail = document.querySelector(".comment-input-email");
  const comment = document.getElementById("comment-input-form");
  const endpoint = `${endpointURL}comments/PhuketBeachPostComment`;

  commentDiv.scrollIntoView({block: "center"});
  const bodyObject = {
    name: commentorName.value,
    email: commentorEmail.value,
    comment: comment.value,
  };
  
  clearCommentsDiv()
  renderLoadingIndicator()

  await fetch(endpoint, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(bodyObject),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data === "successful"){
        clearCommentsDiv()
        renderComments()
        resetReplyOpen()
        comment.innerHTML = "";
      }
    });
};



//RENDERING COMMENTS

const renderComments = async () => {
  repliesArrayCtr = []
  const endpoint = `${endpointURL}getComments/PhuketBeachComments`;
  await fetch(endpoint, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      commentsArray = data;
      commentsCtr = commentsArray.length
      // for(let i = 0; i<commentsArray.length; i++){
      //   createHTMLComponent(commentsArray[i],i);
      //   getReplies(commentsArray[i].replies,i)
      // }
      commentsArray.forEach((el,index) => {
        globalRepliesArray.push([])
        createHTMLComponent(el,index);
        getReplies(el.replies,index)
      })
    }
    );
    
  
    
  // addReplyButtonListener();
};


// const addReplyButtonListener = () => {
//   const replyBtn = document.querySelectorAll(".comment-reply-btn");

//   replyBtn.forEach((el, index) => {
//     el.addEventListener("click", () => {
//       onReply(index);
//     });
//   });
// };



//CREATES HTML TO RENDER
const createHTMLComponent = ({name,email,comment,year,month,day,hour,minute,},indexOfComment) => {
  const commentDiv = document.querySelector(".comment-section-inner");
  const div = document.createElement("div");

  div.className = "comment-container";
  div.innerHTML = `<div class="comment-container-upper">
      <p class="comment-name">${name}</p>
      <p class="comment-date">${month} ${day}, ${year} at ${hour}:${minute}</p>
    </div>

    <div class="comment-container-lower">
      <p class="comment-text justify-wrapper">
          ${comment}
      </p>
      <button onclick="onReply(${indexOfComment}, '${name}')" class="comment-reply-btn">Ответить</button>
     
    </div>`;
  commentDiv.appendChild(div);
};

//FETCHES REPLY 
const getReplies =  async (repliesArray,indexOfComment) =>{
  repliesArrayCtr.push(repliesArray.length)
  
  console.log(repliesArrayCtr)
  console.log("I GOT CALLED")
  console.log(repliesArrayCtr[indexOfComment])

    repliesArray.forEach(async (el,index) => {
      const replyId = {
        replyId:el
      }
      
      const endpoint = `${endpointURL}getComments/PhuketBeachReplies` ;
      await fetch(endpoint,{
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(replyId)
    })
    .then(response => response.json())
    .then(data => {
        globalRepliesArray[indexOfComment].push(data)
        repliesArrayCtr[indexOfComment] -= 1;
        console.log(repliesArrayCtr[indexOfComment])
        if(repliesArrayCtr[indexOfComment] === 0){
          arrangeAndDisplayReplies(indexOfComment)
        }
      })
    })
 

  


    const arrangeAndDisplayReplies = (currentIndex) =>{
      console.log("RANA")
      globalRepliesArray[currentIndex].sort((a,b) => b.replyIndex - a.replyIndex)
      globalRepliesArray[currentIndex].forEach((el,index) =>{
        renderReply(el,currentIndex,el.replyIndex)
      })
      console.log( globalRepliesArray )
      // globalRepliesArray = []
      repliesArrayCtr.unshift()
      
    }

}

const renderReply = ({name, repliedToName, month,day,year,hour,minute,comment},indexOfComment,indexOfReply) =>{
  const currentComment = document.querySelectorAll(".comment-container");
  const reply = document.createElement("div");
  
  reply.className = `reply-container reply${indexOfReply}`;
  reply.innerHTML = `
        <div class="comment-container-upper">
          <p class="comment-name" id="${indexOfReply}">${name}</p>
          <p class="comment-date">${month} ${day}, ${year} at ${hour}:${minute}</p>
        </div>

        <div class="comment-container-lower">
          <p class="comment-text justify-wrapper">
              <span onclick="scrollToRepliedComment(${indexOfReply})" class="replied-to-name">@${repliedToName}</span> ${comment}
          </p>
          <button onclick="onSubReply(${indexOfReply},${indexOfComment},'${name}')" class="comment-reply-btn">Ответить</button>
        </div>`;
  
  
  currentComment[indexOfComment].parentNode.insertBefore(reply, currentComment[indexOfComment].nextSibling);
}

const scrollToRepliedComment = (indexOfReply) =>{
  const comment = document.getElementById(`${indexOfReply}`)
  
  comment.scrollIntoView(false)
  
}

const onSubReply = (indexOfReply, indexOfComment, nameOfRepliedToComment) => {
  console.log("reply-"+indexOfReply)
  const ReplyContainer = document.querySelector(`.reply${indexOfReply }`);
  const replyInput = document.createElement("div");
  replyInput.className = "replyInputContainer";
  replyInput.innerHTML = `<form class="comment-form">
          <div class="comment-row">
              <div class="comment-input-container">
                  <label for="Name" class="comment-label">Ваше имя или Ник</label>
                  <input required id="reply-input-name" type="text" class="comment-input comment-input-name">
              </div>

              <div class="comment-input-container">
                  <label for="" class="comment-label">Email</label>
                  <input required id="reply-input-email" type="text" class="comment-input comment-input-email">
              </div>
          </div>
          

          <label for="comment" class="comment-label">Leave a reply</label>
          <textarea required placeholder="@${nameOfRepliedToComment}" name="comment" id="reply-input-comment" cols="30" rows="5"></textarea>
          <div class="comment-btn-container">
              <button type="submit" id="submit-reply-btn" class="comment-btn">Отправить</button>
          </div>
        </form>`;
  
        
  if (currentReplyOpen){
    removeReplyInputs()
  }
  ReplyContainer.parentNode.insertBefore(replyInput, ReplyContainer.nextSibling);
  currentReplyOpen = true;
  AddListenerSendReply(indexOfComment,nameOfRepliedToComment)
  
};






const onReply = (index,nameOfRepliedToComment) => {
  const commentContainer = document.querySelectorAll(".comment-container");
  const replyInput = document.createElement("div");
  replyInput.className = "replyInputContainer";
  replyInput.innerHTML = `<form class="comment-form">
          <div class="comment-row">
              <div class="comment-input-container">
                  <label for="Name" class="comment-label">Ваше имя или Ник</label>
                  <input required id="reply-input-name" type="text" class="comment-input comment-input-name">
              </div>

              <div class="comment-input-container">
                  <label for="" class="comment-label">Email</label>
                  <input required id="reply-input-email" type="text" class="comment-input comment-input-email">
              </div>
          </div>
          

          <label for="comment" class="comment-label">Leave a reply</label>
          <textarea required  placeholder="@${nameOfRepliedToComment}" name="comment" id="reply-input-comment" cols="30" rows="5"></textarea>
          <div class="comment-btn-container">
              <button type="submit" id="submit-reply-btn" class="comment-btn">Отправить</button>
          </div>
        </form>`;
  
        
  if (currentReplyOpen){
    removeReplyInputs()
  }
  commentContainer[index].parentNode.insertBefore(replyInput, commentContainer[index].nextSibling);
  currentReplyOpen = true;
  AddListenerSendReply(index,nameOfRepliedToComment)
  
  console.log(commentsArray[index]);
};



const AddListenerSendReply = (index,repliedToName) =>{
  const submitReplyBtn = document.getElementById("submit-reply-btn");
  
  submitReplyBtn.addEventListener("click", (event) =>{
    submitReply(event,commentsArray[index]._id,repliedToName)
  })
}

//CLOSES ANY OPEN REPLY INPUT FORMS TO REMOVE DUPLICATES
const removeReplyInputs = () =>{
  const replyInputContainer = document.querySelector(".replyInputContainer");
  console.log("removed")
  replyInputContainer.remove()
}

//FUNCTION THAT DEALS WITH REPLIES BEING SENT
const submitReply = async (event,commentId,repliedToName) =>{
  event.preventDefault();
  globalRepliesArray = []
  repliesArrayCtr = []
  const name = document.getElementById("reply-input-name");
  const email = document.getElementById("reply-input-email");
  const comment = document.getElementById("reply-input-comment");
  
  const endpoint = `${endpointURL}comments/PhuketBeachPostReply`;
  
  const replyObj = {
    name: name.value,
    email: email.value,
    comment: comment.value,
    commentId: commentId,
    repliedToName: repliedToName
  }
  clearCommentsDiv()
  renderLoadingIndicator()
  
  await fetch(endpoint,{
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(replyObj)
  })
  .then(response => response.json())
  .then(data => {
    if (data === "successful"){
      clearCommentsDiv()
      renderComments()
      resetReplyOpen()
    }
  })
}

const renderLoadingIndicator = () =>{
  const commentDiv = document.querySelector(".comment-section-inner");
  commentDiv.innerHTML = `<div class="lds-dual-ring"></div>`
  commentDiv.scrollIntoView({block: "center"})
}

renderComments();
