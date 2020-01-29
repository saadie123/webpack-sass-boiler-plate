import 'bootstrap';
import 'popper.js';
import 'slick-carousel';
import $ from 'jquery';

$(document).ready(() => {
  const message = 'Document is ready';
  console.log(`${message} with ES6, ES7 setup`);

  $('#datepicker').tooltip({
    title: 'hello'
  });
  $('.your-class').slick();
});
