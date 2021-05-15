jQuery(document).ready(function($) {
    $('.s-body__link').on('click', function(event) {
        event.preventDefault();
        $('.s-body-info').addClass('active')
    });
});