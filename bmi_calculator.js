var bodyMassIndex = 19;

function isBMI(bodyMassIndex) {
     if ((bodyMassIndex >= 18.5) && (bodyMassIndex < 24.9)) {
        console.log ("You are in Healthy Range");
     } else if ((bodyMassIndex >= 25) && (bodyMassIndex < 29.9)) {
        console.log("You are overweight");
     } else if ((bodyMassIndex >= 30) && (bodyMassIndex < 39.9)) {
        console.log("You are obese");
     } else if ((bodyMassIndex <= 18.4)) {
        console.log("You are underweight");
     } else {
      console.log("You are severely obese")
     }
}

isBMI(bodyMassIndex);