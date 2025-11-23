
/*
function openLogin() {
  document.getElementById("loginbox").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginbox").style.display = "none";
}

document.getElementById("closeBtn").onclick = closeLogin;

*/
        function openLogin() {
            const box = document.getElementById("loginbox");
            box.style.display = "inline-block";
            setTimeout(() => {
                box.classList.add("show");
                box.classList.remove("hide");
            }, 10);
        }

        function closeLogin() {
            const box = document.getElementById("loginbox");
            box.classList.add("hide");
            box.classList.remove("show");
            setTimeout(() => {
                box.style.display = "none";
            }, 800);
        }

        document.getElementById("closeBtn").onclick = closeLogin;