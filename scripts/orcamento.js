const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next");
const backBtns = document.querySelectorAll(".back");
const progressSteps = document.querySelectorAll(".progress-step");
const progressLine = document.querySelector(".progress-line");

let currentStep = 0;

function updateForm() {
  steps.forEach(step => step.classList.remove("active"));
  progressSteps.forEach(step => step.classList.remove("active"));

  steps[currentStep].classList.add("active");

  for (let i = 0; i <= currentStep; i++) {
    progressSteps[i].classList.add("active");
  }

  const percent = (currentStep / (progressSteps.length - 1)) * 100;
  progressLine.style.width = percent + "%";
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateForm();
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateForm();
    }
  });
});