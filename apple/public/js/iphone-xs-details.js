$(function(){
    //页面初始化
    //$("#goumai").css("display","none")
    setTimeout(()=>{
        $(".colis-img").addClass("mr-l");
        $(".colis-img-two").addClass("mr-l-two");        
        $(".colis-img-three").addClass("mr-l-three");
        $(".colil-img").addClass("mr-l");
        $(".colil-img-two").addClass("mr-l-two");        
        $(".colil-img-three").addClass("mr-l-three");
    },500)
    setTimeout(()=>{
        $(".colh").addClass("opa");
        $(".colr").addClass("opa");
    },1000)    
    //按钮点击事件
    $(".btnc").mouseup(function(){      
        var $btn=$(this)      
        //console.log($btn.prev("p").html());  
        //$(".model").next("div").html("iphoneXs");
       // console.log($(".model").next("div").html());
        $(".mod").addClass("common");//标题
        $(".model").addClass("common");//标题对应内容
        if($btn.prev("p").html()=="5.8 英寸显示屏"){
            $(".model").next().children("a").html("iphoneXs");
            $(".botline").addClass("botline-change");
        }else{
            $(".model").next().children("a").html("iphoneXs Max");
            $(".botline").addClass("botline-change-two");
        }
        $(".model").next("div").removeClass("common");
        $(".fea").addClass("fea-opa");                
    })
    // 查看背面
    $(".cen-btn-bei").click(function(){            
        $(".fea .float-left").addClass("opa-two");
        setTimeout(()=>{ 
            var arr=$(".fea-img-one")
            var arrt=$(".fea-img-two")
        for(var i=0;i<arr.length;i++){
            var a=arr[i].src;
            arr[i].src=arrt[i].src;
            arrt[i].src=a;
        }
            $(".fea .float-left").removeClass("opa-two"); 
        },500)
    })
    //查看正面
    $(".cen-btn-zhg").click(function(){            
        $(".fea .float-left").addClass("opa-two");            
        setTimeout(()=>{            
            var arr=$(".fea-img-one")
            var arrt=$(".fea-img-two")
            for(var i=0;i<arr.length;i++){
                var a=arr[i].src;
                arr[i].src=arrt[i].src;
                arrt[i].src=a;
            }
            $(".fea .float-left").removeClass("opa-two"); 
        },500)        
    })
    //分开自闭事件
    $(".fea .float-left").mouseover(function(){
        var $fo=$(this);
        $fo.children(".fea-img-one").css("margin-left","-15px")
        $fo.children(".fea-img-two").css("margin-left","58px")
    });    
    $(".fea .float-left").mouseout(function(){        
        var $ft=$(this);
        $ft.children(".fea-img-one").css("margin-left","0px")
        $ft.children(".fea-img-two").css("margin-left","43px")
    });        

    //点击 fea下的col-4 跳转到第三个页面
    $(".fea .col-4").mouseup(function(){
        var $co=$(this);
        $(".fea").addClass("common");
        $(".feature").addClass("common");//标题对应内容
        var html=$co.find(".color-font").html();
        $(".feature").next().children("a").html(html);
        if($(".botline").hasClass("botline-change")){
            $(".botline").addClass("botline-change-three");
        }else{
            $(".botline").addClass("botline-change-four");
        }              
        $(".feature").next("div").removeClass("common");
        $(".vol").addClass("vol-opa");
    })

    //点击容量按钮跳转到end
    $(".cen-three-btn").mouseup(function(){
        var $ctb=$(this);        
        $(".vol").addClass("common");
        var html=$ctb.children(".as-dimension-capacity-text").html();
        $(".volume").next().children("a").html(html);
        //console.log($(".volume").next().children("a").html());
        $(".volume").next().removeClass("common");
        $(".Xs-title-hide").removeClass("common");//标题对应内容
        $(".botline").addClass("common");
        $(".volume").addClass("common");
        if($(".feature").next().children("a").html()=="金色"){
            $("#end-1").removeClass("common");
        }else if($(".feature").next().children("a").html()=="银色"){
            $("#end-2").removeClass("common");
         }else{
            $("#end-3").removeClass("common");
        }
        $(".end").addClass("end-opa");
        
    })    
    
    //添加到购物袋点击事件
    
    $(".protect-add").click(function(){
        var typ=$(".model").next().children("a").html();
        var color=$(".feature").next().children("a").html();
        var vol=$(".volume").next().children("a").html().slice(0,3)+"GB";
        console.log(typ,color,vol)
        $.ajax({
            url:"http://localhost:3000/cart/add",
            type:"get",
            data:{typ,color,vol},
            dataType:"json",
            success:function(res){
                console.log(res);
            }
        })
    })
    //购物车内容
})