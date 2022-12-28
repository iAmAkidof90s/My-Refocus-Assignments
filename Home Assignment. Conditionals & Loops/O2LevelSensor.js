// Use the var keyword to declare a variable oxygenlevel. Set it to 95%.
var o2Level = 94;
// Add an if statement to check if the o2Level is >95%. Inside the if block, console.log the sentence: "Normal reading".
// Add an else if to check if the o2Level is 95%. Inside this else if block, console.log the sentence: "Acceptable to continue home monitoring".
// Add another else if to check if the 02Level is ≥92% and <95%. Inside the else if block, console.log the sentence: "Seek advice from health professionals".
// Add an else statement if the o2Level is <92%. Inside the block, type console.log the sentence: "Seek urgent medical advice".

function iso2Level(o2Level) {
     if (o2Level > 95){
        console.log ("Normal reading");
     } else if (o2Level < 92) {
        console.log("Seek urgent medical advice");
     } else if ((o2Level >= 92) && (o2Level < 95)) {
        console.log("Seek advice from health professionals");
     } else {
      console.log("Acceptable to continue home monitoring")
     }
}

iso2Level(o2Level);