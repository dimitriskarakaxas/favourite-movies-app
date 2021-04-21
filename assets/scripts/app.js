const start = performance.now();
const startAddMovieButton = document.querySelector("header button");
const modalEl = document.getElementById("add-modal");
const backDropEl = document.getElementById("backdrop");
const cancelAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = modalEl.querySelectorAll("input");
const entryTextEl = document.getElementById("entry-text");

const movies = [];

const toggleBackdrop = () => backDropEl.classList.toggle("visible");

const backDropClickHandler = () => toggleMovieModal();

const toggleMovieModal = () => {
  modalEl.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  if (!movies.length) entryTextEl.style.display = "none";

  console.log(`1st operation's performance: ${end1 - start1}`);
  console.log(`2nd operation's performance: ${end2 - start2}`);

  movies.push(newMovie);
  toggleMovieModal();
  clearMovieInput();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backDropEl.addEventListener("click", backDropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
