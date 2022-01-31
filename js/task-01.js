// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesEl = document.querySelectorAll('#categories > li.item');

const makeReportCategories = (categories) => {

  const categoriesLength = categories.length;
  console.log("Number of categories:", categoriesLength);

  const subcategoryInformation = categories.forEach(category => {

    const subcategoryName = category.firstElementChild.textContent;
    console.log('Category:', subcategoryName);
    
    const subcategoryLength = category.lastElementChild.children.length;
    console.log('Elements:', subcategoryLength);

    
})}

makeReportCategories(categoriesEl)

