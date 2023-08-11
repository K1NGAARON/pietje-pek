function filterContent(e) {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Update image source based on the clicked button's ID
    let imageSrc = '/menu/img/' + $(this).attr('id') + '.png';
    $('#menu-img').attr('src', imageSrc);
}

$(document).ready(function() {
    $('.filter-btn').click(filterContent);
});