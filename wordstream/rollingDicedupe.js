function dupeRoll(){
	var temp = -1;
	var keepOn = true;
	var count =0;
	while(keepOn){
		var roll = Math.floor((Math.random()*19)+1);
		console.log("Rolling: ", + roll)
		if(roll != temp){
			temp = roll;
			count++
		}else{
			count++
			console.log(roll, count);
			keepOn = false;
		}
	}
}
dupeRoll();