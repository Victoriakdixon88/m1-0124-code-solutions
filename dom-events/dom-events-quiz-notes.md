# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  \*debugging, checking for errors to make sure everything is working properly.
- What is the purpose of events and event handling?

* The purpose of events carry out different interactive functionalities you can incorporate in a web page, and event handlers run a block of code when the event fires.

- Are all possible parameters required to use a JavaScript method or function?

* no they are not.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  \*addEventListener()
- What is a callback function?

* a function passed into another function as an argument, which is invoked inside the outer function to complete some task or action.

- What object is passed into an event listener callback when the event fires?
  \*event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  \*the html element that triggered the event, you can check the console.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick); - callback function is not being called, the function handleClick is being passed as an argument. this is a reference to the function
  ```
  ```js
  element.addEventListener('click', handleClick()); - callback function is being called.
  ```

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
