## ComentO

Transform HTML Comments in Markdown documents to JavaScript Objects.


#### A Comment:

```html
\<!--
Title: ComentO
Description: ComentO - Comment to Object
Author: Matt Jordan
-->
```

ComentO will parse each new line in a comment as a Key->Value property.

Each new property's key and vale are separated by a colon (`:`).

After parsing a document, ComentO will return an Object-Literal for use in your app.