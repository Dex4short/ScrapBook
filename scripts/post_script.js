window.addEventListener('DOMContentLoaded', () => {
  function loadPost(filePath, text, imageSrc) {//hinimo nga function para sa pag generate ug usa ka post
    fetch(filePath)
      .then(res => res.text())
      .then(html => {
        let customizedHTML = html
          .replace("[TEXT]", text)//ilisan tung [TEXT] nga nasa template sa post.html
          .replace("[IMAGE]", imageSrc);//ilisan tung [IMAGE] nga nasa template sa post.html

        const container = document.getElementById("postContainer");//kadtung container sa homepage kung asa ibutang ang mga post
        container.insertAdjacentHTML("beforeend", customizedHTML);//sa pag insert sa isa ka post ngadto sa container

        const lastPost = container.lastElementChild;//ang bago na nga post ug dinhi pangitaun tung heart button
        const heartBtn = lastPost.querySelector(".heartBtn");//pislitanan sa like or heart button

        let liked = false;
        heartBtn.addEventListener("click", () => {//function sa like
          liked = !liked;//mag bali bali ni siya kung ni like or dili
          heartBtn.textContent = liked ? "Liked ❤️" : "Like 🤍";//red kung ni like, white kung wala
		  
		  if(liked){
			heartBtn.classList.add('liked');//mo dugang ug style sa like button
		  }
		  else{
			heartBtn.classList.remove('liked');//mo tangal sa style sa like nga button
		  }
        });
      })
      .catch(err => console.error("Error loading post:", err));//kung di mogana...
  }

  loadPost("post.html", "My dog Browny 🐾", "images/post.png");//post ni browny
  loadPost("post.html", "This is Odie...🦴", "images/post2.png");//post ni odie
  loadPost("post.html", "Weekend trip 🏞️", "images/post3.jpg");//post nako
});

