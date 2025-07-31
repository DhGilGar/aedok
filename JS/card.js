 
function expandCard(card) {
  const cardContainer = card.closest(".card-container");
  card.classList.toggle("open");

  if (card.classList.contains("open")) {
    cardContainer.classList.remove("col-md-3");
    cardContainer.classList.add("col-md-12");
  } else {
    cardContainer.classList.remove("col-md-12");
    cardContainer.classList.add("col-md-3");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card.card-person").forEach(card => {
    card.addEventListener("click", () => expandCard(card));
  });
});