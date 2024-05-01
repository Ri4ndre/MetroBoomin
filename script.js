window.addEventListener('scroll', function() {
    var header = document.getElementById('myHeader');
    var logo = header.querySelector('.logo');
    
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
        logo.classList.add('logo-scrolled');
    } else {
        header.classList.remove('header-scrolled');
        logo.classList.remove('logo-scrolled');
    }
});

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    let parallaxImage = document.querySelector('.parallax-img');
    let parallaxTextContainer = document.querySelector('.text__container');

    parallaxImage.style.transform = 'translateY(' + offset * 0.2 + 'px)';
    parallaxTextContainer.style.transform = 'translateY(' + offset * 0.8 + 'px)';

    // Adjust the position of the text container to ensure it stays above the parallax image
    parallaxTextContainer.style.zIndex = '-1';
});

function showTooltip(event) {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";
    updateTooltipPosition(event);
    document.addEventListener("mousemove", updateTooltipPosition); // Add event listener to update tooltip position on mousemove
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
    document.removeEventListener("mousemove", updateTooltipPosition); // Remove event listener when hiding tooltip
}

function updateTooltipPosition(event) {
    var tooltip = document.getElementById("tooltip");
    var tooltipWidth = tooltip.offsetWidth;
    var tooltipHeight = tooltip.offsetHeight;
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calculate new tooltip position
    var tooltipX = mouseX + 10; // Add 10 pixels to the right of the cursor
    var tooltipY = mouseY - tooltipHeight - 10; // Adjust vertically above the cursor

    // Adjust tooltip position to prevent it from going off-screen
    if (tooltipX + tooltipWidth > windowWidth) {
        tooltipX = windowWidth - tooltipWidth;
    }
    if (tooltipY < 0) {
        tooltipY = 0;
    }

    tooltip.style.left = tooltipX + "px";
    tooltip.style.top = tooltipY + "px";
}


