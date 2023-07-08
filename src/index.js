const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  try {
    await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    successMessage.style.display = 'block';
    contactForm.reset();
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000); 
  } catch (error) {
    console.error(error);
  }
});

 

 

