// MOBILE NAVBAR

const hamburger =
  document.getElementById("hamburger");

const navLinks =
  document.getElementById("navLinks");


hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



// ELEMENTS

const destinationGrid =
  document.getElementById("destinationGrid");

const searchInput =
  document.getElementById("searchInput");

const continentFilter =
  document.getElementById("continentFilter");

const modal =
  document.getElementById("destinationModal");

const modalBody =
  document.getElementById("modalBody");

const closeModal =
  document.getElementById("closeModal");



// DISPLAY DESTINATIONS

function displayDestinations(data) {

  destinationGrid.innerHTML = "";

  data.forEach(destination => {

    destinationGrid.innerHTML += `

      <div
        class="destination-card"
        onclick="openModal(${destination.id})"
      >

        <img
          src="${destination.image}"
          alt="${destination.name}"
        >

        <div class="destination-info">

          <h3>${destination.name}</h3>

          <p>${destination.country}</p>

          <p>${destination.continent}</p>

        </div>

      </div>

    `;

  });

}


// INITIAL DISPLAY

displayDestinations(destinations);



// SEARCH + FILTER

function filterDestinations() {

  const searchValue =
    searchInput.value.toLowerCase();

  const continentValue =
    continentFilter.value;


  const filtered =
    destinations.filter(destination => {

      const matchesSearch =
        destination.name
        .toLowerCase()
        .includes(searchValue);


      const matchesContinent =
        continentValue === "all" ||
        destination.continent === continentValue;


      return matchesSearch &&
        matchesContinent;

    });


  displayDestinations(filtered);

}


searchInput.addEventListener(
  "input",
  filterDestinations
);

continentFilter.addEventListener(
  "change",
  filterDestinations
);



// OPEN MODAL

function openModal(id) {

  const destination =
    destinations.find(
      item => item.id === id
    );


  modal.style.display = "flex";


  modalBody.innerHTML = `

    <img
      src="${destination.image}"
      alt="${destination.name}"
      style="
        width:100%;
        border-radius:12px;
        margin-bottom:20px;
      "
    >

    <h2>${destination.name}</h2>

    <p>
      ${destination.description}
    </p>

    <h3 style="margin-top:20px;">
      Popular Attractions
    </h3>

    <ul>

      ${destination.attractions
        .map(item => `<li>${item}</li>`)
        .join("")}

    </ul>

    <h3 style="margin-top:20px;">
      Travel Cost Comparison
    </h3>

    <table>

      <tr>
        <th>Budget Type</th>
        <th>Estimated Cost</th>
      </tr>

      <tr>
        <td>Low</td>
        <td>${destination.budget.low}</td>
      </tr>

      <tr>
        <td>Moderate</td>
        <td>${destination.budget.moderate}</td>
      </tr>

      <tr>
        <td>Luxury</td>
        <td>${destination.budget.luxury}</td>
      </tr>

    </table>

  `;

}



// CLOSE MODAL

closeModal.addEventListener("click", () => {

  modal.style.display = "none";

});



// CLOSE OUTSIDE MODAL

window.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.style.display = "none";

  }

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