document.getElementById("loginForm").addEventListener("submit", function(e) {//mugana ni siya inig pislit sa login
  e.preventDefault(); 

  const username = document.getElementById("username").value;//input sa username
  const password = document.getElementById("password").value;//input sa password
  const message = document.getElementById("message");//output kong ok ang passwrod or dili

  if (username === "Dexter" && password === "12345") {//username ug password nga dawatun
    message.style.color = "green";
    message.textContent = "Login successful!";
	
	setTimeout(() => {//kadyut sa ayha mo sulod sa scrapbook home page
	    window.location.href = "home.html";//pag balhin sa home page
	}, 1000);
	
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});

