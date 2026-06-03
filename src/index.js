import "./styles.css";
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

const content = document.querySelector("#content");
const headline = document.createElement("h1");
const someText = document.createElement("p");

headline.textContent = "The TOP Restaurant";
someText.textContent = "The home to the most scrumptious meals in the town."

content.appendChild(headline);
content.appendChild(someText);