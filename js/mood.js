// MOBILE NAVBAR

const hamburger =
  document.getElementById("hamburger");

const navLinks =
  document.getElementById("navLinks");


hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



// AUDIO FUNCTIONS

function playSound(id) {

  document.getElementById(id).play();

}


function pauseSound(id) {

  document.getElementById(id).pause();

}



// TRACKING DESTINATIONS

const trackingGrid =
  document.getElementById("trackingGrid");



function displayTrackingCards() {

  trackingGrid.innerHTML = "";


  destinations.forEach(destination => {

    trackingGrid.innerHTML += `

      <div class="tracking-card">

        <img
          src="${destination.image}"
          alt="${destination.name}"
        >

        <div class="tracking-info">

          <h3>${destination.name}</h3>

          <p>${destination.country}</p>

          <div class="status-buttons">

            <button
              class="btn"
              onclick="markVisited('${destination.name}')"
            >
              Visited
            </button>

            <button
              class="btn"
              onclick="markPlanned('${destination.name}')"
            >
              Planned
            </button>

          </div>

        </div>

      </div>

    `;

  });

}


displayTrackingCards();



// MARK VISITED

function markVisited(name) {

  const visited =
    getData("visitedDestinations");


  if (!visited.includes(name)) {

    visited.push(name);

  }


  saveData(
    "visitedDestinations",
    visited
  );


  alert(`${name} marked as visited!`);

}



// MARK PLANNED

function markPlanned(name) {

  const planned =
    getData("plannedDestinations");


  if (!planned.includes(name)) {

    planned.push(name);

  }


  saveData(
    "plannedDestinations",
    planned
  );


  alert(`${name} added to planned trips!`);

}

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