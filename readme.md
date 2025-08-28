## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-getElementById: Selects a single element by its unique ID and it returns an element object or null.

-getElementsByClassName: Selects multiple elements by their class name and returns a live HTML collection.

-querySelector: Selects the first element that matches a specified CSS selector and returns an element object or null.

-querySelectorAll: Selects all the elements that matches a specified CSS selector. It returns a static NodeList.


### How do you create and insert a new element into the DOM?

1. Create: Use document.createElement('tagName').

2. Set properties like textContent or className.
-newElement.textContent = ' ';
-newElement.className = ' ';

3. select an existing element as parent element
- const parent = document.getElementById('container');

4.Insert: Use methods like parentElement.appendChild(newElement)

### What is Event Bubbling and how does it work?
-Event bubbling is the process of an event triggered on a specific element. This first runs on that targeted element, then bubbles up to its parent, and then its parent's parent, and so on to the top section.

### What is Event Delegation in JavaScript? Why is it useful?
- it is a event handling pattern that follows the concept of event bubbling.
it allows to handle event of the top level in the DOM tree than the level where it was received.

## What is the difference between preventDefault() and stopPropagation() methods?
-preventDefault(): Stops the browser's default action for an event.

stopPropagation(): Stops the event from bubbling up to parent elements. It prevents the event from triggering any other further listeners on parent elements.

