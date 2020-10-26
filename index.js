const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    let pokeImg =  document.getElementById('pokeImg');
    let pokeNum = document.querySelector('.text-left');

    fetch(url)
    .then(response => response.json())
    .then(data => {
        
          pokeNum.textContent = data['id'];
          pokeImg.src = data['sprites']['front_default']
    })
    .catch(err => console.log(err))
};

getPokemon(150); 

let searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', () => {
    document.getElementById('searchBox').style.display='block';
})

let leftBtn = document.getElementById('left');
leftBtn.addEventListener('click', () => {
    console.log('pressed');
})

let rightBtn = document.getElementById('right');
rightBtn.addEventListener('click', () => {
    console.log('pressed');
})

let upBtn = document.getElementById('up');
upBtn.addEventListener('click', () => {
    console.log('pressed');
})

let returnBtn = document.getElementById('return');
returnBtn.addEventListener('click', () => {
    console.log('pressed');
})
let downBtn = document.getElementById('down');
downBtn.addEventListener('click', () => {
    console.log('pressed');
})
let cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', () => {
    console.log('pressed');
})


