const inputEl = document.querySelector("#text");
const convertBtn = document.querySelector("#convert-btn");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const screamingSnakeCase = document.querySelector("#screaming-snake-case");
const kebabCase = document.querySelector("#kebab-case");
const screamingKebabCase = document.querySelector("#screaming-kebab-case");

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputVal = inputEl.value;
  if (inputVal.length >= 1 && inputVal.trim()) {
    camelCase.innerText = camelCaseFn(inputVal);
    pascalCase.innerText = pascalCaseFn(inputVal);
    snakeCase.innerText = snakeCaseFn(inputVal);
    screamingSnakeCase.innerText = screamingSnakeCaseFn(inputVal);
    kebabCase.innerText = kebabCaseFn(inputVal);
    screamingKebabCase.innerText = screamingkebabCaseFn(inputVal);
  } else {
    alert("Enter a valid input");
  }
});

// functions part
function camelCaseFn(val) {
  let temp = val.split(" ");
  let newArr = [];
  for (let i = 0; i < temp.length; i++) {
    if (i === 0) {
      newArr.unshift(
        temp[i].charAt(0).toLowerCase() + temp[i].slice(1).toLowerCase()
      );
    } else {
      newArr.push(
        temp[i].charAt(0).toUpperCase() + temp[i].slice(1).toLowerCase()
      );
    }
  }
  return newArr.join("");
}

function pascalCaseFn(val) {
  let temp = val.split(" ");
  let newArr = [];
  for (let i = 0; i < temp.length; i++) {
    if (i === 0) {
      newArr.unshift(
        temp[i].charAt(0).toUpperCase() + temp[i].slice(1).toLowerCase()
      );
    } else {
      newArr.push(
        temp[i].charAt(0).toUpperCase() + temp[i].slice(1).toLowerCase()
      );
    }
  }
  return newArr.join("");
}

function snakeCaseFn(val) {
  let temp = val.split(" ");
  let newArr = [];
  for (let i = 0; i < temp.length; i++) {
    newArr.push(temp[i].toLowerCase());
  }
  return newArr.join("_");
}

function screamingSnakeCaseFn(val) {
  let temp = val.split(" ");
  let newArr = [];
  for (let i = 0; i < temp.length; i++) {
    newArr.push(temp[i].toUpperCase());
  }
  return newArr.join("_");
}

function kebabCaseFn(val) {
  let temp = val.split(" ");
  let newArr = [];
  for (let i = 0; i < temp.length; i++) {
    newArr.push(temp[i].toLowerCase());
  }
  return newArr.join("-");
}

function screamingkebabCaseFn(val) {
  let temp = val.split(" ");
  let newArr = [];
  for (let i = 0; i < temp.length; i++) {
    newArr.push(temp[i].toUpperCase());
  }
  return newArr.join("-");
}
