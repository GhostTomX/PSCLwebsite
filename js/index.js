//function iframeA(){
//		window.frames["ifa_foot"].document.getElementById('colloctor')= "red";
//	}

function SetCollector() {
    var caution = false

    function setCookie(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
            ((expires) ? ";expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? ";secure" : "")
        if (!caution || (name + "=" + escape(value)).length <= 4000) {
            document.cookie = curCookie
        } else if (confirm("Cookie exceeds 4KB and will be cut!")) {
            document.cookie = curCookie
        }
    }

    function getCookie(name) {
        var prefix = name + "="
        var cookieStartIndex = document.cookie.indexOf(prefix)
        if (cookieStartIndex == -1) {
            return null
        }
        var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
        if (cookieEndIndex == -1) {
            cookieEndIndex = document.cookie.length
        }
        return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
    }

    function deleteCookie(name, path, domain) {
        if (getCookie(name)) {
            document.cookie = name + "=" +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT"
        }
    }

    function fixDate(date) {
        var base = new Date(0)
        var skew = base.getTime()
        if (skew > 0) {
            date.setTime(date.getTime() - skew)
        }
    }
    var now = new Date()
    fixDate(now)
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
    var visits = getCookie("counter")
    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    //                    visits=0;
    setCookie("counter", visits, now)
//    document.write("<li>No." + visits + " since </li>") //2017/03/11
    
    console.log("No." + visits + " since </li>");
    
    window.frames["ifa_foot"].document.getElementById('myPage').style.background="red";
//    alert("<li>No." + visits + " since </li>") //2017/03/11
}

$(document).ready(function () {
//    alert(document.getElementById("myPage"));
//alert(document.domain);
    SetCollector();
    $('.flexslider').flexslider({
        //animation: "slide",
        slideshowSpeed: 1500,
        itemMargin: 5,
        animationSpeed: 500,
        initDelay: 1000
            //itemWidth: 200
    });
    mouseon("#Aboutus");
    $("button").click(function () {
        $("p").slideToggle();
    });
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
    $('.Option').css({
        'height': Ow + 'px'
    });
    var Sw = $('#Supervisor').width();
    $('#Supervisor').css({
        'height': 2 * Sw * 0.9 + 70 + 'px'
    });
    $('#manu').css({
        'height': 2 * Sw * 0.9 + 120 + 'px'
    });

    $("#Contact_us").click(function () {
        $("#Contact_us").fadeOut(4000);
        $("#Contact_us").fadeIn(5000);
    });
});

$(function () {
    var s = 0;
    $(window).scroll(function () {
        if (s == 0) {
            var scroll_position = $(window).scrollTop();
            $('#manu').css("visibility", "visible");
            $('#manu').css({
                "animation-name": "slide",
                "-webkit-animation-name": "slide",
                "animation-duration": "3s",
                "-webkit-animation-duration": "1s"
            })

            s = 1;
        }
    });
});


function shock(selector) {
    $(selector).css("position", "relative");
    //box_left = ($(window).width() - $(selector).width()) / 2;
    for (i = 1; i < 2; i++) {
        $(selector).animate({
            'left': '-=5'
        }, 3, function () {
            $(this).animate({
                'left': '+=10'
            }, 3, function () {
                $(this).animate({
                    'left': '-=5'
                }, 3, function () {});
            });
        });
    }
}

function mouseon(selector) {
    $(selector).mouseover(function () {

        $(selector + "A").css("color", "white");
        $(selector + "P").css("filter", "none");
        $(selector + "P").css("-webkit-filter", "grayscale(0)");
        shock(selector);
    })
}

function mouseoff(selector) {
    $(selector).mouseout(function () {
        $(selector + "A").css("color", "rgba(10%, 10%, 10%, 0.8)");
        $(selector + "P").css("filter", "gray");
        $(selector + "P").css("-webkit-filter", "grayscale(1)");
    })
}

//news twitter: account:  pscltw@gmail.com  pw；pscl1234
//            mail：      pscltw@gmail.com  pw；pscl1234