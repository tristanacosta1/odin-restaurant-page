import "./styles.css";
import odinImage from "./odin.png";
import { content, headline, someText } from "./home.js";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);