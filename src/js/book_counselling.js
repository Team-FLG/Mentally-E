document.addEventListener("DOMContentLoaded", function() {

    const openButton = document.getElementById("data-open-modal");
    const nextButton = document.getElementById("data-next-modal");
    const modal1 = document.getElementById("data-modal");
    const closeButton = document.getElementById("data-close-modal");
    const modal2 = document.getElementById("data-modal2");
    const form = document.getElementById("form1");
    console.log(modal1);
    openButton.addEventListener("click", () => {
        modal1.showModal();
    });

    nextButton.addEventListener("click", () => {
        const valid = form.reportValidity();
        if (valid) {
        modal1.close();
        modal2.showModal();
        }
    });

    closeButton.addEventListener("click", () => {
        modal1.close();
    });
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const mob = document.getElementById("mob");

    function details(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(lname.value);
        console.log(email.value);
        console.log(mob.value);
    }

    document.querySelector("form.booking-form").addEventListener("submit", details);
});


