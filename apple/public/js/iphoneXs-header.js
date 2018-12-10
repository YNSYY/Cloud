$(function(){
    $("head").append("<link rel='stylesheet' href='css/iphoneXs-header.css'>");
    $.ajax({
        url:"http://127.0.0.1:3000/iphoneXs-header.html",
        type:"get",
        success: function(res) {
            //console.log(res);
            $("#new_nav").replaceWith(res);
            $(".jiantou").click(function(){
                var $jt=$(this);
                if($("#new_menu_ul").hasClass("dis-no")){
                    $("#new_menu_ul").removeClass("dis-no");
                }else{
                    $("#new_menu_ul").addClass("dis-no");
                }
            })
        }
    })
})
