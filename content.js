var playing = false;
var extensionEnabled = true;
var audioElement = null;

function checkAndRefresh() {
    if (!extensionEnabled) return;

    var currentlyEmpty = document.body.textContent.includes("currently empty");

    if (currentlyEmpty && !playing) {
        location.reload();
    } else if (!playing) {
        playNotification();
    }
}

function playNotification() {
    if (!audioElement) {
        audioElement = new Audio(chrome.runtime.getURL("assets/music/alarm.mp3"));
    }
    if (!playing) {
        audioElement.play();
        playing = true;
    }
}

function stopAudio() {
    if (audioElement && playing) {
        audioElement.pause();
        audioElement.currentTime = 0;
        playing = false;
    }
}

function toggleExtension() {
    extensionEnabled = !extensionEnabled;
    updateUI();
}

function updateUI() {
    document.getElementById('toggleSwitch').checked = extensionEnabled;
    document.getElementById('stopButton').disabled = !playing;
}

function createControls() {
    const controlsDiv = document.createElement('div');
    controlsDiv.style.position = 'fixed';
    controlsDiv.style.top = '10px';
    controlsDiv.style.right = '10px';
    controlsDiv.style.zIndex = '9999';

    // Create toggle switch
    const toggleSwitch = document.createElement('input');
    toggleSwitch.type = 'checkbox';
    toggleSwitch.id = 'toggleSwitch';
    toggleSwitch.checked = extensionEnabled;
    toggleSwitch.addEventListener('change', toggleExtension);

    const toggleLabel = document.createElement('label');
    toggleLabel.htmlFor = 'toggleSwitch';
    toggleLabel.textContent = 'Enable Extension';

    // Create stop button
    const stopButton = document.createElement('button');
    stopButton.id = 'stopButton';
    stopButton.textContent = 'Stop Audio';
    stopButton.addEventListener('click', stopAudio);
    stopButton.disabled = !playing;

    controlsDiv.appendChild(toggleSwitch);
    controlsDiv.appendChild(toggleLabel);
    controlsDiv.appendChild(stopButton);

    document.body.appendChild(controlsDiv);
}

createControls();
setInterval(checkAndRefresh, 30000);
updateUI();