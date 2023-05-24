console.log(
    'Rayhaan Khan, Taflynne Summer Petersen, Thabang Kganana, Uthmaan Samsodien'
);

// document.write(
//     'My name is Thabang'
// );

// document.getElementById('name').innerText = 'Javascript, ';

// document.querySelector('#name').textContent = '..I love programming';

function displayContent() {
    document.querySelector('#name').textContent = 'Rayhaan Khan, Taflynne Summer Petersen, Thabang Kganana, Uthmaan Samsodien';

}

let display = document.querySelector('#btn');
display.addEventListener('click', displayContent)

