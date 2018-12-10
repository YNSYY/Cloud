const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/add",(req,res)=>{
    var typ=req.query.typ;
    var color=req.query.color;
    var vol=req.query.vol;
    pool.query("SELECT * FROM iphone WHERE typ=? and color=? and vol=?",[typ,color,vol],(err,result)=>{
        //SELECT * FROM iphone WHERE typ='iphoneXs' and color='黑色' and vol='256GB'
        if(err) throw err;        
        result=JSON.stringify(result);//把results对象转为字符串，去掉RowDataPacket
        result=JSON.parse(result)[0];//把results字符串转为json对象   
        console.log(result); 
        
         var t=result.typ;
         var c=result.color;
         var v=result.vol;
         var p=result.price;
         var i=result.img_url;
         /* */
         pool.query("SELECT * FROM cart_item WHERE typ=? and vol=? and color=? ",[t,v,c],(err,result)=>{
            if(err) throw err;
            //SELECT * FROM cart_item WHERE typ='iphoneXs' and color='黑色' and vol='256GB'
            //http://localhost:3000/cart/add?typ=iphoneXs&color=黑色&vol=256GB
            console.log(result);
            //console.log(result.length);  0
            //console.log(result.affectedRows);   undefined
            result=JSON.stringify(result);//把results对象转为字符串，去掉RowDataPacket
            //console.log(result);
            result=JSON.parse(result);
            //var count=result.count;
            //console.log(result);            
            if(result.length==0){
                var sql="INSERT INTO cart_item VALUES(null,?,?,?,?,?,1)"
                pool.query(sql,[t,v,c,p,i],(err,result)=>{
                    if(err){throw err};
                    if(result.affectedRows>0){
                        res.send({code:200,msg:'reg success'});
                    }else{
                        res.send({code:301,msg:'reg error'})
                    }
                }) 
             }else{
                pool.query(
                    "update cart_item set count=count+1 WHERE typ=? and color=? and vol=?",
                    [t,c,v],
                    (err,result)=>{
                      if(err) console.log(err);
                      if(result.affectedRows>0){
                        res.send({code:200,msg:'reg success'});
                    }else{
                        res.send({code:301,msg:'reg error'})
                    }
                    }
                  )
             }
         })/**/
         /**/
        //console.log(result[0].ipid); 
        /*obj.typ=result[0].typ;
        obj.vol=result[0].vol;
        obj.color=result[0].color;
        obj.price=result[0].price;
        obj.img_url=result[0].img_url;
        console.log(JSON.stringify(obj)); */  
       /*res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
      })
      res.write(JSON.stringify(result[0])) */ 
      //res.end()                  
    })    
})

// 购物车页面渲染
router.get("/piccart",(req,res)=>{
    pool.query("SELECT * FROM cart_item",[],(err,result)=>{
        if(err) throw err;
        //console.log(result);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
          })
          res.write(JSON.stringify(result))  
          res.end()          
          //console.log(result);        
    });
})
module.exports=router;