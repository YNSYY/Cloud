$(function(){
    $.ajax({
        success: function() {
            $("#floor-one-img-two").addClass("after");
            var $divLift=$("#lift"),//获取电梯div
		    $ulLift=$("#lift>ul"),//获取div里面的ul
            $floors=$(".floor");//获取楼层

            $(window).scroll(function(){
                var scrollTop=document.body.scrollTop  
                        ||document.documentElement.scrollTop; //从html和body都可以获得到页面顶部的距离
                        //console.log(scrollTop);
                        //console.log(innerHeight);
                       //鼠标滑动一下动100px;
                    //    $("html").stop(true).animate({
                    //     scrollTop:offsetTop//楼层滚动
                    // },500);
                var offsetTop1=$(".one-h4").offset().top; //当前元素到最顶部的距离     
                if(offsetTop1<scrollTop+innerHeight+100) {
                    $(".one-h4").addClass("floor-one-h4");
                }else{
                    $(".one-h4").removeClass("floor-one-h4");
                }
                    // else{
                    //    return;
                    // }
                //if(scrollTop<622) {$(".one-h4").addClass("floor-one-h4");}
                // else if(offsetTop1=622) {$(".one-h4").addClass("floor-one-h4");
                // }
                var offsetTop2=$(".floor-four-one-img").offset().top;                
                if(offsetTop2<scrollTop+innerHeight-100){
                    $(".floor-four-one-img").addClass("centerone");
                }else{
                    $(".floor-four-one-img").removeClass("centerone");
                }
                if(offsetTop2<scrollTop+innerHeight-200){
                    $(".floor-four-one-img").addClass("centertwo");
                }else{
                    $(".floor-four-one-img").removeClass("centertwo");
                }
                if(offsetTop2<scrollTop+innerHeight-300){
                    $(".floor-four-one-img").addClass("centerthree");
                }else{
                    $(".floor-four-one-img").removeClass("centerthree");
                }
                if(offsetTop2<scrollTop+innerHeight-400){
                    $(".floor-four-one-img").addClass("centerfour");
                }else{
                    $(".floor-four-one-img").removeClass("centerfour");
                }
                var offsetTop3=$("#floor-six").offset().top;  
                if(offsetTop3<scrollTop+innerHeight-500&&offsetTop3>scrollTop+innerHeight-600){
                    $(".floor-six-one").addClass("leftone");
                    $(".floor-six-three").addClass("rightone");
                }
                /**/else{
                    $(".floor-six-one").removeClass("leftone");
                    $(".floor-six-three").removeClass("rightone");
                }
                if(offsetTop3<scrollTop+innerHeight-600&&offsetTop3>scrollTop+innerHeight-700){
                     $(".floor-six-one").addClass("lefttwo");
                     $(".floor-six-three").addClass("righttwo");
                 }
                 /**/else{
                     $(".floor-six-one").removeClass("lefttwo");
                     $(".floor-six-three").removeClass("righttwo");
                 }
                 if(offsetTop3<scrollTop+innerHeight-700){
                     $(".floor-six-one").addClass("leftthree");
                     $(".floor-six-three").addClass("rightthree");
                     $(".floor-six-font-one").addClass("topone");
                     $(".floor-six-font-two").addClass("toptwo");
                     $(".floor-six-font-three").addClass("topthree");
                    //  .position-centertwo
                 }
                 else{
                     $(".floor-six-one").removeClass("leftthree");
                     $(".floor-six-three").removeClass("rightthree");
                     $(".floor-six-font-one").removeClass("topone");
                     $(".floor-six-font-two").removeClass("toptwo");
                     $(".floor-six-font-three").removeClass("topthree");
                 }/**/
                 if(offsetTop3<scrollTop+innerHeight-500&&offsetTop3>scrollTop+innerHeight-800){
                    $(".floor-six-two").addClass("position-center");
                }
                else{
                    $(".floor-six-two").removeClass("position-center");
                } /**/
                if(offsetTop3<scrollTop+innerHeight-800&&offsetTop3>scrollTop+innerHeight-900){
                    $(".floor-six-two").addClass("position-centertwo");
                }
                else{
                    $(".floor-six-two").removeClass("position-centertwo");
                } 
                // console.log(scrollTop);
                // console.log(offsetTop3);
                // var offsetTop4=$(".floor-six-one").offset().top;
                // console.log(offsetTop4);
                // var offsetTop5=$("#floor-five").offset().top;
                // console.log(offsetTop5);
            })
        } 
    })
})
