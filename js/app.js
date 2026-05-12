// MOBILE NAVBAR

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");


hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



// AUTO ROTATING QUOTES

const quotes = [

  "Adventure awaits around every corner.",

  "Travel is the best way to learn.",

  "Explore places you've never imagined.",

  "Discover the beauty of the world.",

  "Travel creates unforgettable memories."

];


const quoteElement = document.getElementById("quote");

let currentQuote = 0;


setInterval(() => {

  currentQuote++;

  if (currentQuote >= quotes.length) {

    currentQuote = 0;

  }

  quoteElement.textContent =
    quotes[currentQuote];

}, 3000);



// DESTINATION OF THE DAY

const dailyContainer =
  document.getElementById("dailyDestination");


const today =
  new Date().getDate();


const destinationIndex =
  today % destinations.length;


const selectedDestination =
  destinations[destinationIndex];


dailyContainer.innerHTML = `

  <div class="destination-card">

    <img
      src="${selectedDestination.image}"
      alt="${selectedDestination.name}"
      class="daily-image"
    >

    <h3>${selectedDestination.name}</h3>

    <p>${selectedDestination.country}</p>

    <p>${selectedDestination.description}</p>

  </div>

`;



// NEWSLETTER FORM

const newsletterForm =
  document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const email =
    document.getElementById("newsletterEmail").value;


  saveData("newsletterEmail", email);


  document.getElementById(
    "newsletterMessage"
  ).textContent =
    "Successfully subscribed!";


  newsletterForm.reset();

});

// SERVICE WORKER

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("service-worker.js")

      .then(() => {

        console.log(
          "Service Worker Registered"
        );

      })

      .catch((error) => {

        console.log(error);

      });

  });

}