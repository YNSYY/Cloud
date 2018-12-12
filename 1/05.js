//练习：信息录入，使用循环弹出提示框，每次输入一个姓名，把输入的姓名放入到数组中；并打印结果；直到输入quit，不再弹出提示框。
var arr = new Array();
while (true)
{
	var n = prompt('请输入姓名');	
	
	if (n=='quit')
	{
		break;
	}
	arr[arr.length]=n;
	alert(arr);
}