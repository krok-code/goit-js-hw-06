const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const fragment = documnet.createDocumentFragment();

ingredients.forEach((ingredients) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredients;

  listItem.classList.add("item");

  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);