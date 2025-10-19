function checkQuiz() {
  let score = 0;

  // Clear previous styles
  document.querySelectorAll("label").forEach(label => {
    label.classList.remove("correct", "incorrect");
  });

  // Question 1
  const q1Correct = "q1b";
  const q1Options = ["q1a", "q1b", "q1c", "q1d"];
  q1Options.forEach(id => {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    if (input.checked) {
      if (id === q1Correct) {
        label.classList.add("correct");
        score++;
      } else {
        label.classList.add("incorrect");
      }
    }
  });

  // Question 2
  const q2Correct = "q2c";
  const q2Options = ["q2a", "q2b", "q2c", "q2d"];
  q2Options.forEach(id => {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    if (input.checked) {
      if (id === q2Correct) {
        label.classList.add("correct");
        score++;
      } else {
        label.classList.add("incorrect");
      }
    }
  });

  // Question 3
  const q3Correct = ["q3a", "q3b", "q3c"];
  const q3Options = ["q3a", "q3b", "q3c", "q3d"];
  let q3Selected = [];
  q3Options.forEach(id => {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    if (input.checked) {
      q3Selected.push(id);
      if (q3Correct.includes(id)) {
        label.classList.add("correct");
      } else {
        label.classList.add("incorrect");
      }
    }
  });
  const q3FullyCorrect =
    q3Selected.length === q3Correct.length &&
    q3Correct.every(id => q3Selected.includes(id));
  if (q3FullyCorrect) {
    score++;
  } else {
    // Show missed correct answers
    q3Correct.forEach(id => {
      if (!q3Selected.includes(id)) {
        const label = document.querySelector(`label[for="${id}"]`);
        label.classList.add("incorrect");
      }
    });
  }

  // Question 4
  const q4Correct = ["q4a", "q4b", "q4c"];
  const q4Options = ["q4a", "q4b", "q4c", "q4d"];
  let q4Selected = [];
  q4Options.forEach(id => {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    if (input.checked) {
      q4Selected.push(id);
      if (q4Correct.includes(id)) {
        label.classList.add("correct");
      } else {
        label.classList.add("incorrect");
      }
    }
  });
  const q4FullyCorrect =
    q4Selected.length === q4Correct.length &&
    q4Correct.every(id => q4Selected.includes(id));
  if (q4FullyCorrect) {
    score++;
  } else {
    // Show missed correct answers
    q4Correct.forEach(id => {
      if (!q4Selected.includes(id)) {
        const label = document.querySelector(`label[for="${id}"]`);
        label.classList.add("incorrect");
      }
    });
  }

  // Final Score
  document.getElementById("results").innerHTML = "<h3>Score: " + score + "/4</h3>";
}
