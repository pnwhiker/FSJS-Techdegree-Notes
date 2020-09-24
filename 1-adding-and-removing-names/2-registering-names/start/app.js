// starter file for RSVP Project

const form = document.getElementById('registrar');
const input = form.querySelector('input');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(input.value);
    const text = input.value;
    const ul = document.getElementById('invitedList');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    input.value = '';
    


})

