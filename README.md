### Urlo

A node package to generate url from a string and params

Urlo does just one thing:

```js
var urlo  = require("urlo");
var myUrl = "http://my-awesome-site.com/author/:authorId/posts/:postId";

urlo(myUrl, { authorId: 1, postId: 2, otherParam: "awesome" })
=> 'http://my-awesome-site.com/author/1/posts/2?otherParam=awesome'
```
