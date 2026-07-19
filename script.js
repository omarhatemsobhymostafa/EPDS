const scoreMap = {
  q1: { 1: 0, 2: 1, 3: 2, 4: 3 },
  q2: { 1: 0, 2: 1, 3: 2, 4: 3 },
  q3: { 1: 3, 2: 2, 3: 1, 4: 0 },
  q4: { 1: 0, 2: 1, 3: 2, 4: 3 },
  q5: { 1: 3, 2: 2, 3: 1, 4: 0 },
  q6: { 1: 3, 2: 2, 3: 1, 4: 0 },
  q7: { 1: 3, 2: 2, 3: 1, 4: 0 },
  q8: { 1: 3, 2: 2, 3: 1, 4: 0 },
  q9: { 1: 3, 2: 2, 3: 1, 4: 0 },
  q10: { 1: 3, 2: 2, 3: 1, 4: 0 },
};

const questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
const maxScore = questions.length * 3;
const form = document.getElementById("quiz-form");
const result = document.getElementById("result");
const notes = document.getElementById("notes");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let total = 0;
  let answered = 0;

  questions.forEach((question) => {
    const selected = document.querySelector(`input[name="${question}"]:checked`);

    if (selected) {
      total += scoreMap[question][selected.value];
      answered += 1;
    }
  });

  if (answered < questions.length) {
    result.textContent = "يرجى الإجابة على جميع الأسئلة قبل حساب الدرجة.";
    notes.hidden = true;
    return;
  }

  const percentage = Math.round((total / maxScore) * 100);
  result.textContent = `الدرجة الكلية: ${total} من ${maxScore}`;
  notes.hidden = false;
});
