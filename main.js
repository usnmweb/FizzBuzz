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

function start() {
  /* inputs value */

  const n = parseInt(document.getElementById("nmax").value);
  const fizz = parseInt(document.getElementById("fizz").value);
  const buzz = parseInt(document.getElementById("buzz").value);
  const lista = document.getElementById("list");
  lista.innerHTML = "";

  let result = calcolator(n, fizz, buzz);
  for (let i = 0; i < result.length; i++) {
    let li = document.createElement("li");
    li.textContent = result[i];

    lista.appendChild(li);
  }
}

window.onload = function () {
  let title = document.title;
  let index = 0;

  setInterval(function () {
    index = (index + 1) % (title.length + 1);
    document.title =
      title.substring(index, title.length) + title.substring(0, index);
  }, 100);
};
