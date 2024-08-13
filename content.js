var playing = false;

function checkAndRefresh() {
    var currentlyEmpty = document.body.textContent.includes("Your task queue is currently empty");

    if (currentlyEmpty) {
	    location.reload();
        } else if(!playing) {
            playNotification();
            return;
        }

}

function playNotification() {
    var myAudio = new Audio(chrome.runtime.getURL("assets/music/alarm.mp3"));
    if (!playing) { myAudio.play(); playing = true; }
}

setInterval(checkAndRefresh, 30000);
// document.body.addEventListener("mousemove", function () {
//     playNotification();
// })
