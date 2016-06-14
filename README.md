# METEOR-MEAN-SEO
'meteor-mean-seo' package wrapped for Meteor 1.3.x 

## Longer Version

When a crawler requests the page using the [**\_escaped\_fragment\_**](https://developers.google.com/webmasters/ajax-crawling/docs/specification), the module launches the PhantomJS headless-browser, which creates a copy of the page and stores it in cache for future requests. 

## Quick Install
First you'll need to install the MEAN-SEO module using npm:

	meteor add meteor-mean-seo


You should let npm publish the crawler know you're serving an AJAX application by adding the following to the HEAD tag of your page: Ugly URLs like www.domain.com/#!/whaewer is not supported

	<meta name=”fragment” content=”!”>

## Resources
  - [Google AJAX Application Guide](https://developers.google.com/webmasters/ajax-crawling/docs/specification)


## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
