// Write your JavaScript code here!

//Handling Form Submission

window.addEventListener ('load', function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");


//Adding Validation & Alerts

if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ) {
   alert ('All fields are required.');
   //return;
} else if (pilotName.value === "" || copilotName.value === "" || isNAN (fuelLevel.value) || isNaN (cargoMass.value)) {
   alert ('Make sure to enter valid information for each field.');
   //return;
}

//Updating Requirements

if (fuelLevel.value < 10000) {
   faultyItems.style.visibility = "visible";
   pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
   copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
   fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
   launchStatus.innerHTML = `Shuttle not ready for launch.`;
   launchStatus.style.color = "red";
}

if (cargoMass.value > 10000) {
   faultyItems.style.visibility = "visible";
   pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
   copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
   cargoStatus.innerHTML = `There is too much mass for shuttle to take off.`;
   launchStatus.innerHTML = `Shuttle not ready for launch.`;
   launchStatus.style.color = "red";
}

if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
   //faultyItems.style.visibility = "";
   pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
   copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
   launchStatus.innerHTML = `Shuttle is ready for launch.`;
   launchStatus.style.color = "green";
}
   });
});

//Fetching Planetary Data

fetch ("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
   response.json().then(function (json) {
      
      let missionData = document.getElementById("missionTarget");

      missionData.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[5].name}</li>
         <li>Diameter: ${json[5].diameter}</li>
         <li>Star: ${json[5].star}</li>
         <li>Distance from Earth: ${json[5].distance}</li>
         <li>Number of Moons: ${json[5].moons}</li>
      </ol>
      <img src="${json[5].image}">`;
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
