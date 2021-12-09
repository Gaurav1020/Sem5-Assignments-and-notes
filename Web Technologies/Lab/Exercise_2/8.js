function add() {
    var str = $("#inputField");
    var s = "<li>" + str.val() + "</li>";
    $("#list").append(s);
    str.val("");
    }
    function remove() {
    var str = $("#inputField").val();
    str = str.toUpperCase();
    var d = $("#list").children();
    var n = d.length;
    for (var i = 0; i < n; i++) {
    if (d[i].textContent.toUpperCase() == str) { d[i].remove();
    break;
    }
    }
    $("#inputField").val("");
}