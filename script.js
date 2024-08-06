console.log("hello world");

let projectButton = document.getElementById("projectButton");

let projectSection = document.getElementById("projects");

projectButton.addEventListener("click", function () {
  console.log("Project Section");
  projectSection.scrollIntoView({ behavior: "smooth" });
});

let aboutSection = document.getElementById("about");
let aboutButton = document.getElementById("aboutButton");

aboutButton.addEventListener("click", function () {
  console.log("About Section");
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

let contactSection = document.getElementById("contact");
let contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {
  console.log("Contact Section");
  contactSection.scrollIntoView({ behavior: "smooth" });
});

let homeSection = document.getElementById("home");
let homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function () {
  console.log("Home Section");
  homeSection.scrollIntoView({ behavior: "smooth" });
});
