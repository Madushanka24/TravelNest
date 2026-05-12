// SAVE DATA TO LOCAL STORAGE

function saveData(key, value) {

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}


// GET DATA FROM LOCAL STORAGE

function getData(key) {

  return JSON.parse(
    localStorage.getItem(key)
  ) || [];

}

// SCROLL REVEAL

function revealOnScroll() {

  const reveals =
    document.querySelectorAll(".reveal");


  reveals.forEach((item) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      item.getBoundingClientRect().top;

    const visible =
      100;


    if (elementTop < windowHeight - visible) {

      item.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);