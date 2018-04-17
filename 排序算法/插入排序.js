/*
从小到大排序
 */
function insertSort(arr){
  var temp;  //temp变量用于临时存储待插入元素
  for(var i=1; i<arr.length; i++){
     temp = arr[i];
      //前面是已经排序好了的，要把temp插入到排序好了的中
     for(var j=i; j>0&&arr[j-1]>temp; j--){
         arr[j]=arr[j-1]; //将大于temp的arr[j]元素后移
     }
      arr[j]=temp;
  }
}