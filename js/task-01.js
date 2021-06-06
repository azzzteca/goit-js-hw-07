const numberOfCategoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategoriesEl.length} категории.`);

numberOfCategoriesEl.forEach (category => {
    const nameCategoryEl = category.querySelector('h2');
    const numberOfDefCategoryEl = category.querySelectorAll('li');
    console.log(`Категория: ${nameCategoryEl.textContent}`);
    console.log(`Количество элементов: ${numberOfDefCategoryEl.length}`)
});



