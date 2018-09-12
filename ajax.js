document.addEventListener("DOMContentLoaded", function() {

  var step12Button = document.querySelector('#step12 button');
  var step3456Button = document.querySelector('#step3456 button');

  step12Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      // data: ______,
      // dataType: ______
    }).done(function (responseData) {
      console.log("Hello world!");
    });
  });

  step3456Button.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // data: ______,
      // dataType: ______
    }).done(function (responseData) {
      console.log(responseData);
      var paragraph = document.createElement('p');
      var section3456 = document.querySelector('#step3456');
      paragraph.innerText = responseData;
      section3456.append(paragraph);
    });
  });

});
