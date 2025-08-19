window.addEventListener('DOMContentLoaded', () => {
  function loadPost(filePath, text, imageSrc) {
    fetch(filePath)
      .then(res => res.text())
      .then(html => {
        let customizedHTML = html
          .replace("[TEXT]", text)
          .replace("[IMAGE]", imageSrc);

        const container = document.getElementById("postContainer");
        container.insertAdjacentHTML("beforeend", customizedHTML);

        const lastPost = container.lastElementChild;
        const heartBtn = lastPost.querySelector(".heartBtn");

        let liked = false;
        heartBtn.addEventListener("click", () => {
          liked = !liked;
          heartBtn.textContent = liked ? "Liked ❤️" : "Like 🤍";
		  
		  if(liked){
			heartBtn.classList.add('liked');
		  }
		  else{
			heartBtn.classList.remove('liked'); 
		  }
        });
      })
      .catch(err => console.error("Error loading post:", err));
  }

  loadPost("post.html", "My dog Browny 🐾", "images/post.png");
  loadPost("post.html", "This is Odie...🦴", "images/post2.png");
  loadPost("post.html", "Weekend trip 🏞️", "images/post3.jpg");
});
