async function getProfile() {
    const username = document.getElementById("username").value.trim();  // Correct ID
    const profileDiv = document.getElementById("profile");              // Correct ID and no function call

    if (!username) {
        profileDiv.innerHTML = "<p>Please enter a GitHub username.</p>";
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        profileDiv.innerHTML = `
            <h2>${data.name || "No name"} (${data.login})</h2>
            <img src="${data.avatar_url}" alt="${data.login}'s avatar" width="100">
            <p>${data.bio || "No bio available."}</p>
            <p>Location: ${data.location || "Not specified"}</p>
            <p>Followers: ${data.followers} | Following: ${data.following}</p>
            <p>Company: ${data.company || "Not specified"}</p>
            <p>Public Repos: ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">View Profile on GitHub</a>
        `;
    } catch (error) {
        profileDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
