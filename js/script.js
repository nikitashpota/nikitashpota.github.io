let button = document.getElementById('button');

let navigation = document.getElementById('navigation');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
});