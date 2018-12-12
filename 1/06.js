function getSum(num1,num2,num3){
	//形参本质上就是一个局部变量
	//形参的数量大于实参的数量，未赋值的形参结果为Undefined
	console.log(num2);
	return num1+num2;
}
//实参的数量大于形参的数量，结果没有任何变化
var res = getSum(3,5);
console.log(res);