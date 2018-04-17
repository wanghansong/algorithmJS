/* 挖坑填数,即一次快排
    1.i=L;j=R;基准数选择X=arr[i]挖一个坑
    2.j-- 从后往前找到比X小的数填到坑arr[i]中，此时多出了一个坑arr[j]
    3.i++ 从前往后找到比X大的一个数填到arr[j]坑中
    4.重复2，3步骤知道i==j，将X基准数填入arr[i]中,返回此时基准数所在的位置index
*/
function ajustArray(arr,l,r){
    var X=arr[l];
    var i=l,j=r;
    while(i<j){
        //从后往前找比基数X小数，填到坑i处，且产生坑j
        while(i<j && arr[j]>=X){
            j--;
        }
        if(i<j){
            arr[i]=arr[j];
            i++;
        }
        
        //从前往后找比X大的数，填到坑j处
        while(i<j && arr[i]<X){
            i--;
        }
        if(i<j){
            arr[j]=arr[i];
            j--;
        }
    }
    
    //此时i==j，将X基准数填入arr[i]中，返回此时基准数所在的位置index
    arr[i]=X;
    return i;
}
    
function quickSort(arr,l,r){
    if(l<r){
        var index=ajustArray(arr,l,r);//一次快排
        quickSort(arr,l,index-1);//左边递归
        quickSort(arr,index+1,r);//右边递归
    }
}