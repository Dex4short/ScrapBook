document.addEventListener('DOMContentLoaded', () => {

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
	const confirmLogout = confirm("Do you want to log out?");
	
	if (confirmLogout) {
	  setTimeout(() => {
	    window.location.href = "index.html";
	  }, 1000);
	}
  });
});