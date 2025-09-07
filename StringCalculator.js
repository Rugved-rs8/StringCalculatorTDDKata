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
    var negatives = [];
    for(let i=0;i<arr.length;i++){
        if(Number(arr[i]) < 0) negatives.push(arr[i]);
    }
    if(negatives.length > 0){
        throw new Error("Negatives not allowed: " + negatives.join(","));
    }
    for(let i=0;i<arr.length;i++){
        ans += Number(arr[i]);
    }
    return ans;
}
module.exports = add;