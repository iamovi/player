document.addEventListener('DOMContentLoaded', function () {
    const videoInput = document.getElementById('videoInput');
    const videoPlayer = document.getElementById('videoPlayer');

    videoInput.addEventListener('change', function () {
        const file = this.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            videoPlayer.src = objectURL;
        }
    });
});
