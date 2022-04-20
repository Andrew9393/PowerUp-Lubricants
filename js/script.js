$(document).ready(function () {
    $('.tabs_triggers_item').click(function(e) {
        e.preventDefault();

        $('.tabs_triggers_item').removeClass('tabs_triggers_item--active');
        $('.tabs_content_item').removeClass('tabs_content_item--active');

        $(this). addClass('tabs_triggers_item--active');
        $($(this).attr('href')).addClass('tabs_content_item--active');
    });

    $('.tabs_triggers_item:first').click();

    $('.header_burger').click(function() {
        $('.header_burger').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
        
    })

    $('.menu').click(function(e){
        if(e.target.tagName === 'A'){
            $('.header_burger').removeClass('active');
            $('.menu').removeClass('active');
            $('body').removeClass('active');
        }
    })

    if(window.innerWidth <= 450){
        $('.card_list').after($('.text_onlineShop_btn'))
    }


})