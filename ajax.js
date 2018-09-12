document.addEventListener("DOMContentLoaded", function() {

  var step12Button = document.querySelector('#step12 button');
  var step3456Button = document.querySelector('#step3456 button');
  var section3456 = document.querySelector('#step3456');

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
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      // data: ______,
      // dataType: ______
    }).done(function (responseData) {
      console.log(responseData);
      var paragraph = document.createElement('p');
      paragraph.innerText = responseData;
      section3456.append(paragraph);
    }).fail(function() {
      var apology = document.createElement('p');
      apology.innerText = ('Sorry, something go wrongo. Me try coding harder next timey.');
      section3456.append(apology);
    });
  });

});
