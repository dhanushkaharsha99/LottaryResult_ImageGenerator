let formDisplayContainer = document.getElementsByClassName("form");

let date = document.getElementById("today-date");

// ALL THE FORMS
let mahajanaSampathaForm = document.getElementById("mahajana-sampatha-form");
let adaKotipathiForm = document.getElementById("adakotipathi-form");
let megaPowerForm = document.getElementById("megaPower-form");
let govisethaForm = document.getElementById("govisetha-form");
let hadahanaForm = document.getElementById("hadahana-form");
let kaprukaForm = document.getElementById("kapruka-form");
let lagnaForm = document.getElementById("lagna-form");
let lucky7Form = document.getElementById("lucky7-form");
let shanidaForm = document.getElementById("shanida-form");
let superballForm = document.getElementById("superball-form");
let sasiriForm = document.getElementById("sasiri-form");
let jayodaForm = document.getElementById("jayoda-form");
let dananidanayaForm = document.getElementById("dananidanaya-form");
let supiridanasampathaForm = document.getElementById("supiri-dana-sampatha-form");


// ALL THE BUTTONS
let mahajanaSampathaButton = document.getElementById(
  "mahajana-sampatha-button"
);
let adaKotipathiButton = document.getElementById("ada-kotipathi-button");
let megaPowerButton = document.getElementById("mega-power-button");
let govisethaButton = document.getElementById("govisetha-button");
let hadahanaButton = document.getElementById("hadahana-button");
let kaprukaButton = document.getElementById("kapruka-button");
let lagnaWasanawaButton = document.getElementById("lagna-wasanawa-button");
let lucky7Button = document.getElementById("lucky-7-button");
let shanidaWasanawaButton = document.getElementById("shanida-wasanawa-button");
let superBallButton = document.getElementById("super-ball-button");
let sasiriButton = document.getElementById("sasiri-button");
let jayodaButton = document.getElementById("jayoda-button");
let dananidanayaButton = document.getElementById("dhana-nidanata-button");
let supiridanasampathaButton = document.getElementById("supiri-dana-sampatha-button");

// Ticket
let sasiriTicket = document.getElementById('sasiri-ticket');
let jayodaTicket = document.getElementById('jayoda-Ticket');


// Get the current date
let currentDate = new Date();
const formattedDate = formatDate(currentDate);

// Set The today date
date.innerText = formattedDate;

// Get the day name for the current date
let dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });
hideButtons(dayName);

function hideButtons(today) {
  switch (today) {
    case "Monday":
      mahajanaSampathaButton.style.display = "flex";
      adaKotipathiButton.style.display = "flex";
      megaPowerButton.style.display = "flex";
      govisethaButton.style.display = "flex";
      hadahanaButton.style.display = "flex";
      kaprukaButton.style.display = "flex";
      lagnaWasanawaButton.style.display = "flex";
      lucky7Button.style.display = "flex";
      shanidaWasanawaButton.style.display = "flex";
      superBallButton.style.display = "flex";
      sasiriButton.style.display = "none";
      jayodaButton.style.display = "flex";
      dananidanayaButton.style.display = "flex";
      supiridanasampathaButton.style.display = "flex";
      sasiriTicket.style.display = "none";
      break;
    case "Tuesday":
      mahajanaSampathaButton.style.display = "flex";
      adaKotipathiButton.style.display = "flex";
      megaPowerButton.style.display = "flex";
      govisethaButton.style.display = "flex";
      hadahanaButton.style.display = "flex";
      kaprukaButton.style.display = "flex";
      lagnaWasanawaButton.style.display = "flex";
      lucky7Button.style.display = "flex";
      shanidaWasanawaButton.style.display = "flex";
      superBallButton.style.display = "flex";
      sasiriButton.style.display = "flex";
      jayodaButton.style.display = "none";
      dananidanayaButton.style.display = "flex";
      supiridanasampathaButton.style.display = "flex";
      jayodaTicket.style.display = 'none';

      break;
    case "Wednesday":
      mahajanaSampathaButton.style.display = "flex";
      adaKotipathiButton.style.display = "flex";
      megaPowerButton.style.display = "flex";
      govisethaButton.style.display = "flex";
      hadahanaButton.style.display = "flex";
      kaprukaButton.style.display = "flex";
      lagnaWasanawaButton.style.display = "flex";
      lucky7Button.style.display = "flex";
      shanidaWasanawaButton.style.display = "flex";
      superBallButton.style.display = "flex";
      sasiriButton.style.display = "none";
      jayodaButton.style.display = "flex";
      dananidanayaButton.style.display = "flex";
      supiridanasampathaButton.style.display = "flex";
      sasiriTicket.style.display = "none";

      break;
    case "Thursday":
      mahajanaSampathaButton.style.display = "flex";
      adaKotipathiButton.style.display = "flex";
      megaPowerButton.style.display = "flex";
      govisethaButton.style.display = "flex";
      hadahanaButton.style.display = "flex";
      kaprukaButton.style.display = "flex";
      lagnaWasanawaButton.style.display = "flex";
      lucky7Button.style.display = "flex";
      shanidaWasanawaButton.style.display = "flex";
      superBallButton.style.display = "flex";
      sasiriButton.style.display = "none";
      jayodaButton.style.display = "none";
      dananidanayaButton.style.display = "flex";
      supiridanasampathaButton.style.display = "flex";
      sasiriTicket.style.display = "none";
      jayodaTicket.style.display = 'none';
      break;

    case "Friday":
      mahajanaSampathaButton.style.display = "flex";
      adaKotipathiButton.style.display = "flex";
      megaPowerButton.style.display = "flex";
      govisethaButton.style.display = "flex";
      hadahanaButton.style.display = "flex";
      kaprukaButton.style.display = "flex";
      lagnaWasanawaButton.style.display = "flex";
      lucky7Button.style.display = "flex";
      shanidaWasanawaButton.style.display = "flex";
      superBallButton.style.display = "flex";
      sasiriButton.style.display = "flex";
      jayodaButton.style.display = "none";
      dananidanayaButton.style.display = "flex";
      supiridanasampathaButton.style.display = "flex";
      jayodaTicket.style.display = 'none';
      break;

    case "Saturday":
      mahajanaSampathaButton.style.display = "flex";
      adaKotipathiButton.style.display = "flex";
      megaPowerButton.style.display = "flex";
      govisethaButton.style.display = "flex";
      hadahanaButton.style.display = "flex";
      kaprukaButton.style.display = "flex";
      lagnaWasanawaButton.style.display = "flex";
      lucky7Button.style.display = "flex";
      shanidaWasanawaButton.style.display = "flex";
      superBallButton.style.display = "flex";
      sasiriButton.style.display = "none";
      jayodaButton.style.display = "none";
      dananidanayaButton.style.display = "flex";
      supiridanasampathaButton.style.display = "flex";
      sasiriTicket.style.display = "none";
      jayodaTicket.style.display = 'none';
      break;

    case "Sunday":
      mahajanaSampathaButton.style.display = "flex";
      adaKotipathiButton.style.display = "flex";
      megaPowerButton.style.display = "flex";
      govisethaButton.style.display = "flex";
      hadahanaButton.style.display = "flex";
      kaprukaButton.style.display = "flex";
      lagnaWasanawaButton.style.display = "flex";
      lucky7Button.style.display = "flex";
      shanidaWasanawaButton.style.display = "flex";
      superBallButton.style.display = "flex";
      sasiriButton.style.display = "flex";
      jayodaButton.style.display = "none";
      dananidanayaButton.style.display = "flex";
      supiridanasampathaButton.style.display = "flex";
      jayodaTicket.style.display = 'none';
      break;
  }
}

function toggleForms(ticketName) {
  hideAllForms();
  switch (ticketName) {
    case "Mahajana Sampatha":
      mahajanaSampathaButton.classList.add("clicked-button-color");
      mahajanaSampathaForm.style.display = "flex";
      break;
    case "Ada Kotipathi":
      adaKotipathiButton.classList.add("clicked-button-color");
      adaKotipathiForm.style.display = "flex";
      break;
    case "Mega Power":
      megaPowerButton.classList.add("clicked-button-color");
      megaPowerForm.style.display = "flex";
      break;
    case "Govisetha":
      govisethaButton.classList.add("clicked-button-color");
      govisethaForm.style.display = "flex";
      break;
    case "Hadahana":
      hadahanaButton.classList.add("clicked-button-color");
      hadahanaForm.style.display = "flex";
      break;
    case "Kapruka":
      kaprukaButton.classList.add("clicked-button-color");
      kaprukaForm.style.display = "flex";
      break;
    case "Lagna wasanawa":
      lagnaWasanawaButton.classList.add("clicked-button-color");
      lagnaForm.style.display = "flex";
      break;
    case "Lucky 7":
      lucky7Button.classList.add("clicked-button-color");
      lucky7Form.style.display = "flex";
      break;
    case "Shanida Wasana":
      shanidaWasanawaButton.classList.add("clicked-button-color");
      shanidaForm.style.display = "flex";
      break;
    case "Super Ball":
      superBallButton.classList.add("clicked-button-color");
      superballForm.style.display = "flex";
      break;
    case "Sasiri":
      sasiriButton.classList.add("clicked-button-color");
      sasiriForm.style.display = "flex";
      break;
    case "jayoda":
      jayodaButton.classList.add("clicked-button-color");
      jayodaForm.style.display = "flex";
      break;
    case "Dana Nidanaya":
      dananidanayaButton.classList.add("clicked-button-color");
      dananidanayaForm.style.display = "flex";
      break;
    case "Supiri Dana Sampatha":
      supiridanasampathaButton.classList.add("clicked-button-color");
      supiridanasampathaForm.style.display = "flex";
      break;
  }
}

// Function to reset color for all buttons
function resetButtonColors() {
  let buttons = document.querySelectorAll(".toggle-button");
  buttons.forEach((button) => {
    button.classList.remove("clicked-button-color");
  });
}

function hideAllForms() {
  // Get all form elements and hide them
  let allForms = document.querySelectorAll(".forms");
  allForms.forEach((form) => {
    form.style.display = "none";
  });

  // Reset button colors
  resetButtonColors();
}

function formatDate(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Extract the day and ordinal suffix
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);

  // Replace the day in the formatted date with the day and suffix
  return formattedDate.replace(day, day + suffix);
}

function getOrdinalSuffix(number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
}











// Lahiru---------------------------------------------------------------

// updated details

function updateDetails(ticket) {

  var drawNumber,ticketNumber,letterOne, letterTwo, letterThree, letterFour, letterFive, letterSix, letterSeven, discription;
  var detailsDrawNumber, detailsOne, detailsTwo, detailsThree, detailsFour, detailsFive, detailsSix, detailsSeven, detailsDiscription;
  
  switch(ticket) {

    case "mahajanaSampatha":
      drawNumber = document.getElementById('mahajanaSampathaDraw-number');
      letterOne = document.getElementById('mahajanaSampathaLatter');
      letterTwo = document.getElementById('mahajanaSampathaNumber-one');
      letterThree = document.getElementById('mahajanaSampathaNumber-two');
      letterFour = document.getElementById('mahajanaSampathaNumber-three');
      letterFive = document.getElementById('mahajanaSampathaNumber-four');
      letterSix = document.getElementById('mahajanaSampathaNumber-five');
      letterSeven = document.getElementById('mahajanaSampathaNumber-six');
      discription = document.getElementById('mahajanaSampathaSpecialResults');

      detailsDrawNumber = document.getElementById('mahajanaSampathaDetailsDrawNumber');
      detailsOne = document.getElementById('mahajanaSampathaDetailsLetter');
      detailsTwo = document.getElementById('mahajanaSampathaDetailsOne');
      detailsThree = document.getElementById('mahajanaSampathaDetailsTwo');
      detailsFour = document.getElementById('mahajanaSampathaDetailsThree');
      detailsFive = document.getElementById('mahajanaSampathaDetailsFour');
      detailsSix = document.getElementById('mahajanaSampathaDetailsFive');
      detailsSeven = document.getElementById('mahajanaSampathaDetailsSix');
      detailsDiscription = document.getElementById('mahajanaSampathaDetailsDiscription');

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsSeven.textContent = letterSeven.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "adaKotipathi":
      drawNumber = document.getElementById('adaKotipathiDraw-number');
      letterOne = document.getElementById('adaKotipathiLatter');
      letterTwo = document.getElementById('adaKotipathiNumber-one');
      letterThree = document.getElementById('adaKotipathiNumber-two');
      letterFour = document.getElementById('adaKotipathiNumber-three');
      letterFive = document.getElementById('adaKotipathiNumber-four');
      letterSix = document.getElementById('adaKotipathiTicketNumber');
      discription = document.getElementById('adaKotipathiSpecialResults');

      detailsDrawNumber = document.getElementById('adaKotipathiDetailsDrawNumber');
      detailsOne = document.getElementById('adaKotipathiDetailsLetter');
      detailsTwo = document.getElementById('adaKotipathiDetailsNumberOne');
      detailsThree = document.getElementById('adaKotipathiDetailsNumberTwo');
      detailsFour = document.getElementById('adaKotipathiDetailsNumberThree');
      detailsFive = document.getElementById('adaKotipathiDetailsNumberFour');
      detailsSix = document.getElementById('adaKotipathiDetailsFive');
      detailsDiscription = document.getElementById('adaKotipathiDetailsDiscription');

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "dananidanaya":
      drawNumber = document.getElementById('dananidanayaDraw-number');
      letterOne = document.getElementById('dananidanayaLatter');
      letterTwo = document.getElementById('dananidanayaNumber-one');
      letterThree = document.getElementById('dananidanayaNumber-two');
      letterFour = document.getElementById('dananidanayaNumber-three');
      letterFive = document.getElementById('dananidanayaNumber-four');
      letterSix = document.getElementById('dananidanaya-TicketNumber');
      discription = document.getElementById('dananidanayaSpecialResults');

      detailsDrawNumber = document.getElementById('dhanaNidhanayaDetailsDrawNumber');
      detailsOne = document.getElementById('dhanaNidhanayaDetailsLetter');
      detailsTwo = document.getElementById('dhanaNidhanayaDetailsOne');
      detailsThree = document.getElementById('dhanaNidhanayaDetailsTwo');
      detailsFour = document.getElementById('dhanaNidhanayaDetailsThree');
      detailsFive = document.getElementById('dhanaNidhanayaDetailsFour');
      detailsSix = document.getElementById('dananidanayaDetailsFive');
      detailsDiscription = document.getElementById('dhanaNidhanayaDetailsDiscription');

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "megaPower":
      drawNumber = document.getElementById('megaPowerDraw-number');
      letterOne = document.getElementById('megaPowerlatter');
      letterTwo = document.getElementById('megaPowernumber-one');
      letterThree = document.getElementById('megaPowernumber-two');
      letterFour = document.getElementById('megaPowernumber-three');
      letterFive = document.getElementById('megaPowernumber-four');
      letterSix = document.getElementById('megaPowernumber-five');
      letterSeven = document.getElementById('megaPowerTicketNumber');
      discription = document.getElementById('megaPowerSpecialResults');

      detailsDrawNumber = document.getElementById('megaPowerDetailsDrawNumber');
      detailsOne = document.getElementById('megaPowerDetailsLetter');
      detailsTwo = document.getElementById('megaPowerDetailsOne');
      detailsThree = document.getElementById('megaPowerDetailsTwo');
      detailsFour = document.getElementById('megaPowerDetailsThree');
      detailsFive = document.getElementById('megaPowerDetailsFour');
      detailsSix = document.getElementById('megaPowerDetailsFive');
      detailsSeven = document.getElementById('megaPowerDetailsSix');
      detailsDiscription = document.getElementById('megaPowerDetailsDiscription');
      
      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsSeven.textContent = letterSeven.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "Govisetha":
      drawNumber = document.getElementById('govisethadraw-number');
      letterOne = document.getElementById('govisethaLatter');
      letterTwo = document.getElementById('govisethanumber-one');
      letterThree = document.getElementById('govisethanumber-two');
      letterFour = document.getElementById('govisethanumber-three');
      letterFive = document.getElementById('govisethanumber-four');
      letterSix = document.getElementById('govisethaticketNumber');
      discription = document.getElementById('govisethaSpecialResults');

      detailsDrawNumber = document.getElementById('govisethaDetailsDrawNumber');
      detailsOne = document.getElementById('govisethaDetailsLetter');
      detailsTwo = document.getElementById('govisethaDetailsOne');
      detailsThree = document.getElementById('govisethaDetailsTwo');
      detailsFour = document.getElementById('govisethaDetailsThree');
      detailsFive = document.getElementById('govisethaDetailsFour');
      detailsSix = document.getElementById('govisethaDetailsFive');
      detailsDiscription = document.getElementById('govisethaDetailsDiscription');

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "Hadahana":
      drawNumber = document.getElementById('hadahanaDraw-number');
      letterTwo = document.getElementById('hadahanaNumber-one');
      letterThree = document.getElementById('hadahanaNumber-two');
      letterFour = document.getElementById('hadahanaNumber-three');
      letterFive = document.getElementById('hadahanaNumber-four');
      letterSix = document.getElementById('hadahanaTicketNumber');
      discription = document.getElementById('hadahanaSpecialResults');

      detailsDrawNumber = document.getElementById('hadhahanaDetailsDrawNumber');
      detailsTwo = document.getElementById('hadhahanaDetailsOne');
      detailsThree = document.getElementById('hadhahanaDetailsTwo');
      detailsFour = document.getElementById('hadhahanaDetailsThree');
      detailsFive = document.getElementById('hadhahanaDetailsFour');
      detailsSix = document.getElementById('hadhahanaDetailsFive');
      detailsDiscription = document.getElementById('hadhahanaDetailsDiscription');      

      detailsDrawNumber.textContent = drawNumber.value; 
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "Kapruka":
      drawNumber = document.getElementById('kaprukaDraw-number');
      letterOne = document.getElementById('kaprukaLatter');
      letterTwo = document.getElementById('kaprukaNumber-one');
      letterThree = document.getElementById('kaprukaNumber-two');
      letterFour = document.getElementById('kaprukaNumber-three');
      letterFive = document.getElementById('kaprukaNumber-four');
      letterSix = document.getElementById('kaprukaNumber-five');
      discription = document.getElementById('kaprukaSpecialResults');

      detailsDrawNumber = document.getElementById('kaprukaDetailsDrawNumber');
      detailsOne = document.getElementById('kaprukaDetailsLetter');
      detailsTwo = document.getElementById('kaprukaDetailsOne');
      detailsThree = document.getElementById('kaprukaDetailsTwo');
      detailsFour = document.getElementById('kaprukaDetailsThree');
      detailsFive = document.getElementById('kaprukaDetailsFour');
      detailsSix = document.getElementById('kaprukaDetailsFive');
      detailsDiscription = document.getElementById('kaprukaDetailsDiscription');  

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "lagnaWasanawa":
      drawNumber = document.getElementById('lagnaWasanawaDraw-number');
      letterTwo = document.getElementById('lagnaWasanawaNumber-one');
      letterThree = document.getElementById('lagnaWasanawaNumber-two');
      letterFour = document.getElementById('lagnaWasanawaNumber-three');
      letterFive = document.getElementById('lagnaWasanawaNumber-four');
      letterSix = document.getElementById('lagnaWasanawaTicketNumber');
      discription = document.getElementById('lagnaWasanawaSpecialResults');

      detailsDrawNumber = document.getElementById('lagnaWasanawaDetailsDrawNumber');
      detailsTwo = document.getElementById('lagnaWasanawaDetailsOne');
      detailsThree = document.getElementById('lagnaWasanawaDetailsTwo');
      detailsFour = document.getElementById('lagnaWasanawaDetailsThree');
      detailsFive = document.getElementById('lagnaWasanawaDetailsFour');
      detailsSix = document.getElementById('lagnaWasanawaDetailsFive');
      detailsDiscription = document.getElementById('lagnaWasanawaDetailsDiscription');  

      detailsDrawNumber.textContent = drawNumber.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "lucky":
      drawNumber = document.getElementById('luckyDraw-number');
      letterOne = document.getElementById('luckyLatter');
      letterTwo = document.getElementById('luckyNumber-one');
      letterThree = document.getElementById('luckyNumber-two');
      letterFour = document.getElementById('luckyNumber-three');
      letterFive = document.getElementById('luckyNumber-four');
      letterSix = document.getElementById('luckyNumber-five');
      letterSeven = document.getElementById('luckyNumber-six');
      discription = document.getElementById('luckySpecialResults');

      detailsDrawNumber = document.getElementById('luckyDetailsDrawNumber');
      detailsOne = document.getElementById('luckyDetailsLetter');
      detailsTwo = document.getElementById('luckyDetailsOne');
      detailsThree = document.getElementById('luckyDetailsTwo');
      detailsFour = document.getElementById('luckyDetailsThree');
      detailsFive = document.getElementById('luckyDetailsFour');
      detailsSix = document.getElementById('luckyDetailsFive');
      detailsSeven = document.getElementById('luckyDetailsSix');
      detailsDiscription = document.getElementById('luckyDetailsDiscription');  

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsSeven.textContent = letterSeven.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "shanidaWasanawa":
      drawNumber = document.getElementById('shanidaWasanawaDraw-number');
      letterOne = document.getElementById('shanidaWasanawaLatter');
      letterTwo = document.getElementById('shanidaWasanawaNumber-one');
      letterThree = document.getElementById('shanidaWasanawaNumber-two');
      letterFour = document.getElementById('shanidaWasanawaNumber-three');
      letterFive = document.getElementById('shanidaWasanawaNumber-four');
      letterSix = document.getElementById('shanidaWasanawaTicketNumber');
      discription = document.getElementById('shanidaWasanawaSpecialResults');
      
      detailsDrawNumber = document.getElementById('shanidhaWasanawaDetailsDrawNumber');
      detailsOne = document.getElementById('shanidhaWasanawaDetailsLetter');
      detailsTwo = document.getElementById('shanidhaWasanawaDetailsOne');
      detailsThree = document.getElementById('shanidhaWasanawaDetailsTwo');
      detailsFour = document.getElementById('shanidhaWasanawaDetailsThree');
      detailsFive = document.getElementById('shanidhaWasanawaDetailsFour');
      detailsSix = document.getElementById('shanidhaWasanawaDetailsFive');
      detailsDiscription = document.getElementById('shanidhaWasanawaDetailsDiscription');
      
      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "superBall":
      drawNumber = document.getElementById('superBallDraw-number');
      letterOne = document.getElementById('superBallLatter');
      letterTwo = document.getElementById('superBallNumber-one');
      letterThree = document.getElementById('superBallNumber-two');
      letterFour = document.getElementById('superBallNumber-three');
      letterFive = document.getElementById('superBallNumber-four');
      letterSix = document.getElementById('superBallTicketNumber');
      discription = document.getElementById('superBallSpecialResults');

      detailsDrawNumber = document.getElementById('superBallDetailsDrawNumber');
      detailsOne = document.getElementById('superBallDetailsLetter');
      detailsTwo = document.getElementById('superBallDetailsOne');
      detailsThree = document.getElementById('superBallDetailsTwo');
      detailsFour = document.getElementById('superBallDetailsThree');
      detailsFive = document.getElementById('superBallDetailsFour');
      detailsSix = document.getElementById('superBallDetailsFive');
      detailsDiscription = document.getElementById('superBallDetailsDiscription');

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;    
      break;

      case "supiridanasampatha":
      drawNumber = document.getElementById('supiridanasampathDrawNumber');
      letterOne = document.getElementById('supiridanasampathaLatter');
      letterTwo = document.getElementById('supiridanasampathaNumber-one');
      letterThree = document.getElementById('supiridanasampathaNumber-two');
      letterFour = document.getElementById('supiridanasampathaNumber-three');
      letterFive = document.getElementById('supiridanasampathaNumber-four');
      letterSix = document.getElementById('supiridanasampathaNumber-five');
      letterSeven = document.getElementById('supiridanasampathaNumber-six');
      specialNumber = document.getElementById('supiridanasampathaTicketNumber');
      discription = document.getElementById('supiridanasampathaSpecialResults');

      detailsDrawNumber = document.getElementById('supiriDhanaNidhanayaDetailsDrawNumber');
      detailsOne = document.getElementById('supiriDhanaNidhanayaDetailsLetter');
      detailsTwo = document.getElementById('supiriDhanaNidhanayaDetailsOne');
      detailsThree = document.getElementById('supiriDhanaNidhanayaDetailsTwo');
      detailsFour = document.getElementById('supiriDhanaNidhanayaDetailsThree');
      detailsFive = document.getElementById('supiriDhanaNidhanayaDetailsFour');
      detailsSix = document.getElementById('supiriDhanaNidhanayaDetailsFive');
      detailsSeven = document.getElementById('supiriDhanaNidhanayaDetailsSix');
      detailspecial = document.getElementById('supiriDhanaNidhanayaDetailsSeven');
      detailsDiscription = document.getElementById('supiriDhanaNidhanayaDetailsDiscription');

      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsSeven.textContent = letterSeven.value;
      detailsDiscription.textContent = discription.value;
      detailspecial.textContent = specialNumber.value;
      break;

    case "sasiri":
      drawNumber = document.getElementById('sasiriDraw-number');
      letterOne = document.getElementById('sasiriNumber-one');
      letterTwo = document.getElementById('sasiriNumber-two');
      letterThree = document.getElementById('sasiriNumber-three');
      discription = document.getElementById('sasiriSpecialResults');

      detailsDrawNumber = document.getElementById('sasiriDetailsDrawNumber');
      detailsOne = document.getElementById('sasiriDetailsLetter');
      detailsTwo = document.getElementById('sasiriDetailsOne');
      detailsThree = document.getElementById('sasiriDetailsTwo');
      detailsDiscription = document.getElementById('sasiriDetailsDiscription');      
      
      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsDiscription.textContent = discription.value;
      break;

    case "Jayoda":
      drawNumber = document.getElementById('JayodaDraw-number');
      letterOne = document.getElementById('JayodaLatter');
      letterTwo = document.getElementById('Jayodanumber-one');
      letterThree = document.getElementById('JayodaNumber-two');
      letterFour = document.getElementById('JayodaNumber-three');
      letterFive = document.getElementById('JayodaNumber-four');
      letterSix = document.getElementById('JayodaTicketNumber');
      discription = document.getElementById('JayodaSpecialResults');

      detailsDrawNumber = document.getElementById('jayodhaDetailsDrawNumber');
      detailsOne = document.getElementById('jayodhaDetailsLetter');
      detailsTwo = document.getElementById('jayodhaDetailsOne');
      detailsThree = document.getElementById('jayodhaDetailsTwo');
      detailsFour = document.getElementById('jayodhaDetailsThree');
      detailsFive = document.getElementById('jayodhaDetailsFour');
      detailsSix = document.getElementById('jayodhaDetailsFive');
      detailsDiscription = document.getElementById('jayodhaDetailsDiscription');
      
      detailsDrawNumber.textContent = drawNumber.value;
      detailsOne.textContent = letterOne.value;
      detailsTwo.textContent = letterTwo.value;
      detailsThree.textContent = letterThree.value;
      detailsFour.textContent = letterFour.value;
      detailsFive.textContent = letterFive.value;
      detailsSix.textContent = letterSix.value;
      detailsDiscription.textContent = discription.value;
      break;
  }
}




//Date and time set to details section 

function setDate() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let MonthNumber = currentDate.getMonth();
    let todayDate = currentDate.getDate();
    let currentMonthNumber = MonthNumber + 1;
    let today = currentYear + "-" + currentMonthNumber + "-" + todayDate;
    document.getElementById("setTodayDate").textContent = today;

    let dayNames = ["ඉරිදා", "සදුදා", "අගහරැවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"];
    let currentDayName = dayNames[currentDate.getDay()];
    document.getElementById("setDayName").textContent = currentDayName;
  }

setDate();

//image download function

function downloadAllDetails() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  let currentMonthName = monthNames[currentDate.getMonth()];
  let currentDay = currentDate.getDate();
  let today = currentYear + "-" + currentMonthName + "-" + currentDay;

    var detailsSection = document.querySelector('.display-form');
    html2canvas(detailsSection).then(function (canvas) {
        var imageDataURL = canvas.toDataURL();
        var a = document.createElement('a');
        a.href = imageDataURL;
        a.download = `${today}_Lottery_Results.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

//Lagna function

function changeImage(imageSrc) {
// Get the img element by its ID
var imageElement = document.getElementById('image');
            
// Set the src attribute of the img element to display the selected image
imageElement.src = imageSrc;
}

function changeImage1(imageSrc) {
  // Get the img element by its ID
  var imageElement = document.getElementById('image1');
              
  // Set the src attribute of the img element to display the selected image
  imageElement.src = imageSrc;
  }
    
