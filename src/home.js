import { content } from "./index.js";

export const headline = document.createElement("h1");
export const homeText = document.createElement("p");

headline.textContent = "The Odin Restaurant";
homeText.textContent = "The home to the most scrumptious meals in the town.";

export function viewHome () {
    content.appendChild(headline);
    content.appendChild(homeText);
};

