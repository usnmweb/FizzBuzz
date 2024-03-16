/* inputs value */
let n = document
  .getElementById("nmax")
  .addEventListener("change", function (event) {
    console.log("n", event.target.value);
  });

let fizz = document
  .getElementById("fizz")
  .addEventListener("change", function (event) {
    console.log("f", event.target.value);
  });

let buzz = document
  .getElementById("buzz")
  .addEventListener("change", function (event) {
    console.log("b", event.target.value);
  });

let result = calcolator(n, fizz, buzz);

// -------------------------

function calcolator(n, fizz, buzz) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    let word = "";
    if (i % fizz === 0) word += "Fizz";
    if (i % buzz === 0) word += "Buzz";
    arr.push(word ? word : i);
  }
  return arr;
}

const lista = document.getElementById("list");

for (let i = 0; i < result.length; i++) {
  let li = document.createElement("li");
  li.textContent = result[i];

  lista.appendChild(li);
}
