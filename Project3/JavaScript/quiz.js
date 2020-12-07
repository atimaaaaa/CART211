
const quiz1 = document.querySelector(`.step1`);
const quiz2 = document.querySelector(`.step2`);
const quiz3 = document.querySelector(`.step3`);
const step2no = document.querySelector(`#step2_no`);
const step2yes = document.querySelector(`#step2_yes`);
const questionChange = document.querySelector(`.change`);
const quizBg = document.querySelector(`.step2`);

//Data for questions
let questionNumber = -1;
//Questions content
const questions = [
  {copy: `Will you wear it again beyond the occasion?`, background: `#F79322`},
  {copy: `Does it work with other pieces in your existing wardrobe?`, background: `#0A3D58`},
  {copy: `Have you wanted it for some time?`, background: `#F79322`},
  {copy: `Do you support capitalism?`, background: `#0A3D58`},
  {copy: `Do you buy products to feel good about yourself?`, background: `#F79322`},
    {copy: `Do you support exploiting workers?`, background: `#0A3D58`}
]

//Question 1
quiz1.onclick = function() {
  quiz1.style.display = `none`;
}

//Question 2 - NO
step2no.onclick = function() {
  quiz2.style.display = `none`;
}

//Question 2 - YES
step2yes.onclick = function() {
  questionNumber = questionNumber + 1;
  if (questionNumber > questions.length) {
    questionNumber = 0;
  }
    update();
  }

  function update() {
    questionChange.innerHTML = questions[questionNumber].copy;
    quizBg.style.background = questions[questionNumber].background;
  }
