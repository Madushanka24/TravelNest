// MOBILE NAVBAR

const hamburger =
  document.getElementById("hamburger");

const navLinks =
  document.getElementById("navLinks");


hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



// ELEMENTS

const destinationSelect =
  document.getElementById("destination");

const budgetForm =
  document.getElementById("budgetForm");

const budgetResult =
  document.getElementById("budgetResult");



// LOAD DESTINATIONS INTO SELECT

destinations.forEach(destination => {

  destinationSelect.innerHTML += `

    <option value="${destination.name}">
      ${destination.name}
    </option>

  `;

});



// FORM SUBMIT

budgetForm.addEventListener("submit", (e) => {

  e.preventDefault();


  const destination =
    destinationSelect.value;

  const days =
    parseInt(
      document.getElementById("days").value
    );

  const dailyBudget =
    parseInt(
      document.getElementById("dailyBudget").value
    );


  // TOTAL COST

  const totalCost =
    days * dailyBudget;


  // BUDGET STATUS

  let budgetStatus = "";

  let progressWidth = "";


  if (dailyBudget < 50) {

    budgetStatus = "Low Budget";

    progressWidth = "30%";

  }

  else if (dailyBudget < 150) {

    budgetStatus = "Moderate Budget";

    progressWidth = "65%";

  }

  else {

    budgetStatus = "Luxury Budget";

    progressWidth = "100%";

  }


  // SHOW RESULT

  budgetResult.style.display = "block";


  budgetResult.innerHTML = `

    <h3>Trip Summary</h3>

    <p>
      <strong>Destination:</strong>
      ${destination}
    </p>

    <p>
      <strong>Days:</strong>
      ${days}
    </p>

    <p>
      <strong>Daily Budget:</strong>
      $${dailyBudget}
    </p>

    <p>
      <strong>Total Estimated Cost:</strong>
      $${totalCost}
    </p>

    <p>
      <strong>Budget Status:</strong>
      ${budgetStatus}
    </p>

    <div class="progress-container">

      <div
        class="progress-bar"
        id="progressBar"
      ></div>

    </div>

    <button
      class="btn"
      id="saveBudgetBtn"
      style="margin-top:20px;"
    >
      Save Budget
    </button>

  `;


  // ANIMATE PROGRESS BAR

  setTimeout(() => {

    document.getElementById(
      "progressBar"
    ).style.width = progressWidth;

  }, 100);


  // SAVE TO LOCAL STORAGE

  document.getElementById(
    "saveBudgetBtn"
  ).addEventListener("click", () => {

    const savedBudgets =
      getData("savedBudgets");


    savedBudgets.push({

      destination,
      days,
      dailyBudget,
      totalCost,
      budgetStatus

    });


    saveData(
      "savedBudgets",
      savedBudgets
    );


    alert("Budget saved successfully!");

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

});