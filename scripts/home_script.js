document.addEventListener('DOMContentLoaded', () => {//mogana ra'g mahuman ug load ang DOM

  const logoutBtn = document.getElementById('logoutBtn');//pislitanan sa logout
  logoutBtn.addEventListener('click', () => {//function inig logout
	const confirmLogout = confirm("Do you want to log out?");//mangutana sa daan sa dili pa mo hawa
	
	if (confirmLogout) {//kumpermasyon sa pag logout
	  setTimeout(() => {//kadyut pa aysa mo hawa
	    window.location.href = "index.html";//balik sa login page
	  }, 1000);
	}
  });

});
