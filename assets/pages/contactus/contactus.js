document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const region = document.getElementById('region').value;
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value.trim();
  
    if (name && phone && email && message) {
      alert(`Thanks, ${name}! Your message has been sent.`);
      // Clear the form after submission
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill all required fields.');
    }
  });
  