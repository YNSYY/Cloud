$(function(){//login.html中jquery-3.2.1.js
    $("input.login").click(function(){
      var uname=$("input.uname").val();
      var upwd=$("input.upwd").val();
      (async function(){
        var res=await $.ajax({
          url:"http://localhost:3000/users/signin",
          type:"post",
         // type:"get",
          data:{uname,upwd},
          dataType:"json"
        })
        if(res.ok==0){
          console.log(res);
          alert(res.msg);
      }
        else{
          alert("登录成功！"+res.ok)
            //返回原来页面
          if(location.search.startsWith("?back=")){
            //location.search什么意思：设置或获取 网页地址跟在问号后面的部分
            //location.search.startsWith("?back=")确定此实例的开头是否与指定的字符串匹配
            var url=location.search.slice(6)
          }else{
            var url="main.html"
          }
          location.href=url;//表示在当前页面打开url
       /**/ }
      })()
    })
    $("#register").click(function(){
      location.href=
      "register.html?back="+location.href;
    })/**/
  })