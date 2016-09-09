//1
function replace_string(arr){
	for(var i = 0; i<arr.length; i++){
		arr[i] = arr[i].length;
	}
	return arr;
}

//2
function reverse_array(arr){
var temp = 0;
	for(var i = 0; i< arr.length/2; i++){
	temp = arr[i];
		arr[i] = arr[arr.length - i - 1]; 
		arr[arr.length - i - 1] = temp;
	}
	return arr;
}

//3 
function yum(arr){
var hungry = true;
	for(var i = 0; i< arr.length; i++){
		if(arr[i] = “food”){
		console.log(“yummy”);
		hungry = false;
		}else if(hungry){
console.log(“i’m still hungry”);
}
}