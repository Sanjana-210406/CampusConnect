
function register(eventName) {
    document.getElementById("eventName").value = eventName;

    document.getElementById("registrationForm").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let eventName = document.getElementById("eventName").value;

    document.getElementById("message").innerText =
        "Thank you, " + name + "! Your registration for " + eventName + " is successful.";

    document.getElementById("registrationForm").reset();
});
