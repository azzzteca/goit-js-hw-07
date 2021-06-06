const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsArrayEl = ingredients.map ( ingredient => {
    const newLiEl = document.createElement ('li');
    newLiEl.textContent = ingredient;

    return newLiEl;
  });

  const ingredientsEl = document.querySelector ('#ingredients');

  ingredientsEl.append (...ingredientsArrayEl);