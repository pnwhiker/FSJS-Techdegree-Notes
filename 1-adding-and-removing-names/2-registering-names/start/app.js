// starter file for RSVP Project

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');


function createLi (text) {
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label')
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);    
    const button = document.createElement('button')
    button.textContent = 'Remove';
    li.appendChild(button);
    return li;

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(input.value);
    const text = input.value;
    input.value = '';   
    
    const li = createLi(text);
    ul.appendChild(li);
})

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }

})

ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    
    if (checked) {
        listItem.className = 'responded'

    } else {
        listItem.className = '';

    }
});