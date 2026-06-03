import "./styles.css";
import odinImage from "./odin.png";
import { headline, homeText, viewHome } from "./home.js";
import { viewMenu } from "./menu.js";
import { viewAbout } from "./about.js";

const image = document.createElement("img");
image.src = odinImage;

export const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

document.body.insertBefore(image, content);
content.appendChild(headline);
content.appendChild(homeText);

homeButton.addEventListener ('click', () => {
    content.replaceChildren();

    viewHome();
});

menuButton.addEventListener ('click', () => {
    content.replaceChildren();

    viewMenu();
});

aboutButton.addEventListener ('click', () => {
    content.replaceChildren();

    viewAbout();
});