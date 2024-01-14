var playing = false;

function checkAndRefresh() {
    var element = document.querySelectorAll('a[href="/dashboard"]');
    var spinner = document.querySelectorAll('.jsx-3750104642.spinner-wrapper');

    if (element) {
        // if (element.textContent.trim() === "0") {
        // console.log("Refreshing page...");
        location.reload();
    } else {
        if (!spinner) {
            playNotification();
            return;
        }
    }
}

function playNotification() {
    var myAudio = new Audio(chrome.runtime.getURL("assets/music/alarm.mp3"));
    if (!playing) { myAudio.play(); playing = true; }
}

setInterval(checkAndRefresh, 13000);
// document.body.addEventListener("mousemove", function () {
//     playNotification();
// })
