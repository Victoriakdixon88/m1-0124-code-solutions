const $circle = document.querySelector('#circle');
const $container = document.querySelector('#container');

if (!$circle) throw new Error('missing #circle div element');
if (!$container) throw new Error('missing #container div element');

$circle.addEventListener('click', (event) => {
  const $eventTarget = event.target as HTMLElement;
  if ($eventTarget.className === 'light') {
    $circle.setAttribute('class', 'dark');
    $container.setAttribute('class', 'black');
  } else {
    $circle.setAttribute('class', 'light');
    $container.setAttribute('class', 'white');
  }
});

// notes

// Query our dom and save our elements to variables
// when we are thinking about this, we want to target a specific element we created, when that item is clicked, we want to make something happen in our event listener.
// then we check if these elements exists by throwing an error.
// we want to target circle and add event listener, listen for a click, need our event ? why?????
// we want to turn the bulb off and on, we want to create a variable let isOn = false
// whenever we click on the light, we are going to turn on or off
// let isOn= flase
// $bulb.addEventListerner('click', (e:event)=>
// isOn = !isOn changes from true to false //false true false true, keeps track of your actions/state you want to change
// if (isOn {
// $celing.className = "celing is lit"
// $bulb.className = "bulb is-on"
// else $celing.className = "ceiling"
// when we are creating action/event, we are changing something in the DOM
// when we think about using multiple class names to style, we styled everything in the begining and based off an action, it will change
// the default stylin
// changing an element in general, we need to control the state
// we need to add the classname to use the different css elements
