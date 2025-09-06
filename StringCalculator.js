function add(numbers){
    if(numbers === "")return 0;
    const arr = numbers.split(/[\n,]/);
    if(arr.length == 1) return Number(numbers);
    var ans = 0;
    for(let i=0;i<arr.length;i++){
        ans += Number(arr[i]);
    }
    return ans;
}
module.exports = add;