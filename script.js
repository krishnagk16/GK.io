
function openLogin() {

    // CLOSE REGISTER IF OPEN
    const reg = document.getElementById("regbox");
    reg.classList.add("hide");
    reg.classList.remove("show");
    setTimeout(() => {
        reg.style.display = "none";
    }, 10);

    // OPEN LOGIN
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


// -------------------- REGISTER BOX CODE ---------------------

function openreg() {

    // CLOSE LOGIN IF OPEN
    const log = document.getElementById("loginbox");
    log.classList.add("hide");
    log.classList.remove("show");
    setTimeout(() => {
        log.style.display = "none";
    }, 800);

    // OPEN REGISTER
    const box = document.getElementById("regbox");
    box.style.display = "inline-block";
    setTimeout(() => {
        box.classList.add("show");
        box.classList.remove("hide");
    }, 10);
}

function closereg() {
    const box = document.getElementById("regbox");
    box.classList.add("hide");
    box.classList.remove("show");
    setTimeout(() => {
        box.style.display = "none";
    }, 10);
}

document.getElementById("rcloseBtn").onclick = closereg;

// ----------- REGISTER SUBMIT SUCCESS -----------
document.getElementById("regSubmit").addEventListener("click", function (event) {

    event.preventDefault();   // Stop page from refreshing

    const box = document.getElementById("regbox");

    // CLOSE REGISTER POPUP
    box.classList.add("hide");
    box.classList.remove("show");

    setTimeout(() => {
        box.style.display = "none";
    }, 300);

    // SHOW SUCCESS POPUP
    const suc = document.getElementById("successBox");
    suc.style.display = "inline-block";

    setTimeout(() => {
        suc.classList.add("show");
        suc.classList.remove("hide");
    }, 10);

    // AUTO HIDE AFTER 2 SECONDS
    setTimeout(() => {
    suc.classList.add("hide");
    suc.classList.remove("show");

    setTimeout(() => {
        suc.style.display = "none";

        // ⭐ RE-OPEN REGISTER AGAIN
        const reg = document.getElementById("regbox");
        reg.style.display = "inline-block";
        setTimeout(() => {
            reg.classList.add("show");
            reg.classList.remove("hide");
        }, 10);

    }, 200);
}, 2000);
});

