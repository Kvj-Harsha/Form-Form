const scriptURL = 'https://script.google.com/macros/s/AKfycbyobeAWZ0vJiKpsuYCW7QVp_NEhJC1QeGhISm2NSs_oL_a7CX1Iq9O9zsC9D_F-zh3N/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message));
});
