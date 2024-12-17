function submitForm() {
    // Collecting form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
  
    // Basic validation functions
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
    }
  
    function validatePhone(phone) {
      const phonePattern = /^[0-9]{10}$/;
      return phonePattern.test(phone);
    }
  
    function validateAddress(address) {
      return address.trim().length > 0;
    }
  
    // Validate email, phone, and address
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!validatePhone(phone)) {
      alert('Please enter a valid phone number (10 digits).');
      return;
    }
  
    if (!validateAddress(address)) {
      alert('Please enter a valid address.');
      return;
    }
  
    // Concatenate address into a single string (if necessary)
    const fullAddress = address.trim();
  
    // Collecting ratings
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);
  
    // Creating a JavaScript object to store the form data
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      fullAddress,
      q1,
      q2,
      q3,
      q4,
      q5
    };
  
    // Calculate the average of the numeric responses
    const average = (q1 + q2 + q3 + q4 + q5) / 5;
  
    // Set the color class based on the average value
    let averageColorClass;
    if (average <= 3.4) {
      averageColorClass = 'color-red';
    } else if (average <= 7.1) {
      averageColorClass = 'color-orange';
    } else {
      averageColorClass = 'color-green';
    }
  
    // Create the output message
    let output = `
      First Name: ${firstName}<br>
      Last Name: ${lastName}<br>
      Email: ${email}<br>
      Phone: ${phone}<br>
      Address: ${fullAddress}<br>
      Q1 (Website Satisfaction): ${q1}<br>
      Q2 (Likelihood to Recommend): ${q2}<br>
      Q3 (User-Friendliness): ${q3}<br>
      Q4 (Content Rating): ${q4}<br>
      Q5 (Likelihood to Visit Again): ${q5}<br>
      Average Rating: <span class="${averageColorClass}">${average.toFixed(2)}</span>
    `;
  
    // Display the result inside the 'result' element in HTML
    document.getElementById('result').innerHTML = output;
  
    // Update the color of the average result text
    const averageTextElement = document.getElementById('averageText');
    averageTextElement.textContent = average.toFixed(2);
    averageTextElement.className = averageColorClass; // Add the class for color
  }
  