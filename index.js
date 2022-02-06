document.addEventListener('DOMContentLoaded', () => {
    console.log("The DOM has Loaded");
    function changingText(newText) {
        let text = document.getElementById("text");
        text.textContent = newText;
    }
    console.log(changingText("This is really cool!"))
});

console.log("Text before DOM has loaded")
