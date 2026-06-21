let timeLeft = 900; // 15 minutes

setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    timeLeft--;
}, 1000);

async function generateQuestion() {

    let role = document.getElementById("role").value;

    
}
async function generateQuestion() {

    let role = document.getElementById("role").value;

    try {

        const response = await fetch(
            `http://localhost:5000/question/${role}`
        );

        const data = await response.json();

        const questionBox = document.getElementById("questionBox");

        questionBox.innerHTML = `
            <h3>${data.role}</h3>
            <p>${data.question}</p>
        `;

        // Animation restart
        questionBox.style.animation = "none";
        questionBox.offsetHeight;
        questionBox.style.animation = "slideUp 0.5s ease";

    } catch (error) {

        document.getElementById("questionBox").innerHTML = `
            <p>Server not running!</p>
        `;

        console.log(error);
    }
}