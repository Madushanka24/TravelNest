// MOBILE NAVBAR

const hamburger =
  document.getElementById("hamburger");

const navLinks =
  document.getElementById("navLinks");


hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



// FORM

const feedbackForm =
  document.getElementById("feedbackForm");

const successMessage =
  document.getElementById("feedbackSuccess");



feedbackForm.addEventListener("submit", (e) => {

  e.preventDefault();


  // GET VALUES

  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const message =
    document.getElementById("message").value.trim();


  // VALIDATION

  if (
    name === "" ||
    email === "" ||
    message === ""
  ) {

    alert("Please fill all fields.");

    return;

  }


  // EMAIL VALIDATION

  const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  if (!email.match(emailPattern)) {

    alert("Please enter a valid email.");

    return;

  }


  // SAVE FEEDBACK

  const feedbacks =
    getData("feedbacks");


  feedbacks.push({
    name,
    email,
    message
  });


  saveData("feedbacks", feedbacks);


  // SUCCESS MESSAGE

  successMessage.textContent =
    "Feedback submitted successfully!";


  feedbackForm.reset();

});



// FAQ ACCORDION

const faqQuestions =
  document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answer =
      question.nextElementSibling;


    // CLOSE OTHER FAQS

    document
      .querySelectorAll(".faq-answer")
      .forEach(item => {

        if (item !== answer) {

          item.style.maxHeight = null;

        }

      });


    // TOGGLE CURRENT FAQ

    if (answer.style.maxHeight) {

      answer.style.maxHeight = null;

    }

    else {

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }

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