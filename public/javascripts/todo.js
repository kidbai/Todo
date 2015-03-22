$(function(){
    $(".wrap .content .add-list .list").click(function(){
        $(".wrap .content .list span").addClass("off");
        $(".wrap .content .list .add-list-input").addClass("on");
        $(".wrap .content .list input").focus();
        $(".wrap .content .list").addClass("on");
    });
    $(".wrap").click(function(ev){
        console.log(ev.target);
        var target_area = $(".wrap .content .list");
        if(!target_area.is(ev.target) && target_area.has(ev.target).length === 0)
        {
            $(".wrap .content .list span").removeClass("off");
            $(".wrap .content .list .add-list-input").removeClass("on");
            $(".wrap .content .list").removeClass("on");
        }
    });
    $(".wrap .content .save-btn").click(function(){
        var todo_title = $(this).siblings(".list").children("input").val();
        console.log(todo_title);
    });
});