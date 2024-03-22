# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no, it creates a new element. if you want to append, you will need to have to append that card to an item that is being returned
- How do you add an element as a child to another element?
  element.appendChild()
- What do you pass as the arguments to the `element.setAttribute()` method?
  setAttribute(attribute, value)
- What steps do you need to take in order to insert a new element into the page?
  create an element wth document.createElement(tag) assign it to a variable name and append it to the body with document.body.append(variabl)
- What is the `textContent` property of an element object for?
  it is the text conent associated with an element.
- Name two ways to set the `class` attribute of a DOM element.
  $elementName.setAttribute('class', 'value';), $domElement.className = 'name'
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  you only need to create the html structure once, and your function can keep creating html structures to the page. You will write less code, debugging, lets you know where to fix something rather than multiple places

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
