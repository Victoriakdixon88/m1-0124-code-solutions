const $openModal = document.querySelector('.open-modal');

const $dismissModal = document.querySelector('.dismiss-modal');

const $dialog = document.querySelector('dialog');

if (!$openModal || !$dismissModal || !$dialog)
  throw new Error('The query failed');

// creating a callback function that displays the dialog box
function openModal(): void {
  $dialog?.showModal();
}

// add an event listener to the open-modal button which runs the openModal function when clicked.
$openModal.addEventListener('click', openModal);

// create a callbackfunction that closes the dialog box

function dismissModal(): void {
  $dialog?.close();
}

// add an event listener to the dismiss modal button, which causes the dissmiss modal function to run when clicked.
$dismissModal.addEventListener('click', dismissModal);
