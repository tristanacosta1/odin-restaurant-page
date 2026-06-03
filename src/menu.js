import { content } from "./index.js";

const menu = document.createElement("h1");

const appetizers = document.createElement("h2");
const mainCourses = document.createElement("h2");
const desserts = document.createElement("h2");

const appetizersList = document.createElement("ul");
const mainCoursesList = document.createElement("ul");
const dessertsList = document.createElement("ul");

const appetizersItemsOne = document.createElement("li");
const appetizersItemsTwo = document.createElement("li");
const appetizersItemsThree = document.createElement("li");

const mainCoursesItemsOne = document.createElement("li");
const mainCoursesItemsTwo = document.createElement("li");
const mainCoursesItemsThree = document.createElement("li");

const dessertsItemsOne = document.createElement("li");
const dessertsItemsTwo = document.createElement("li");
const dessertsItemsThree = document.createElement("li");

menu.textContent = "Our Menu";

appetizers.textContent = "Appetizers";
mainCourses.textContent = "Main Courses";
desserts.textContent = "Desserts";

appetizersItemsOne.textContent = "Bruschetta";
appetizersItemsTwo.textContent = "Caesar Salad";
appetizersItemsThree.textContent = "Spring Rolls";

mainCoursesItemsOne.textContent = "Grilled Chicken with Rice";
mainCoursesItemsTwo.textContent = "Spaghetti Bolognese";
mainCoursesItemsThree.textContent = "Beef Steak with Mashed Potatoes";

dessertsItemsOne.textContent = "Cheesecake";
dessertsItemsTwo.textContent = "Chocolate Brownie";
dessertsItemsThree.textContent = "Ice Cream Sundae";

appetizersList.appendChild(appetizersItemsOne);
appetizersList.appendChild(appetizersItemsTwo);
appetizersList.appendChild(appetizersItemsThree);

mainCoursesList.appendChild(mainCoursesItemsOne);
mainCoursesList.appendChild(mainCoursesItemsTwo);
mainCoursesList.appendChild(mainCoursesItemsThree);

dessertsList.appendChild(dessertsItemsOne);
dessertsList.appendChild(dessertsItemsTwo);
dessertsList.appendChild(dessertsItemsThree);

export function viewMenu() {
    content.appendChild(menu);
    content.appendChild(appetizers);
    content.appendChild(appetizersList);
    content.appendChild(mainCourses);
    content.appendChild(mainCoursesList);
    content.appendChild(desserts);
    content.appendChild(dessertsList)
}