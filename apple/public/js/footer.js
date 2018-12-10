$(function(){
    $("head").append("<link rel='stylesheet' href='css/footer.css'>");
    $.ajax({
        url:"http://127.0.0.1:3000/footer.html",
        type:"get",
        success:function(res){
            $("#footer").replaceWith(res);
            $("a>.ul").click(function(e){
                e.preventDefault();
                var $aul=$(this);            
                var $auls=$aul.children("li");
                if($auls.is(":hidden")){
                    $aul.parent().parent().siblings().find("li").hide();
                    $auls.show();
                }else{
                    $auls.hide();
                }
            })
        }
    })
});
