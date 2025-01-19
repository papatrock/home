const username = "papatrock";
const apiUrl = `https://api.github.com/users/${username}/events`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const activityList = document.getElementById("github-activity");
        data.slice(0, 5).forEach(event => {
            const listItem = document.createElement("li");
            listItem.textContent = `${event.type} at ${event.repo.name}`;
            activityList.appendChild(listItem);
        });
    })
    .catch(error => console.error("Erro ao buscar dados do GitHub:", error));
