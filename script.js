function downloadVideo() {
    const url = document.getElementById('videoUrl').value;
    const message = document.getElementById('message');

    if (!url) {
        message.innerText = "Please enter a valid URL!";
        return;
    }

    alert("This is just a UI. No real download functionality is implemented.");
}
