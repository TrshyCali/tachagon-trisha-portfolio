function downloadResume() {
    var link = document.createElement('a');  // Create a link element
    link.href = 'portfolio/resume.pdf';  // Path to your PDF file
    link.download = 'resume.pdf';  // Suggested filename for download
    document.body.appendChild(link);  // Append the link to the body (necessary for some browsers)
    link.click();  // Trigger the click to initiate download
    document.body.removeChild(link);  // Clean up by removing the link element after download
}
// JavaScript for Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxClose = document.getElementById("lightbox-close");
    const portfolioItems = document.querySelectorAll(".portfolio-item a");

    portfolioItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            lightboxImage.src = this.href;
            lightboxOverlay.classList.add("visible");
        });
    });

    lightboxClose.addEventListener("click", function () {
        lightboxOverlay.classList.remove("visible");
    });

    lightboxOverlay.addEventListener("click", function (e) {
        if (e.target === lightboxOverlay) {
            lightboxOverlay.classList.remove("visible");
        }
    });
});

document.getElementById('lightbox-close').addEventListener('click', function() {
    document.getElementById('lightbox-overlay').classList.add('hidden');
});
document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
});
