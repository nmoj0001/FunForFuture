$(".js-open-modal").click(function() {
    $(".modal").addClass("visible");
});

$(document).click(function(event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".modal,.js-open-modal").length) {
        $("body").find(".modal").removeClass("visible");
    }
});