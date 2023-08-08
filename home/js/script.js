function toggleReview(e) {
    const reviews = [
        {
            body: `
            Very pleasant experience.
            <br>
            Ordered mixed meat oil fondue and its our first meal here in Brugge, late at night. Very nice end to a long day of travel.
            <br><br>
            The meat was fresh and a portion for 2 ppl was enough for the three  of us. With beer and the salad and fries, we are really full! And we are big eaters!
            <br><br> 
            We were pleasantly served by a young lady, very attentive and easy to talk to. Its a very nice meal. Thanks!
            `,
        },
        {
            body: `
            Great place, tasty food! Literally 3/4mins walking from the main square! The prawns were one of the best I've tried(I am a prawn lover, so ^^ ) and the girls are very nice and friendly! An easy 10/10 from my wife and I.
            `
        },
        {
            body: `
            A really good typical Belgian restaurant in the centre of the beautiful Bruges. The food was really good, very tasty meat and good beer. Definitely a place to go if you want to eat a good dinner in Bruges
            `,
        },
    ];

    $('.review-toggle').removeClass('active');
    $(this).addClass('active');

    const clickedBtn = e.target.id;
    const target = document.querySelector('#review-body');

    if (clickedBtn === 'review1') {
        $(target).html(reviews[0].body);
    } else if (clickedBtn === 'review2') {
        $(target).html(reviews[1].body);
    } else if (clickedBtn === 'review3') {
        $(target).html(reviews[2].body);
    }
};

$('.review-toggle').click(toggleReview);