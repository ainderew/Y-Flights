console.log("script loaded");
let commentsArray = [];
let currentReplyOpen;


const submitComment = async (event) => {
  event.preventDefault();
  const commentorName = document.querySelector(".comment-input-name");
  const commentorEmail = document.querySelector(".comment-input-email");
  const comment = document.getElementById("comment-input-form");
  const endpoint = "http://localhost:5000/comments/PhuketPostComment";

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
    .then((data) => console.log(data));
};


const renderComments = async () => {
  const endpoint = "http://localhost:5000/getComments/PhuketComments";
  await fetch(endpoint, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) =>
      data.forEach((el) => {
        commentsArray = data;
        createHTMLComponent(el);
      })
    );
  addReplyButtonListener();
};

const createHTMLComponent = ({
  name,
  email,
  comment,
  year,
  month,
  day,
  hour,
  minute,
}) => {
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
      <button class="comment-show-reply-btn">Show Replies</button>
    </div>`;
  commentDiv.appendChild(div);
};

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
                  <input required type="text" class="comment-input comment-input-name">
              </div>

              <div class="comment-input-container">
                  <label for="" class="comment-label">Email</label>
                  <input required type="text" class="comment-input comment-input-email">
              </div>
          </div>
          

          <label for="comment" class="comment-label">Leave a reply</label>
          <textarea required name="comment" id="comment-input-form" cols="30" rows="5"></textarea>
          <div class="comment-btn-container">
              <button onclick="submitComment(event)" type="submit" class="comment-btn">Submit</button>
          </div>
        </form>`;
  removeReplyInputs()
  commentContainer[index].parentNode.insertBefore(replyInput, commentContainer[index].nextSibling);

  console.log(commentsArray[index]);
};

const removeReplyInputs = () =>{
  const replyInputContainer = document.querySelectorAll(".replyInputContainer");

  replyInputContainer.foreach(el => el.remove())
}

renderComments();
