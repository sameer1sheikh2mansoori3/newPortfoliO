// Add smooth scrolling to nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Change background image dynamically
  const backgroundImages = [
    'background1.jpg',
    'background2.jpg',
    'background3.jpg'
  ];
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
  }
  
  setInterval(changeBackgroundImage, 5000);
  
  // Testimonial Slider
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  let currentTestimonialIndex = 0;
  
  function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function changeTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
    showTestimonial(currentTestimonialIndex);
  }
  
  // Show the first testimonial initially
  showTestimonial(currentTestimonialIndex);
  
  // Change testimonial every 5 seconds
  setInterval(changeTestimonial, 5000);
  
  // Services Pop-up
  const serviceItems = document.querySelectorAll('.service-item');
  
  function showServiceDescription(index) {
    serviceItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  serviceItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      showServiceDescription(index);
    });
  
    item.addEventListener('mouseout', () => {
      showServiceDescription(-1);
    });
  });
  
  // Validate contact form
  const contactForm = document.querySelector('.contact form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const subjectInput = document.querySelector('input[type="text"]');
    const messageInput = document.querySelector('textarea');
  
    if (validateForm(nameInput, emailInput, subjectInput, messageInput)) {
      // Send form data to server or perform other actions
      contactForm.reset();
      alert('Form submitted successfully!');
    }
  });
  
  function validateForm(nameInput, emailInput, subjectInput, messageInput) {
    let isValid = true;
  
    if (nameInput.value.trim() === '') {
      isValid = false;
      showError(nameInput, 'Please enter your name');
    } else {
      removeError(nameInput);
    }
  
    if (emailInput.value.trim() === '') {
      isValid = false;
      showError(emailInput, 'Please enter your email');
    } else if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      showError(emailInput, 'Please enter a valid email');
    } else {
      removeError(emailInput);
    }
  
    if (subjectInput.value.trim() === '') {
      isValid = false;
      showError(subjectInput, 'Please enter the subject');
    } else {
      removeError(subjectInput);
    }
  
    if (messageInput.value.trim() === '') {
      isValid = false;
      showError(messageInput, 'Please enter your message');
    } else {
      removeError(messageInput);
    }
  
    return isValid;
  }
  
  function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement= formControl.querySelector('.error-message');
    errorElement.textContent = message;
    formControl.classList.add('error');
  }
  
  function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error-message');
    errorElement.textContent = '';
    formControl.classList.remove('error');
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  