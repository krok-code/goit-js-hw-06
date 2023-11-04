const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.children;

console.log("Number of categories:", categoryItems.length);

Array.from(categoryItems).forEach((categoryItem) => {
  const categoryName = categoryItem.getElementsByTagName("h2")[0].textContent;
  
  const ulElement = categoryItem.getElementsByTagName("ul")[0];
  
  const categoryElements = ulElement.getElementsByTagName("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
