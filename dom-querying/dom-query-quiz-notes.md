# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  - debugging and inspect variables in the browser
- What is a "model"?
- it is a recreation of something. DOM is the recreatin of the document or web page
- Which "document" is being referred to in the phrase Document Object Model?
  -The web page/document we are on.
- What is the word "object" referring to in the phrase Document Object Model?
- The documents(elements) in the document
- What is a DOM Tree?
  -the order of a document defined by DOM with the root node that represents the entire document that branches out to elements and text nodes
- Give two examples of `document` methods that retrieve a single element from the DOM.
  -elem.querySelector(css) getElementById()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  - Make code concise, reuse the variable later. The DOM query requires a search through the entire HTML to find the elements, so it saves time.
- What `console` method allows you to inspect the properties of a DOM element object?
  -console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  -browser needs to parse all of the elements in the HTML page before the javascript code can access them.
- What does `document.querySelector()` take as its argument and what does it return?
  css selector, first element.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  css, node list that matches all elements

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
