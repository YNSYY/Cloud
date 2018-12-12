//检测属性是否存在
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
console.log(c.hasOwnProperty('r'));
console.log('r' in c);
console.log(c.r===undefined);