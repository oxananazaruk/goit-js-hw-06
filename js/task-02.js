const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const liArray = ingredients.map(ingredient => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add('item')
  return listElement;
  
});

ingredientsList.append(...liArray);