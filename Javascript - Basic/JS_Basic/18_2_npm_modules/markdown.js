/**
 * 1. Sử dụng module `markdown` (https://www.npmjs.com/package/markdown) để chuyển đổi đoạn text (viết bằng markdown) sau sang html
 * 2. Tìm hiểu xem markdown là cái gì (dev nên biết về markdown)
 */

var markdownText = 'Hello *Coders.Tokyo*!';

var markdown = require('markdown').markdown;

console.log(markdown.toHTML(markdownText)); //Chuyển sang dạng html 