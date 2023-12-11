
// JavaScript
async function login() {
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Clear previous error messages
  document.getElementById("errorMessage").innerHTML = "";

  try {
    const response = await fetch("https://erin-difficult-gopher.cyclic.app/api/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: loginUsername, password: loginPassword }),
    });

    const data = await response.json();

    if (response.ok) {
      // Successful login
      alert(data.message);
      // Ke halaman post
      window.location.href = "dashboard.html"
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    document.getElementById("errorMessage").innerHTML = `<p>${error.message}</p>`;
  }
}
