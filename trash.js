document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.querySelector(".comment-form");
  const commentsDiv = document.querySelector(".comments");

  const comments = Array.from(commentsDiv.getElementsByClassName("comment"));
  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.querySelector(".name");
    const commentInput = document.querySelector(".comment-text");
    const name = nameInput.value;
    const comment = commentInput.value;
    const newComment = document.createElement("div");

    newComment.className = "comment";
    newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
    comments.unshift(newComment);

    nameInput.value = "";
    commentInput.value = "";
    commentsDiv.innerHTML = "";
    comments.forEach(function (commentElement) {
      commentsDiv.appendChild(commentElement);
    });
  });
});

// const artistsArray = [
//     { name: "Bibbidy Bob", musicStyle: "Rock & Roll", date: Date.now() },
//     { name: "Bobbody Bib", musicStyle: "Roll & Rock", date: Date.now() },
//     { name: "Hibbidy Hob", musicStyle: "Hip-Hop", date: Date.now() },
//     { name: "Clippity Clop", musicStyle: "Dance", date: Date.now() },
//     { name: "Javvadi Dav", musicStyle: "Folk", date: Date.now() },
//   ];
