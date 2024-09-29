export function validateSignUp(signUpData) {
  const { name, email, password, confirmPassword } = signUpData;
  let errors = [];

  // Validate name (should not be empty and should be at least 3 characters long)
  if (!name || name.length < 3) {
    errors.push("Name should be at least 3 characters long.");
  }

  // Validate email (basic email format check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate password (should not be empty and should be at least 6 characters long)
  if (!password || password.length < 6) {
    errors.push("Password should be at least 6 characters long.");
  }

  // Validate confirmPassword (should match the password)
  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  // Return errors if there are any, otherwise return null or a success message
  if (errors.length > 0) {
    return { errors: errors, success: false }; // validation failed
  } else {
    return { errors: [], success: true }; // validation passed
  }
}

export function validateLogIn(loginData) {
  const { email, password } = loginData;
  let errors = [];

  // Validate email (basic email format check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate password (should not be empty and should be at least 6 characters long)
  if (!password || password.length < 6) {
    errors.push("Password should be at least 6 characters long.");
  }

  // Return errors if there are any, otherwise return null or a success message
  if (errors.length > 0) {
    return { errors: errors, success: false }; // validation failed
  } else {
    return { errors: [], success: true }; // validation passed
  }
}
