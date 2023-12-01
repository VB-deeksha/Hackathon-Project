// Assuming you have a form with username and password input fields with ids 'username' and 'password'.
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Assuming you have a button with id 'loginButton'.
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', async () => {
  const email = usernameInput.value;
  const password = passwordInput.value;

  try {
    // Make a POST request to the backend for login
    const response = await axios.post('http://localhost:3000/api/login', { email, password });

    // Assuming the backend sends a token upon successful login
    const token = response.data.token;

    // Store the token securely, for example in localStorage
    localStorage.setItem('token', token);

    console.log('Login successful!');
  } catch (error) {
    console.error('Login failed:', error.response.data.error);
  }
});
