let block = document.querySelector('#block');
let elements = document.querySelectorAll('.element');
let links = document.querySelector('.element__link');

block.addEventListener('click', (e) => {
    let currentTarget = e.target;
    for (let element of elements) {
        element.classList.remove('active');
    }
    currentTarget.classList.add('active')
})

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        links.parentElement.style.backgroundColor = 'green';
        links.parentElement.append(links.getAttribute('href'));
    })
}