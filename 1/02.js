//创建一个圆对象，添加属性(半径 r)，添加成员方法(获取周长 getLength，
//获取面积 getArea);
var c={
	r:5,
	PI:2,
	getLength:function(){
		var c1=2*this.r*this.PI;
		console.log(c1);
	},
	getArea:function(){
		var s=this.r*this.r*this.PI;
		console.log(s);
	}
}
c.getLength();
c.getArea();