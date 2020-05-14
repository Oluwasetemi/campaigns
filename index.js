const checkboxes = document.querySelectorAll("input[type='checkbox']");

console.log(checkboxes);

const checkboxesArray = Array.from(checkboxes);

checkboxesArray.forEach(checkbox => {
 checkbox.addEventListener('check')

})
