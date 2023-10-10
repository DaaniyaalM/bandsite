document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.querySelector(".comments__form");
  const commentsList = document.querySelector(".comments__list");

  const commentsArray = [
    {
      username: "Connor Walton",
      commentText:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      date: new Date("2021-02-18"),
    },
    {
      username: "Emilie Beach",
      commentText: "I love this content!",
      date: new Date("2021-01-10"),
    },
    {
      username: "Miles Acosta",
      commentText:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
      date: new Date("2023-12-20"),
    },
  ];

  // Function to add a comment to the list
  function addCommentToList(comment) {
    const listItem = document.createElement("li");
    listItem.className = "comments__list-item";

    // Create a paragraph element to display the comment text (need to modify this to follow BEM convention and style)
    const commentTextElement = document.createElement("p");
    commentTextElement.innerHTML = `<strong>${comment.username}:</strong> ${comment.commentText}`;

    // Create a paragraph element to display the date (need to modify this to follow BEM convention and style)
    const dateElement = document.createElement("p");
    dateElement.textContent = "Date: " + comment.date.toLocaleDateString(); // Format the date as desired

    // Append the comment text and date to the list item
    listItem.appendChild(commentTextElement);
    listItem.appendChild(dateElement);

    // Append the list item to the comments list
    commentsList.appendChild(listItem);
  }

  // Populate the comments list with existing comments
  commentsArray.forEach(addCommentToList);

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
        date: currentDate, // Use the current date
      };

      commentsArray.unshift(newComment);

      nameInput.value = "";
      commentInput.value = "";

      // Add the new comment to the list
      addCommentToList(newComment);
    }
  });
});
