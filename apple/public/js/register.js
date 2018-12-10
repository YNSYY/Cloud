$(function(){
    $("#submit").click(function(){
         var uname=$("input.username").val();
         var upwd=$("input.password").val();
         //验证邮箱和电话
         var email=$("input.email").val();
         var phone=$("input.phone_number").val();
         (async function(){
             var res=await $.ajax({
                 url:"http://localhost:3000/users/register",
                 type:"post",
                 data:{uname,upwd,email,phone},
                 dataType:"json",                                     
             })
             console.log(res.code);
             if(res.code==3){
                alert(res.msg);
                return 0;
             }else if(res.code==301){
                 alert(res.msg);            
             }
             
             else{
                 alert("已成功注册！")
                 //返回原来页面
               if(location.search.startsWith("?back=")){
                 //location.search什么意思：设置或获取 网页地址跟在问号后面的部分
                 //location.search.startsWith("?back=")确定此实例的开头是否与指定的字符串匹配
                 console.log(res.code);
                 var url=location.search.slice(6)
               }else{
                 var url="main.html"
                 console.log(res.code+1);
               }
               location.href=url;//表示在当前页面打开url
            /**/ }
           })()
    })  
})