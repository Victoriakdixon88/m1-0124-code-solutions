interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

function submitListener(event: Event): void {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const formObject = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('message data : ', formObject);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submitListener);
