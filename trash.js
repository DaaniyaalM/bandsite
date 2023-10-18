document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.querySelector(".comments__form");
  const commentsDiv = document.querySelector(".comments__list-item");

  const commentsArray = [
    {
      username: "Connor Walton",
      commentText:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      date: new Date("2023-12-20"),
    },
    {
      username: "Emilie Beach",
      commentText: "I love this content!",
      date: new Date("2023-12-20"),
    },
    {
      username: "Miles Acosta",
      commentText:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
      date: new Date("2023-12-20"),
    },
  ];

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = commentForm.querySelector(".name");
    const commentInput = commentForm.querySelector(".comments__text");

    if (nameInput && commentInput) {
      const name = nameInput.value;
      const comment = commentInput.value;
      const currentDate = new Date();
      const newComment = {
        username: name,
        commentText: comment,
        date: Date.now(),
      };

      commentsArray.unshift(newComment);

      nameInput.value = "";
      commentInput.value = "";

      const commentElement = document.createElement("div");
      commentElement.className = "comment";
      commentElement.innerHTML = `<strong>${newComment.username}:</strong> ${newComment.commentText}`;

      commentsDiv.insertBefore(commentElement, commentsDiv.firstChild);
    }
  });

  commentsArray.forEach(function (comment) {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = `<strong>${comment.username}:</strong> ${comment.commentText}`;
    commentsDiv.appendChild(commentElement);
  });
});
