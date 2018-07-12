$(document).ready(function() {
    $('.nav-list li ul').hide();


    $('li').hover(

        function() {

            $('ul', this).slideToggle(400);

        },

        function() {

            $('ul', this).slideToggle(300);
        }
    );


});


$(document).ready(function() {
    var max = $('#myRange').attr("max");
    $('.max').text(max)
});
var slider = document.getElementById("myRange");
var output = document.getElementById("min");
output.innerHTML = slider.value;


slider.oninput = function() {
    output.innerHTML = this.value;
};

if ($('.type_of_tour__list').hasClass("d-no")) {

    if ($('.type_of_tour__list').hasClass("d-no")) {
        $('h5').css({ "border-bottom": "none", "padding-bottom": "10px" });
    };



    $(".widgets__widget_1").click(function() {
        $('#radiolist1').slideToggle(200).toggleClass("d-no ");
    });
    $(".widgets__widget_2").click(function() {
        $('#radiolist2').slideToggle(200).toggleClass("d-no ");
    });

    $(".search_advanced").click(function() {
        $('.type_of_tour__list').slideToggle(450).toggleClass("d-no ");
        $('.type_feed__list').slideToggle(450).toggleClass("d-no ");
        if ($('.type_of_tour__list').hasClass("d-no")) {
            $('h5').css({ "border-bottom": "none", "padding-bottom": "10px" });

        } else {
            $('h5').css({ "border-bottom": "solid 1px #ffffff" });

        }


    });