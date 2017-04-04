$(document).ready(function () {
    $.getJSON("data/members.json", function (data) {
        console.log(data);
        show('Assistant',data.Assistant);
        show('RA',data.RA);
        show('PhD',data.PhD);
        show('MS',data.MS);
        show('Alumni',data.Alumni);
    });
});

function show(id,data) {
    console.log(data[0].Name);
    for (var i = 0; i < data.length; i++) {
        $("#"+id).append("<div class='col-sm-3'><div class = 'member_outdiv'><img class='Option img-circle' src=" +
            data[i].Img +
            " height='100%' width='100%'>" +
            "<h5>Name:" + data[i].Name + "</h5>" +
            "<h5>Mail:" + data[i].Mail + "</h5>" +
            "<h5>Year:" + data[i].Year + "</h5>" +
            "<form class = 'bt' action = '" + data[i].ResearchUrl + "'><input type='submit' class='btn btn-primary' value ='" + data[i].Research + "'></form>"
        );
    }
}