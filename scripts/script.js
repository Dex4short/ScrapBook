document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "Dexter" && password === "12345") {
    message.style.color = "green";
    message.textContent = "Login successful!";
	
	setTimeout(() => {
	    window.location.href = "home.html";
	}, 1000);
	
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
