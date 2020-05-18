const checkboxes = document.querySelectorAll("input[type='checkbox']");
const cards = Array.from(document.querySelectorAll('.cause-wrap'));

const checkboxesArray = Array.from(checkboxes);

// store the state of the checkbox

let state = [];

// handle check on
function handleCheck(e) {
  // store the selected in the state and make sure it is only one entry and unique
  if (e.currentTarget.id && !state.includes(e.currentTarget.id)) {
    state.push(e.currentTarget.id);
  }
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
      // select the card that match the checkbox that was unchecked
      if (content === e.currentTarget.id) {
        card.style.display = 'none';
      }
      // remove the unchecked from the store
      state = state.filter(eachState => eachState === e.currentTarget.id);
    }
  });
}

checkboxesArray.forEach(checkbox => {
  checkbox.addEventListener('input', handleCheck);
});

// things left to handle - restore the state of data after unchecked ✅
// handle keyboard event ✅
// handleCheck input for multiple ✅
