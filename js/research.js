$(document).ready(function () {
    var Sw = $('#S').width();
        $('.Option').css({
        'height': Sw * 0.9 + 'px'
        
    });
    $('#Supervisor').css({
        'height':  Sw * 0.9 + 'px'
    });
    $('#manu').css({
        'height': 3 * Sw * 0.9 + 120 + 'px'
    });

    $("#Contact_us").click(function () {
        $("#Contact_us").fadeOut(4000);
        $("#Contact_us").fadeIn(5000);
    });
});
