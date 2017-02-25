
var visitCounter;
var passCounter;
var randomDistance;
var currentDistance;
var controlVal1,
	controlVal2,
	controlVal3,
	controlVal4;

var randomValBank= [1,2,3,4,5,6,7,8,9,10,11,12];

function gameBegin(){
	controlVal1 = randomValBank[Math.floor(Math.random() * randomValBank.length)];
	controlVal2 = randomValBank[Math.floor(Math.random() * randomValBank.length)];
	controlVal3 = randomValBank[Math.floor(Math.random() * randomValBank.length)];
	controlVal4 = randomValBank[Math.floor(Math.random() * randomValBank.length)];

	randomDistance= Math.floor(Math.random() * 120) + 13;
	console.log(controlVal1);
	console.log(controlVal2);
	console.log(randomDistance);
	$("#random-distance").text(randomDistance);
	
	visitCounter=0;
	$("#visit-counter").text(visitCounter);
	passCounter=0;
	$("#pass-counter").text(passCounter);
 	currentDistance=0;
 	$("#current-distance").text(currentDistance);


}

 $("#controlPannel1").on("click", function() {
 		
 		currentDistance= controlVal1 + currentDistance;
 		if (currentDistance< randomDistance){
       		console.log(currentDistance);
       		$("#current-distance").text(currentDistance);
		}
		if (currentDistance> randomDistance){
				alert("oh no you passed the planet");
				//$("#current-distance").text(currentDistance);
				passCounter++;

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				//$("#current-distance").text(currentDistance);
				visitCounter++;
		}

      });

 $("#controlPannel2").on("click", function() {
 		
 		currentDistance= controlVal2 + currentDistance;
 		if (currentDistance< randomDistance){
       		console.log(currentDistance);
       		$("#current-distance").text(currentDistance);
		}
		if (currentDistance> randomDistance){
				alert("oh no you passed the planet");
				$("#current-distance").text(currentDistance);
				passCounter++;

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				$("#current-distance").text(currentDistance);
				visitCounter++;
		}

      });

  $("#controlPannel3").on("click", function() {
 		
 		currentDistance= controlVal3 + currentDistance;
 		if (currentDistance< randomDistance){
       		console.log(currentDistance);
       		$("#current-distance").text(currentDistance);
		}
		if (currentDistance> randomDistance){
				alert("oh no you passed the planet");
				$("#current-distance").text(currentDistance);
				passCounter++;

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				$("#current-distance").text(currentDistance);
				visitCounter++;
		}

      });

   $("#controlPannel4").on("click", function() {
 		
 		currentDistance= controlVal4 + currentDistance;
 		if (currentDistance< randomDistance){
       		console.log(currentDistance);
       		$("#current-distance").text(currentDistance);
		}
		if (currentDistance> randomDistance){
				alert("oh no you passed the planet");
				$("#current-distance").text(currentDistance);
				passCounter++;

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				$("#current-distance").text(currentDistance);
				visitCounter++;
		}

      });

gameBegin();