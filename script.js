var btn = document.querySelector('#submit');


btn.addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name');
    const value = name.value;
    console.log(value);
});