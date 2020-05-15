const checkboxes = document.querySelectorAll("input[type='checkbox']");
const cards = Array.from(document.querySelectorAll('.cause-wrap'));
console.log(cards);

console.log(checkboxes);

const checkboxesArray = Array.from(checkboxes);

function handleCheck(e) {
  console.log(e.currentTarget.id);

  cards.forEach(card => {
    const content = card.querySelector('p').textContent.toLowerCase();
    if (content !== e.currentTarget.id) {
      card.style.display = 'none';
    }

    // card.querySelector('p').textContent === e.currentTarget.id
    //   ? (card.style.display = 'block')
    //   : (card.style.display = 'node');
  });
}

checkboxesArray.forEach(checkbox => {
  checkbox.addEventListener('input', handleCheck);
});

// things left to handle - restore the state of data after unchecked
// handle keyboard event
// handleCheck input for multiple
