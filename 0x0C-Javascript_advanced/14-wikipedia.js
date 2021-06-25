function createElement(data) {
  const pTag = document.createElement('p');

  pTag.textContent = data;

  document.body.appendChild();
}

function queryWikipedia(callback) {
  const oReq = new XMLHttpRequest();
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'

  oReq.addEventListener("load", callback);
  oReq.open('GET', url);
  oReq.send();
}

queryWikipedia(createElement);
