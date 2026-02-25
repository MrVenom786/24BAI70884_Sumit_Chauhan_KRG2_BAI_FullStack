document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("pName").textContent = document.getElementById("name").value;
    document.getElementById("pEmail").textContent = document.getElementById("email").value;
    document.getElementById("pJobTitle").textContent = document.getElementById("jobTitle").value;
    document.getElementById("pLocation").textContent = document.getElementById("location").value;
    document.getElementById("pExperience").textContent = document.getElementById("experience").value + " Years";
    document.getElementById("pJobType").textContent = document.getElementById("jobType").value;

    document.getElementById("profileCard").classList.add("active");
});