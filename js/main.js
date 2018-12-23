// Lets user click a button to indicate wether to attend a meetup or not 
// and shows the total number of users that have indicated to attend
let attend = function() {
  let elementId = document.getElementById("attending-number");
  let allAttending = document.getElementById("attending-number").innerHTML;
    if (elementId.className ==="not-clicked"){
    elementId.className = "clicked";
    let attend = parseInt(allAttending)+1;
    document.getElementById("attending-number").innerHTML = attend;
    }
   else{
   elementId.className = "not-clicked"
   let attend = parseInt(allAttending)-1;
   document.getElementById("attending-number").innerHTML = attend;
  } 
};

// Toggle between the hide and show view of the comment
function toggleHideAndShowComment() {
  let commentDiv = document.getElementById("view-comments");
  if (commentDiv.style.display === "none") {
    commentDiv.style.display = "block";
  } 
  else {
    commentDiv.style.display = "none";
  }
}

// Lets a user upvote a question
function upvote() {
  let upImage =document.getElementById("upvote-img");
  let allVotes = document.getElementById("upvotes-number").innerHTML;
  if (upImage.className ==="not-clicked"){
    upImage.src = "/img/upvote.png";
    upImage.className = "clicked";
    let upVote = parseInt(allVotes) + 1;
    document.getElementById("upvotes-number").innerHTML = upVote;
  }
  else{
    upImage.src ="/img/upvote-gray.jpg";
    upImage.className = "not-clicked";
    let upVote = parseInt(allVotes) - 1;
    document.getElementById("upvotes-number").innerHTML = upVote;
  }  
}

//// Lets a user downvote a question
function downvote() {
  let downImage =document.getElementById("downvote-img");
  let allVotes = document.getElementById("downvotes-number").innerHTML;
  if (downImage.className ==="not-clicked"){
    downImage.src = "/img/downvote.png";
    downImage.className = "clicked";
    let downVote = parseInt(allVotes) + 1;
    document.getElementById("downvotes-number").innerHTML = downVote;
  }
  else {
    downImage.src ="/img/downvote-gray.jpg";
    downImage.className = "not-clicked";
    let downVote = parseInt(allVotes) - 1;
    document.getElementById("downvotes-number").innerHTML = downVote;
  }  
}
