function changeMode(size, weight, transform, background, color) {
  return function () {
    let html = document.querySelector('html');
    let styleStr = 'font-size:' + size + ';'

    styleStr += 'font-weight:' + weight + ';';
    styleStr += 'text-transform:' + transform +';';
    styleStr += 'background-color:' + background + ';';
    styleStr += 'color:' + color + ';';

    html.style = styleStr;
  }
}

function main() {
  /* CLOSURE */
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  /* BUTTONS */
  let spookyBtn = document.createElement('button');
  let darkModeBtn = document.createElement('button');
  let screamModeBtn = document.createElement('button');

  /* PARAGRAPH */
  let WH = 'Welcome Holberton!';
  let pTag = document.createElement('p');
  let body = document.querySelector('body');

  pTag.textContent = WH;
  body.appendChild(pTag);

  spookyBtn.onclick = spooky;
  spookyBtn.textContent = 'Spooky';

  darkModeBtn.onclick = darkMode;
  darkModeBtn.textContent = 'Dark mode';

  screamModeBtn.onclick = screamMode;
  screamModeBtn.textContent = 'Scream mode';


  body.appendChild(spookyBtn);
  body.appendChild(darkModeBtn);
  body.appendChild(screamModeBtn);
}

main();
