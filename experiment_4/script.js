const form = document.getElementById("jobForm");
const speech = document.getElementById("speech");

form.addEventListener("focusin", () => {
    speech.textContent = "Great! Keep entering the details ✨";
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const jobTitle = document.getElementById("jobTitle").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
        <h3>${jobTitle}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>${description}</p>
    `;

    document.getElementById("jobCards").prepend(card);

    speech.textContent = "Awesome! Job posted successfully 🎉";

    form.reset();
});