//练习：创建数组，保存学生的成绩，使用遍历数组来获取总分以及平均分是多少。
var arr=[80,79,68,96]; 
var sum=0;
for (var i=0;i<arr.length;i++)
{
	sum+=arr[i];
}
console.log(sum);
console.log(sum/arr.length);
//函数的内部访问函数的名称————arguments.callee
function fn(){
	//console.log(arguments);//{} 
	//console.log(arguments.callee);//[Function: fn]
	for (var key in arguments)
	{
		console.log(key+'---'+arguments[key]);
	}
}
fn(50,60,65,80);
