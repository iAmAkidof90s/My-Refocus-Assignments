// Use the var keyword to declare a variable Pulse Rate. Set it to 40-100.
var pulserate = 102;
// Add an if statement to check if the Pulse Rate is 40-100. Inside the if block, console.log the sentence: "Normal reading".
// Add an else if to check if the Pulse Rate is 101-109. Inside this else if block, console.log the sentence: "Acceptable to continue home monitoring".
// Add another else if to check if the Pulse Rate is 110-130. Inside the else if block, console.log the sentence: "Seek advice from health professionals".
// Add an else statement if the Pulse Rate is ≥131. Inside the block, type console.log the sentence: "Seek urgent medical advice".

function ispulserate(pluserate) {
     if ((pulserate >= 40) && (pulserate < 100)) {
        console.log ("Normal reading");
     } else if ((pulserate >= 101) && (pulserate < 109)) {
        console.log("Acceptable to continue home monitoring");
     } else if ((pulserate >= 110) && (pulserate < 130)) {
        console.log("Seek advice from health professionals");
     } else {
      console.log("Seek urgent medical advice")
     }
}

ispulserate(pulserate);