const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');

feedbackForm.addEventListener('input', event => {
  const email = emailForm.value;
  const message = messageForm.value;

  const myObject = {
    email: email,
    message: message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(myObject));
});

const savedFeedback = localStorage.getItem('feedback-form-state');
if (savedFeedback !== null) {
  const parsedFeedback = JSON.parse(savedFeedback);
  emailForm.value = parsedFeedback.email;
  messageForm.value = parsedFeedback.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const submittedEmail = emailForm.value;
  const submittedMessage = messageForm.value;

  console.log({
    email: submittedEmail,
    message: submittedMessage,
  });

  emailForm.value = '';
  messageForm.value = '';
});