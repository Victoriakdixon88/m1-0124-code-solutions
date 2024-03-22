'use strict';
const $contactForm = document.querySelector('#contact-form');
function submitListener(event) {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('message data : ', formObject);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', submitListener);
