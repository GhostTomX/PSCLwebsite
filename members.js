$(document).ready(function () {
    
    var xmlHttp;
    show();

    function show() {
        xmlHttp = GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Browser does not support HTTP Request");
            return;
        }

        var url = "members.php";
        xmlHttp.onreadystatechange = stateChanged
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }
    function stateChanged() {
        if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
            document.getElementById("member_2").innerHTML = xmlHttp.responseText;
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