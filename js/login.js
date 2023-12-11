// async function login() {
//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;

//   const response = await fetch("http://localhost:8000/api/auth/signin", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username: email, password }),
//   });

//   const data = await response.json();

//   if (response.ok) {
//     alert(data.message);
//   } else {
//     alert(data.message);
//   }
// }

// JavaScript
async function login() {
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Clear previous error messages
  document.getElementById("errorMessage").innerHTML = "";

  try {
    const response = await fetch("http://localhost:8000/api/auth/login", {
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
