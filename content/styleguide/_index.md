---
title: "Style Guide"
description: "A reference for styling elements and components"
draft: false
_build:
  render: true
  list: false
  publishResources: true
---

# Heading Level 1
This is a sample paragraph following a heading level 1.

## Heading Level 2
This is a sample paragraph following a heading level 2.

### Heading Level 3
This is a sample paragraph following a heading level 3.

#### Heading Level 4
This is a sample paragraph following a heading level 4.

##### Heading Level 5
This is a sample paragraph following a heading level 5.

###### Heading Level 6
This is a sample paragraph following a heading level 6.

## Text Formatting

Regular paragraph text looks like this.

**This text is bold** and *this text is italicized*.

~~This text has a strikethrough.~~

> This is a blockquote. It can span multiple lines and is indented to show it's a quote.

## Links

[This is an internal link](/about)

[This is an external link](https://example.com)

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3
  - Nested item 1
  - Nested item 2

### Ordered List
1. First item
2. Second item
3. Third item
   1. Nested item 1
   2. Nested item 2

## Code

Inline `code` looks like this.

```python
# A code block looks like this
def hello_world():
    print("Hello, world!")
```

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Images

![Alt text for image](placeholder.jpg)
## Horizontal Rule

---

## Buttons

<button class="btn">Default Button</button>
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>

## Colors

<div class="flex flex-wrap gap-4 mb-6">
  <div class="w-24 h-24 bg-black flex items-center justify-center text-white">Black</div>
  <div class="w-24 h-24 bg-white border flex items-center justify-center">White</div>
  <div class="w-24 h-24 bg-gray-200 flex items-center justify-center">Gray 200</div>
  <div class="w-24 h-24 bg-gray-500 flex items-center justify-center text-white">Gray 500</div>
  <div class="w-24 h-24 bg-gray-800 flex items-center justify-center text-white">Gray 800</div>
</div>

## Cards

<div class="bg-white p-6 rounded-lg shadow-md mb-6">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="mb-4">This is a sample card with some content. Cards can be used to display grouped information.</p>
  <button class="btn">Learn More</button>
</div>

## Form Elements

<form class="space-y-4 mb-6">
  <div>
    <label for="name" class="block mb-2">Name</label>
    <input type="text" id="name" class="w-full px-3 py-2 border rounded">
  </div>
  
  <div>
    <label for="email" class="block mb-2">Email</label>
    <input type="email" id="email" class="w-full px-3 py-2 border rounded">
  </div>
  
  <div>
    <label for="message" class="block mb-2">Message</label>
    <textarea id="message" rows="4" class="w-full px-3 py-2 border rounded"></textarea>
  </div>
  
  <div>
    <button type="submit" class="btn">Submit</button>
  </div>
</form>