const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((categoryItems) => {

  const categoryName = categoryItem.querySelector("h2").textContent;

  const categoryElements = categoryItem.querySelectorAll("ul li");

  console.log(`Category: ${categoryname}`);
  console.log(`Elements: ${categoryElements.length}`);
});