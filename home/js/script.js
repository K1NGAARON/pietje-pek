function toggleReview(e) {
    const reviews = [
        {
            body: "review 1 text",
        },
        {
            body: "review 2 text",
        },
        {
            body: "review 3 text",
        },
    ];

    $('.review-toggle').removeClass('active');
    $(this).addClass('active');

    const clickedBtn = e.target.id;
    const target = document.querySelector('#review-body');

    if (clickedBtn === 'review1') {
        $(target).text(reviews[0].body);
    } else if (clickedBtn === 'review2') {
        $(target).text(reviews[1].body);
    } else if (clickedBtn === 'review3') {
        $(target).text(reviews[2].body);
    }
};

$('.review-toggle').click(toggleReview);