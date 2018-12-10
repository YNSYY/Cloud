$(function(){
    $("head").append("<link rel='stylesheet' href='css/header.css'>");
    $.ajax({
        url:"http://127.0.0.1:3000/header.html",
        type:"get",
        success:function(res){
            $("#header").replaceWith(res);
            $(".search").click(function(){
                var $sea=$(this);                
                $sea.hide();
                $(".vis").hide();
                $(".input-search")
                    .show()
                    .focus()
                    .blur(function(){
                        //为什么不可以直接写。blur..因为要先显示出来并且获得焦点，然后再写失去焦点的事
                        $(".vis").show();
                        $(".input-search").hide();
                        $sea.show();
                    });
            });
            $(".YIYI").click(function(){
                var $yi=$(this);
                if(!$yi.children(".YI").hasClass("vis-no")){
                    $yi.children(".YI").addClass("vis-no");
                    $yi.children(".cha").removeClass("vis-no");
                    $(".menu").removeClass("vis-no");
                    $yi.parent().parent().siblings().css("visibility","hidden");
                    $(".menu").css('height','100%');
                    //$yi.parent().parent().siblings().hide();
                    //console.log($yi.parent().parent().parent());
                    //console.log($yi.parent().parent().siblings());

                }else{
                    $yi.children(".YI").removeClass("vis-no");
                    $yi.children(".cha").addClass("vis-no");
                    $(".menu").addClass("vis-no");
                    $yi.parent().parent().siblings().removeClass("vis-no");
                    $yi.parent().parent().siblings().css("visibility","visible");
                }
                //  if($yi.children(".YI").show()){
                //      $yi.children(".YI").hide();
                //      $yi.children(".cha").show();
                //  }else if($yi.children(".YI").hide()){
                //      $yi.children(".YI").show();
                //      $yi.children(".cha").hide();
                // }                
            })
            /* 登录功能 */
            $("#Signout").hide();/**/
            $("#Login").click(function(){
                location.href=
                "login.html?back="+location.href;
            })
            
            $.ajax({
                url:"http://localhost:3000/users/islogin",
                type:"get",
                dataType:"json",
                success:function(res){
                    console.log(res);
                if(res.ok==0){
                    $("#Login").show();
                    $("#Signout").hide();
                    }else{
                    $("#uname").html(res.uname);
                    $("#Login").hide();
                    $("#Signout").show()
                    }
                    
                }
            })
      
            
                $("#Signout").click(function(){
                    $.ajax({
                    url:"http://localhost:3000/users/signout",
                    type:"get",
                    success:function(){ 
                        location.reload(); 
                        
                    }
                    })
                })
              
            }
        })
    
});