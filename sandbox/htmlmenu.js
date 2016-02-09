'use strict';
/* Requirements

Output A string of HTML containing an anchor tag for each element of menuItems
(with the appropriate href attribute and text content)

 */


function generateMenu (menuItems) {

  let html = "";

  for(var i in menuItems){
    var item = menuItems[i];
    html += '<a href="' + item.url + '">' + item.text + '</a>';
  }

  return html;
};




/* Input */

var inputs = [
  {
    url:"http://www.google.com",
    text:"10^100"
  },
  {
    url:"#codewars",
    text:"codewars"
  },
  {
    url:"#q",
    text:"query"
  },
  {
    url:"#a",
    text:"ans"
  },
  {
    url:"#123",
    text:123
  }
];

generateMenu(inputs);