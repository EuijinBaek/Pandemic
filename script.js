
window.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    scrollToTopButton.addEventListener('click', function() {
    scrollToTop();
    });

    function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu-bar a");
    menuLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var targetPage = this.getAttribute("href");
        window.location.href = targetPage;
    });
    });
});

