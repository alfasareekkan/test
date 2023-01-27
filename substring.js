function longestSubString(str1,str2){
    let s1=[...str1];
    let s2= [...str2];
    const arr=Array(s2.length+1).fill(null).map(()=>{
        return Array(s1.length+1).fill(null)
    })
    for(let i=0;i<=s1.length;i++){
        arr[0][i]=0;
    }
    for(let j=0;j<=s2.length;j++){
        arr[j][0]=0
    }
    let len=0
    let col=0;
    let row=0;
    for(let i=1;i<=s1.length;i++){
        for(let j=1;j<=s2.length;j++){
            if(s1[i-1]===s2[j-1]){
                arr[i][j]=1+arr[i-1][j-1]
            }
            else{
                arr[i][j]=0;
            }
            if(arr[i][j]>0){
                len = arr[i][j]
                col=i;
                row=j
            }
        }
    }
    if(len===0)return " "
    var res=0;
    while(arr[row][col]>0){
        res=s1[col-1]+res
        row--;
        col--;
    }
    
    return res;
}

longestSubString("alfas","alfasareekkan")