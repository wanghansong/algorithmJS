var quickSort=function(arr){
if(arr.length<=1){
	return arr;
}
var left=[];
var right=[];
var index=Math.floor(arr.length/2);
indexValue=arr.splice(index,1)[0];
for(var i=0;i<arrNew.length-1;i++){
	if(arrNew[i]>arr[index]){
		left.push(arrNew[i]);
	}else{
		right.push(arrNew[i]);
	}
}
return quickSort(left).concat([indexValue],quickSort(right));
};