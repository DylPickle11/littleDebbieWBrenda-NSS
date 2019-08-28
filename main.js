console.log("yo yo Objects Rock");

const sweetArray = [
  { name:'Apple Delights',
    events: 'Back to School',
    count: 8
  },

  { name: 'Pumpkin Delights',
    events: 'Back to School',
    count: 8
  },
  { name: 'Happy Camper',
    events: 'Summer Time',
    count: 4
  },
]


const createSweetComponent = (item) => {
  return `
    <div>
      <h2>${item.name}</h2>
      <p>${item.events}</p>
      <p>${item.count}</p>
    </div>
    `
}

const sweetContainer = document.querySelector('#container')


//for (let i = 0; i < sweetArray.length; i++) {
  //sweetContainer.innerHTML += createSweetComponent(sweetArray[i]);
 // }

//console.log(createSweetComponent());


sweetArray.forEach(item => {
   sweetContainer.innerHTML += createSweetComponent(item);
});




