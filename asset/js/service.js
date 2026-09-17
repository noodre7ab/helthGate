// لما تضغطي على أي كارت، يغيّر الـactive
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".service-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});
