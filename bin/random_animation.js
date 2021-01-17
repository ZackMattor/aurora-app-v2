// This script generates a random animation frames...

let data = [];
let numPixels = 20;

for(let i=0; i<20; i++) {
  data.push({ r: Math.random(), g: Math.random(), b: Math.random() });
}

console.log(JSON.stringify(data));
