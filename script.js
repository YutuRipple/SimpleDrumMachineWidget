const drumpads = document.querySelectorAll(".drum-pad")
const displayArea = document.getElementById("display");

function triggerPad(drumpad) {
    const audio = drumpad.querySelector(".clip");
    displayArea.textContent = drumpad.id;
    audio.play();
}

drumpads.forEach(drumpad => {
    drumpad.addEventListener("click", ()=>triggerPad(drumpad))
})

document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const audio = document.getElementById(key);
    if (!audio) return;
    triggerPad(audio.parentElement);
});