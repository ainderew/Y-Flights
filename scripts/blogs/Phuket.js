console.log("script loaded");
let commentsArray = [];
let globalRepliesArray = []
let currentReplyOpen = false;


const submitComment = async (event) => {
  event.preventDefault();
  const commentorName = document.querySelector(".comment-input-name");
  const commentorEmail = document.querySelector(".comment-input-email");
  const comment = document.getElementById("comment-input-form");
  const endpoint = "http://18.219.206.37:5000/comments/PhuketPostComment";

  const bodyObject = {
    name: commentorName.value,
    email: commentorEmail.value,
    comment: comment.value,
  };

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
        window.reload()
      }
    });
};



//RENDERING COMMENTS

const renderComments = async () => {
  const endpoint = "http://18.219.206.37:5000/getComments/PhuketComments";
  await fetch(endpoint, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      commentsArray = data;
      data.forEach((el,index) => {
        createHTMLComponent(el);
        getReplies(el.replies,index)
      })
    }
    );
    
  
    
  addReplyButtonListener();
};




//CREATES HTML TO RENDER
const createHTMLComponent = ({name,email,comment,year,month,day,hour,minute,}) => {
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
      <button class="comment-reply-btn">Reply</button>
     
    </div>`;
  commentDiv.appendChild(div);
};

//FETCHES REPLY 
const getReplies =  (repliesArray,indexOfComment) =>{
  repliesArray.forEach(async (el,index) => {
    const replyId = {
      replyId:el
    }
    
    const endpoint = "http://18.219.206.37:5000/getComments/PhuketReplies"
    await fetch(endpoint,{
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(replyId)
  })
  .then(response => response.json())
  .then(data => (renderReply(data,indexOfComment)))
  })
  
}

const renderReply = ({name,month,day,year,hour,minute,comment},indexOfComment) =>{
  const currentComment = document.querySelectorAll(".comment-container");
  const reply = document.createElement("div");
  
  reply.className = "reply-container";
  reply.innerHTML = `
        <div class="comment-container-upper">
          <p class="comment-name">${name}</p>
          <p class="comment-date">${month} ${day}, ${year} at ${hour}:${minute}</p>
        </div>

        <div class="comment-container-lower">
          <p class="comment-text justify-wrapper">
              ${comment}
          </p>
          
        </div>`;
  
  
  currentComment[indexOfComment].parentNode.insertBefore(reply, currentComment[indexOfComment].nextSibling);
}

const addReplyButtonListener = () => {
  const replyBtn = document.querySelectorAll(".comment-reply-btn");

  replyBtn.forEach((el, index) => {
    el.addEventListener("click", () => {
      onReply(index);
    });
  });
};


const onReply = (index) => {
  const commentContainer = document.querySelectorAll(".comment-container");
  const replyInput = document.createElement("div");
  replyInput.className = "replyInputContainer";
  replyInput.innerHTML = `<form class="comment-form">
          <div class="comment-row">
              <div class="comment-input-container">
                  <label for="Name" class="comment-label">Name</label>
                  <input required id="reply-input-name" type="text" class="comment-input comment-input-name">
              </div>

              <div class="comment-input-container">
                  <label for="" class="comment-label">Email</label>
                  <input required id="reply-input-email" type="text" class="comment-input comment-input-email">
              </div>
          </div>
          

          <label for="comment" class="comment-label">Leave a reply</label>
          <textarea required name="comment" id="reply-input-comment" cols="30" rows="5"></textarea>
          <div class="comment-btn-container">
              <button type="submit" id="submit-reply-btn" class="comment-btn">Submit</button>
          </div>
        </form>`;
  
        
  if (currentReplyOpen){
    removeReplyInputs()
  }
  commentContainer[index].parentNode.insertBefore(replyInput, commentContainer[index].nextSibling);
  currentReplyOpen = true;
  AddListenerSendReply(index)
  
  console.log(commentsArray[index]);
};

const AddListenerSendReply = (index) =>{
  const submitReplyBtn = document.getElementById("submit-reply-btn");
  
  submitReplyBtn.addEventListener("click", (event) =>{
    submitReply(event,commentsArray[index]._id)
  })
}

//CLOSES ANY OPEN REPLY INPUT FORMS TO REMOVE DUPLICATES
const removeReplyInputs = () =>{
  const replyInputContainer = document.querySelector(".replyInputContainer");
  replyInputContainer.remove()
}

//FUNCTION THAT DEALS WITH REPLIES BEING SENT
const submitReply = async (event,commentId) =>{
  event.preventDefault();
  const name = document.getElementById("reply-input-name");
  const email = document.getElementById("reply-input-email");
  const comment = document.getElementById("reply-input-comment");
  
  const endpoint = "http://18.219.206.37:5000/comments/PhuketPostReply"
  
  const replyObj = {
    name: name.value,
    email: email.value,
    comment: comment.value,
    commentId: commentId
  }
  
  
  await fetch(endpoint,{
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(replyObj)
  })
  .then(response => response.json())
  .then(data => console.log(data))
}

renderComments();
