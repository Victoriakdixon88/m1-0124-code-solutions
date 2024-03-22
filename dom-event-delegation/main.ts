const $taskList = document.querySelector('.task-list');
// id the element that will be given an event listener, it has a class of "task-list"
// select the task.list from the dom and store it in a variable

if (!$taskList) throw new Error('The $taskList query failed');
// throw an error if the variable is null

function doTask(event: Event): void {
  // create a callback function to handle the event of the "click event"
  const $eventTarget = event.target as HTMLElement; // assign the event.target to a variable, event.target finds the element the event is triggered.
  console.log('event.target:', $eventTarget);
  console.log('event.target.tagName:', $eventTarget.tagName);

  if ($eventTarget && $eventTarget.tagName === 'BUTTON') {
    // verifies that the element licked on was a button, it has to be capitalized//
    const $closestElement = $eventTarget.closest('.task-list-item'); // to find the closest li the button was clicked on
    console.log('closet element', $closestElement);
    $closestElement?.remove(); // ? means if $closestElement exist, the remove it.
  }
}

$taskList.addEventListener('click', doTask);
