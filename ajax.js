document.addEventListener("DOMContentLoaded", function() {

  var step12Button = document.querySelector('#step12 button');

  step12Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: ______,
      dataType: ______
    });
  });
});
