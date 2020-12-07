//Initialize the variables

let email = document.querySelector(`#newsletter`).value;
const displayMessage = document.querySelector(`#display`);
const checker = document.querySelector(`.check`);

checker.onclick = function() {
  verify();
}

function verify() {
  email = document.querySelector(`#newsletter`).value;
  // console.log(email);
    if (email === "nikeisthebest@nike.com"){
    displayMessage.textContent = `WELCOME MASTER`;
    }
    else {
      displayMessage.textContent = `NIKE LOVES MONEY`;
    }
  }

// ----------- FAVORITE BUTTON ----------//

let favButton = document.querySelectorAll(`.favorite`);

favButton.forEach(function(change){
  change.addEventListener(`click`, function(){
    this.style.background = `orange`;
  })
});

// ----------- BUY BUTTON ----------//

let buyButton = document.querySelectorAll(`.buy`);

buyButton.forEach(function(message){
  message.addEventListener(`click`, function(){
    this.style.background = `orange`;
    this.style.border = `none`;
    this.textContent = `Thanks for supporting a multinational company!`;
  })
});
