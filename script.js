// STICKY NAVIGATION HEADER (ON-SCROLL)

window.addEventListener('scroll', function() {
    var header = document.getElementById('header-scroll');
    var logo = header.querySelector('.logo');
    
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
        logo.classList.add('logo-scrolled');
    } else {
        header.classList.remove('header-scrolled');
        logo.classList.remove('logo-scrolled');
    }
});

// NEWSLETTER MODAL

var modalButton = document.getElementById('modal-button');
var closeButton = document.getElementById('close-button');
var newsModal = document.querySelector('.news-modal');

function showModal() {
  newsModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  newsModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

modalButton.addEventListener('click', function(e) {
  showModal();
  e.preventDefault();
});

newsModal.addEventListener('click', function(e) {
  if (e.target === newsModal) {
    hideModal();
  }
  e.preventDefault();
});

closeButton.addEventListener('click', function(e) {
  hideModal();
  e.preventDefault();
});

// SEPERATING TWO SCROLLING EFFECTS SINCE THEY
// INTERFERE WITH EACH OTHER

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let parallaxImage = document.querySelector('.parallax-img');
    let parallaxTextContainer = document.querySelector('.text__container');
    var screenWidth = window.innerWidth;


    if (screenWidth < 1024) { 
        parallaxTextContainer.style.transform = 'none';
        parallaxImage.style.transform = 'none';
    } else {
        parallaxTextContainer.style.transform = 'translateY(' + offset * 0.8 + 'px)';
        parallaxImage.style.transform = 'translateY(' + offset * 0.2 + 'px)';
        parallaxTextContainer.style.zIndex = '-1';
    }
});

// MOBILE MENU

function toggleMenu() {
    var mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
  }
  

  // TOOLTIP

function showTooltip(event) {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";
    updateTooltipPosition(event);
    document.addEventListener("mousemove", updateTooltipPosition); 
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
    document.removeEventListener("mousemove", updateTooltipPosition); 
}

function updateTooltipPosition(event) {
    var tooltip = document.getElementById("tooltip");
    var tooltipWidth = tooltip.offsetWidth;
    var tooltipHeight = tooltip.offsetHeight;
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;


    var tooltipX = mouseX + 25; 
    var tooltipY = mouseY - tooltipHeight - 5; 


    if (tooltipX + tooltipWidth > windowWidth) {
        tooltipX = windowWidth - tooltipWidth;
    }
    if (tooltipY < 0) {
        tooltipY = 0;
    }

    tooltip.style.left = tooltipX + "px";
    tooltip.style.top = tooltipY + "px";
}

// CONTACT FORM VALIDATION DISPLAY ALERT INSIDE
// THE FIELDS

var form = document.getElementById('contact-form');
var submitButton = document.getElementById('submit-button');



// CONTACT FORM SUBMISSION 

var form = document.getElementById('contact-form');
var submitButton = document.getElementById('submit-button');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});


