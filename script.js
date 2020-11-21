var time = 2000;//milliseconds
var index = 0;
var container = $("#container");
var childrenCount = $(".section").length;
function slideToNext() {
    var childrenCount = $(".section").length;
    var time = 2000;//milliseconds
    var container = $("#container");
    index = (index + 1) % childrenCount;
    console.log(index);
    container.css({
        marginLeft: -1 * index * 100 + "%"
    })
}
var pt = window.setInterval(function(){slideToNext(); }, time);
