function checkAndRefresh() {
    var element = document.getElementsByClassName("l3t8Qe")[0];

    if (element && element.textContent.trim() === "0") {
        console.log("Refreshing page...");
        location.reload();
    }
}

setInterval(checkAndRefresh, 10000);

