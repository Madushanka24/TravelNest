// MOBILE NAVBAR

const hamburger =
  document.getElementById("hamburger");

const navLinks =
  document.getElementById("navLinks");


hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



// ELEMENTS

const travelType =
  document.getElementById("travelType");

const budgetRange =
  document.getElementById("budgetRange");

const generateBtn =
  document.getElementById("generateBtn");

const generatorResult =
  document.getElementById("generatorResult");



// GENERATE RANDOM DESTINATION

generateBtn.addEventListener("click", () => {

  const selectedType =
    travelType.value;

  const selectedBudget =
    budgetRange.value;


  // FILTER DESTINATIONS

  let filtered =
    destinations.filter(destination => {

      const typeMatch =
        selectedType === "all" ||
        destination.travelType === selectedType;


      const budgetMatch =
        selectedBudget === "all" ||
        destination.budgetCategory === selectedBudget;


      return typeMatch && budgetMatch;

    });


  // IF NO MATCH

  if (filtered.length === 0) {

    generatorResult.innerHTML = `

      <p>
        No destinations found for selected filters.
      </p>

    `;

    return;

  }


  // RANDOM DESTINATION

  const randomIndex =
    Math.floor(Math.random() * filtered.length);

  const selectedDestination =
    filtered[randomIndex];


  // DISPLAY RESULT

  generatorResult.innerHTML = `

    <div class="generated-card">

      <img
        src="${selectedDestination.image}"
        alt="${selectedDestination.name}"
      >

      <div class="generated-info">

        <h3>${selectedDestination.name}</h3>

        <p>${selectedDestination.country}</p>

        <p>
          ${selectedDestination.description}
        </p>

        <button
          class="btn"
          id="wishlistBtn"
          style="margin-top:20px;"
        >
          Save to Wishlist
        </button>

      </div>

    </div>

  `;


  // SAVE TO WISHLIST

  document.getElementById(
    "wishlistBtn"
  ).addEventListener("click", () => {

    const wishlist =
      getData("wishlist");


    wishlist.push(selectedDestination);


    saveData("wishlist", wishlist);


    alert("Destination added to wishlist!");

  });

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