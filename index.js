let p = document.querySelector("#password");
let cp = document.querySelector("#confirm-password");
let button = document.querySelector("button");

cp.addEventListener("input", () => {
  if (p.value !== cp.value) {
    cp.setCustomValidity("Passwords do not match.");
  } else {
    cp.setCustomValidity("");
  }
});
