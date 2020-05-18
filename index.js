const checkboxes = document.querySelectorAll("input[type='checkbox']");
const cards = Array.from(document.querySelectorAll('.cause-wrap'));

const checkboxesArray = Array.from(checkboxes);

// store the state of the checkbox
const state = [];

// handle check on
function handleCheck(e) {
  // store the selected in the state
  state.push(e.currentTarget.id);
  cards.forEach(card => {
    // just for one case
    const content = card.querySelector('p').textContent.toLowerCase();
    if (content !== e.currentTarget.id) {
      card.style.display = 'none';
    }
    // check each card and restored the state
    state.forEach(eachState => {
      if (eachState === content) {
        card.style.display = 'block';
      }
    });

    // handle unChecked
    if (!e.target.checked) {
      // the one that was
      // select the card that match the checkbox that was clicked
      if (content === e.currentTarget.id) {
        card.style.display = 'none';
      }
    }
  });
}

checkboxesArray.forEach(checkbox => {
  checkbox.addEventListener('input', handleCheck);
});

// things left to handle - restore the state of data after unchecked ✅
// handle keyboard event ✅
// handleCheck input for multiple ✅
