function validateLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return false;
    }
  
    // Additional validation logic if needed
  
    return true;
  }
  function validateRegistrationForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Add more variables for additional fields
  
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      alert('Please fill in all fields.');
      return false;
    }
  
    // Additional validation logic for specific fields (e.g., email format)
  
    return true;
  }
  
  