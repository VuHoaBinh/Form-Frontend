// https://releases.jquery.com/
// https://fontawesome.com/v5/docs/web/use-with/wordpress/install-manually
$(document).ready(function() {
    $('#eye_pass').click(function() {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fas-solid fa-eye-slash');
        if ($(this).hasClass('open')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });

});