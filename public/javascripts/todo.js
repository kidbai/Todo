$(function(){
    $(".wrap .content .add-list .list").click(function(){
        $(".wrap .content .list span").addClass("off");
        $(".wrap .content .list .add-list-input").addClass("on");
        $(".wrap .content .list input").focus();
        $(".wrap .content .list").addClass("on");
        $(".wrap .content .save-btn").addClass("on");
        $(".wrap .content .close-btn").addClass("on");
    });
    $(".wrap .content .close-btn").click(function(){
        $(".wrap .content .list span").removeClass("off");
        $(".wrap .content .list .add-list-input").removeClass("on");
        $(".wrap .content .list").removeClass("on");
        $(".wrap .content .save-btn").removeClass("on");
        $(".wrap .content .close-btn").removeClass("on");
    });
});