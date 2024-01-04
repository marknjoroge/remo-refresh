var playing = false;

function checkAndRefresh() {
    var element = document.getElementsByClassName("l3t8Qe")[0];

    if (element && !playing) {
        if (element.textContent.trim() === "0") {
            console.log("Refreshing page...");
            location.reload();
        } else {
            playNotification();
            return;
        }
    }
}

function playNotification() {
    var myAudio = new Audio(chrome.runtime.getURL("assets/music/alarm.mp3"));
    if (!playing) { myAudio.play(); playing = true; }
}

setInterval(checkAndRefresh, 10000);
// document.body.addEventListener("mousemove", function () {
//     playNotification();
// })
