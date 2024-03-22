'use strict';
const $btn = document.querySelector('.click-button');
if (!$btn) throw new Error('The $btn query failed');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$btn.addEventListener('click', handleClick);
const $hover = document.querySelector('.hover-button');
if (!$hover) throw new Error('The $hover query failed');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hover.addEventListener('mouseover', handleMouseover);
const $btnDblClick = document.querySelector('.double-click-button');
if (!$btnDblClick) throw new Error('The $btnDblClick query failed');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$btnDblClick.addEventListener('dblclick', handleDoubleClick);
