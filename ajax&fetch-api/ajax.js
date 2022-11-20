const getQuotesBtn = document.getElementById("get-quotes");
const valueInput = document.querySelector("#number");
getQuotesBtn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (valueInput.value == "" || valueInput.value == 0) {
    alert("Enter valid number");
  } else {
    const http = new XMLHttpRequest();
    http.open("GET", "https://type.fit/api/quotes", true);

    http.onload = function () {
      if (this.status === 200) {
        const quotes = shuffle(JSON.parse(this.responseText));
        console.log(this.responseText);
        let result = "";
        for (let i = 0; i < quotes.length; i++) {
          if (i == valueInput.value) break;
          result += `       
        <li>Quote : ${quotes[i].text}</li>
        <li>Author : ${quotes[i].author}</li>
        <hr>
        `;
        }
        document.getElementById("display-quotes").innerHTML = result;
        valueInput.value = "";
      }
    };
    http.send();
  }
}

function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    CI--;
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
