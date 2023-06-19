const openButton = document.getElementById("data-open-modal");
const nextButton = document.getElementById("data-next-modal");
const modal1 = document.getElementById("data-modal");
// const closeButton = document.getElementById("data-close-modal");
const modal2 = document.getElementById("data-modal2");
console.log(modal1)
openButton.addEventListener("click", () => {
modal1.showModal();
});

nextButton.addEventListener("click", () => {
modal1.close();
modal2.showModal("data-modal2");
});

// closeButton.addEventListener("click", () => {
// modal2.close();
// });

const lname = document.getElementById("name");
console.log(lname);