var playing = false;

function checkAndRefresh() {
    // var element = document.querySelectorAll('.leading-6.py-2.text-neutral-800.w-1/3.text-center');
    var spinner = document.querySelectorAll('.jsx-3750104642.spinner-blade');
    // var title

    var pageText = document.body.textContent || document.body.innerText;

    if (pageText.includes("Your task queue is currently empty")) {
        location.reload();
    } else {
        if (!spinner) {
            playNotification();
            return;
        }
    }



    // if (element) {
    //     // if (element.textContent.trim() === "0") {
    //     // console.log("Refreshing page...");
    //     location.reload();
    // } else {
    //     if (!spinner) {
    //         playNotification();
    //         return;
    //     }
    // }
}

function playNotification() {
    var myAudio = new Audio(chrome.runtime.getURL("assets/music/alarm.mp3"));
    if (!playing) { myAudio.play(); playing = true; }
}

setInterval(checkAndRefresh, 13000);
// document.body.addEventListener("mousemove", function () {
//     playNotification();
// })
