function add(numbers){
    if(numbers === "")return 0;
    var arr = [];
    if(numbers.startsWith("//")){
        const delimiter_string = numbers.split("\n");
        const delimiter = delimiter_string[0].substring(2);
        const nums = delimiter_string[1];
        arr = nums.split(delimiter);
    }
    else{
        arr = numbers.split(/[\n,]/);
    }
    if(arr.length == 1) return Number(numbers);
    var ans = 0;
    for(let i=0;i<arr.length;i++){
        ans += Number(arr[i]);
    }
    return ans;
}
module.exports = add;