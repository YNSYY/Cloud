//创建一个数组，包含5个车名，单独添加2个车名，最后遍历数组。
var arr=['玛莎拉蒂','法拉利','保时捷'];
arr[arr.length]='兰博基尼';
arr[arr.length]='奔驰';
console.log(arr);
for (i=0;i<arr.length;i++)
{
	console.log(arr[i]);
}
