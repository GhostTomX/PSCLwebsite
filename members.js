$(document).ready(function () {
    
    var xmlHttp;
    show("Assistant");
    setTimeout(function () {
        show("Research Assistant");
        setTimeout(function () {
            show("PhD");
            setTimeout(function () {
                show("MS");
                setTimeout(function () {
                    show("Alumni");
                }, 300);
            }, 300);
        }, 300);
    }, 300);

    function show(name) {
        xmlHttp = GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Browser does not support HTTP Request");
            return;
        }

        var url = "members.php";
        url=url+"?q="+name;
        url=url+"&sid="+Math.random();
        xmlHttp.onreadystatechange = function(){stateChanged(name);};
        //alert(xmlHttp.onreadystatechange);
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }
    function stateChanged(name) {
        if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
            document.getElementById(name).innerHTML = xmlHttp.responseText;
            //alert(xmlHttp.responseText);
        }
    }
    function GetXmlHttpObject() {
        var xmlHttp = null;
        try {
            // Firefox, Opera 8.0+, Safari
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            //Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
    }
    
        $('.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
        });
    
    
});