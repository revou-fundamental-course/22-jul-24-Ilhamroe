function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const option = document.getElementById("option").value;

  if (!name) {
    alert("Please enter your name.");
    return false;
  }

  if (!email) {
    alert("Please enter your email address.");
    return false;
  }

  if (!option) {
    alert("Please select an option.");
    return false;
  }

  //  alert success
  alert("Your form has been submitted successfully!");
  return true;
}
