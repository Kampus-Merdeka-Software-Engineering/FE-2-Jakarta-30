
async function register() {
  const first_name = document.getElementById("firstName").value;
  const last_name = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Clear previous error messages
  document.getElementById("errorMessage").innerHTML = "";

  if (password !== confirmPassword) {
    document.getElementById("errorMessage").innerHTML =
      "<p>Passwords do not match</p>";
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/api/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_name, last_name, username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      // Optionally, redirect to a login page or do something else
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    document.getElementById("errorMessage").innerHTML = `<p>${error.message}</p>`;
  }
}

