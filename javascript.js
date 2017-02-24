$(document).ready(function () {
    $('.flexslider').flexslider({
        //animation: "slide",
        slideshowSpeed: 1500,
        itemMargin: 5,
        animationSpeed: 500,
        initDelay: 1000
        //itemWidth: 200
    });
    mouseon("#Aboutus");
    mouseoff("#Aboutus");
    
    mouseon("#Members");
    mouseoff("#Members");
    
    mouseon("#Research");
    mouseoff("#Research");
    
    mouseon("#Courses");
    mouseoff("#Courses");
    
    mouseon("#News");
    mouseoff("#News");
    
    mouseon("#Contact_us");
    mouseoff("#Contact_us");
    
    var Ow = $('.Option').width();
    $('.Option').css({'height': Ow + 'px'});
    var Sw = $('#Supervisor').width();
    $('#Supervisor').css({'height': 2 * Sw * 0.9  + 70 + 'px'});
    $('#manu').css({'height': 2 * Sw * 0.9 + 120 + 'px'});
});

$(function () {
    var s= 0;
    $(window).scroll(function () {
        if (s == 0){
        var scroll_position = $(window).scrollTop();
        $('#manu').css("visibility", "visible");
        $('#manu').css({ 
    "animation-name": "slide",
    "-webkit-animation-name": "slide",
    "animation-duration": "3s",
    "-webkit-animation-duration": "1s"
    })
            
        s=1; 
    }});});


function shock(selector)
{   
    $(selector).css("position", "relative");
    //box_left = ($(window).width() - $(selector).width()) / 2;
    for (i = 1; i < 2; i++)
    {
        $(selector).animate({
            'left': '-=5'
        }, 3, function() {
            $(this).animate({
                'left': '+=10'
            }, 3, function() {
                $(this).animate({
                    'left': '-=5'
                }, 3, function() {
                });
            });
        });
    }
}

function mouseon(selector)
{
    $(selector).mouseover(function () {
       
        $(selector+"A").css("color", "white");
        $(selector+"P").css("filter", "none");
        $(selector+"P").css("-webkit-filter", "grayscale(0)");
        shock(selector); })}

function mouseoff(selector)
{
        $(selector).mouseout(function () {
        $(selector+"A").css("color", "rgba(10%, 10%, 10%, 0.8)");
        $(selector+"P").css("filter", "gray");
        $(selector+"P").css("-webkit-filter", "grayscale(1)");
     })}
