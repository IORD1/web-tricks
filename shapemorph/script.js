const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundeness: 1 },
  { configuration: 1, roundeness: 2 },
  { configuration: 1, roundeness: 4 },
  { configuration: 2, roundeness: 2 },
  { configuration: 2, roundeness: 3 },
  { configuration: 3, roundeness: 3 }
];

let prev = 0;
console.log(wrapper.dataset);

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundeness = combination.roundeness;
  
  prev = index;
}, 3000);


