function filterContent(e) {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.content .card').fadeOut();

    // Selected Tag
    // let activeFilter = $(this).attr('id');

    // if (activeFilter === 'all') {
    //     $('.content .card').fadeIn();
    // } else {
    //     $('.' + activeFilter).fadeIn();
    // }
}

$(document).ready(function() {
    $('.filter-btn').click(filterContent);
});