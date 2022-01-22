const logo = document.querySelector("img#logo");
logo.src = "worlds/the-sky-isles/styles/ws.svg";
logo.addEventListener("click", () =>
    window.open(game.world.data.authors
        .filter(a => a.name === "World Smiths")
        .map(a => a.url)[0])
);

const style = document.createElement("style");
style.id = "world-smiths";
style.innerHTML = `
img#logo {
    left: 30px;
    cursor: pointer;
}
img#logo:hover {
    filter: brightness(0.8);
}`;
document.head.appendChild(style);
