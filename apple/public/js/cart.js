$(function(){
    $.ajax({
        url:"http://localhost:3000/cart/piccart",
        type:"get",
        success:function(res){
            console.log(res);
            var total=0;
            var html="";
            for(var i=0;i<res.length;i++){
                res[i].price=res[i].price*res[i].count;
                total+=res[i].price;
                //res[i].price=res[i].price.toString();
                //var str1=res[i].price.slice()
                //res[i].price=res[i].price.split("");
                //var str1=res[i].price.slice(0,2);
                //var str2=res[i].price.slice(2);
                //var str3=","
                //var arr=[];
                //res[i].price=arr.concat(str1,str3,str2);
                //res[i].price=res[i].price.toString();
                //res[i].price[res[i].price.length-4]=","
                //res[i].price=res[i].price.join("");
                //console.log(res[i].price);
                //res[i].price=parseFloat(res[i].price)*res[i].count;
                //res[i].price=
                //console.log(res[i].price);
                html+=`             
<div class="pro-deta row">
    <div class="col-3">
        <img src="${res[i].img_url}" height=203; width=95.91;>
    </div>
    <div class="col-9">
        <div class="row">
                <div class="col-7">
                    <h3 class="col7one"><a href="#"><b>${res[i].typ} ${res[i].vol} 
                    ${res[i].color}</b></a></h3>
                </div>
                <div class="col-2">
                    <h3 class="col7one" id="count"><b>数量：${res[i].count}</b></h3>
                </div>
                <div class="col-3">
                    <h3 class="col7one offset-1" id="RMB"><b>RMB ${res[i].price}</b></h3>
                </div>
        </div>
        <div class="row">
            <h6 class="offset-11">
                <a href="#">移除</a>
            </h6>
        </div>
        <div class="row bot-line"></div>
        <div class="row">
            <div class="col-1">
                <img src="images/cart/apple-cart.PNG">
            </div>
            <div class="col-10 col-10-mar">
                <p><b>添加 适用于 iPhone XS 或 iPhone XS Max 的 AppleCare+ 全方位服务计</br>划 - RMB 1,799</b></p>
                <p>获得长达 2 年的技术支持和意外损坏保修服务。</p>
                <p><a href="#">进一步了解</a></p>
            </div>
            <div class="col-1 add-style">
                <h6 class="">
                    <a href="#">添加</a>
                </h6>
                
            </div>
        </div>
        <div class="row bot-line"></div>
        <div class="row">
            <div class="col-1">
                <img src="images/cart/package-cart.PNG">
            </div>
            <div class="col-10 col-10-mar">
                <p><b>添加礼品赠言或礼品包装</b>></p>
                
            </div>
            <div class="col-1 add-style">
                <h6 class="">
                    <a href="#">添加</a>
                </h6>
                
            </div>
        </div>
        <div class="row bot-line"></div>
        <div class="row">
            <div class="col-12">
                了解你何时能收到这件商品。<a href="#">选择送货地区</a>
            </div>                
        </div>
        <div class="row">
            <div class="col-1">
                <img src="images/cart/gift-cart.PNG">
            </div>
            <div class="col-10 col-10-mar">
                <p><b>送达日期:</b></p>
                <p>有现货</p>
            </div>
        </div>
    </div>        
</div>
<div class="row bot-line"></div>`
            }
            $("#river-line").html(html);

            $("#total").html('RMB '+total)
            //console.log(html);
                /**/ 
                $(".btn-buy-o").click(function(){
                    $.ajax({
                        url:"http://localhost:3000/users/islogin",
                        type:"get",
                        dataType:"json",
                        success:function(res){
                            $(".modal-body h5").html("尚未登录，请先登录");
                            //location.href="login.html?back="+location.href;
                        if(res.ok==0){
                            console.log(res);
                            }else{
                                $(".modal-body").html("购买成功，请继续购物")
                                location.href="main.html"
                            }
                        }
                    })        
                })
        }
})
    })
    // var c=$("#count").html;
    //$("#RMB").html()



    