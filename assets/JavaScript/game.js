
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

function gameContinue(){
	randomDistance= Math.floor(Math.random() * 120) + 13;
	$("#random-distance").text(randomDistance);

	controlVal1 = randomValBank[Math.floor(Math.random() * randomValBank.length)];
	controlVal2 = randomValBank[Math.floor(Math.random() * randomValBank.length)];
	controlVal3 = randomValBank[Math.floor(Math.random() * randomValBank.length)];
	controlVal4 = randomValBank[Math.floor(Math.random() * randomValBank.length)];

	currentDistance=0;
	$("#current-distance").text(currentDistance);

}

/*	attempting to reload image every time game is continued
	function resetDestination{

    var images = [];
    $("#stellarImage").css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
   }
}*/

 $("#controlPannel1").on("click", function() {
 		
 		currentDistance= controlVal1 + currentDistance;
 		if (currentDistance< randomDistance){
       		console.log(currentDistance);
       		$("#current-distance").text(currentDistance);
		}
		if (currentDistance> randomDistance){
				alert("oh no you passed the planet");
				
				passCounter++;
				$("#pass-counter").text(passCounter);
				gameContinue();

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				
				visitCounter++;
				$("#visit-counter").text(visitCounter);
				gameContinue();
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
				$("#pass-counter").text(passCounter);
				gameContinue();

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				$("#current-distance").text(currentDistance);
				visitCounter++;
				$("#visit-counter").text(visitCounter);
				gameContinue();
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
				$("#pass-counter").text(passCounter);
				gameContinue();

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				$("#current-distance").text(currentDistance);
				visitCounter++;
				$("#visit-counter").text(visitCounter);
				gameContinue();
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
				$("#pass-counter").text(passCounter);
				gameContinue();

		}
		if (currentDistance===randomDistance){
				alert("You have reached your destination!");
				$("#current-distance").text(currentDistance);
				visitCounter++;
				$("#visit-counter").text(visitCounter);
				gameContinue();
		}

      });

gameBegin();