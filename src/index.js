import "./styles.css";
import odinImage from "./odin.png";
import { headline, homeText } from "./home.js";
import { menu, appetizers, mainCourses, desserts, appetizersList, mainCoursesList, dessertsList } from "./menu.js";
import { about, aboutText } from "./about.js";

const image = document.createElement("img");
image.src = odinImage;

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

document.body.insertBefore(image, content);
content.appendChild(headline);
content.appendChild(homeText);

homeButton.addEventListener ('click', () => {
    content.replaceChildren();

    content.appendChild(headline);
    content.appendChild(homeText);
});

menuButton.addEventListener ('click', () => {
    content.replaceChildren();

    content.appendChild(menu);
    content.appendChild(appetizers);
    content.appendChild(appetizersList);
    content.appendChild(mainCourses);
    content.appendChild(mainCoursesList);
    content.appendChild(desserts);
    content.appendChild(dessertsList)
});

aboutButton.addEventListener ('click', () => {
    content.replaceChildren();

    content.appendChild(about);
    content.appendChild(aboutText);
});