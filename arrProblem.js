function sample(arr, target) {
    let dist = {};
    for (let i = 0; i < arr.length; i++){
        let rest = target - arr[i];
        if (dist[rest] || dist[rest] === 0) {
            return [dist[rest], i];
        }
        
        dist[arr[i]]=i
    }
}

console.log(sample([1,2,3,4,5,7],6));