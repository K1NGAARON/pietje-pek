$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.header .logo');

    if ($(this).scrollTop() > header.height()) {
        header.addClass('active');
        $(logo).attr("src","/assets/logo/logo-black.png");
    } else {
        header.removeClass('active');
        $(logo).attr("src","/assets/logo/logo.png");
    }
});

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

$('.small-menu-content .nav').click(closeMenu);


// REFACTOR THIS BELOW
function toggleMenuDropdown(e) {
    if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass('active');
    } else {
        $('.dropdown-btn').parent().removeClass('active');
        $(this).parent().addClass('active');
    }
};

$('.dropdown-btn').click(toggleMenuDropdown);

const cookieBanner = document.querySelector(".cookie-banner-wrapper");
const cookiesAccepted = document.querySelector("#accept-cookies");
const blackOverlay = document.querySelector("#overlay");

// Accept cookies
cookiesAccepted.addEventListener("click", function acceptCookies() {
    blackOverlay.classList.add("hide-cookie-banner");
    cookieBanner.classList.add("hide-cookie-banner");
    storeCookieConsent();
});

function storeCookieConsent() {
    localStorage.cookies = "accepted";
}

window.addEventListener("DOMContentLoaded", function() {
    if ("cookies" in localStorage) {
        blackOverlay.classList.add("hide-cookie-banner");
        cookieBanner.classList.add("hide-cookie-banner");
    } else {
        // Shows cookieBanner
    }
});