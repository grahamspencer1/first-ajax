document.addEventListener("DOMContentLoaded", function() {

  var step12Button = document.querySelector('#step12 button');
  var step3456Button = document.querySelector('#step3456 button');
  var step7Button = document.querySelector('#step7 button');
  var step8Button = document.querySelector('#step8 button');
  var step9Button = document.querySelector('#step9 button');

  var section12 = document.querySelector('#step12');
  var section3456 = document.querySelector('#step3456');
  var section7 = document.querySelector('#step7');
  var section8 = document.querySelector('#step8');
  var section9 = document.querySelector('#step9');

  step12Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
    }).done(function (responseData) {
      console.log("Hello world!");
    });
  });

  step3456Button.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
    }).done(function (responseData) {
      console.log(responseData);
      var paragraph = document.createElement('p');
      paragraph.innerText = responseData;
      section3456.append(paragraph);
    }).fail(function() {
      console.log("Request failed.");
      var apology = document.createElement('p');
      apology.innerText = ('Sorry, something go wrongo. Me try coding harder next time.');
      section3456.append(apology);
    }).always(function () {
      console.log('Request finished! Horray!')
    });
  });

  step7Button.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
    }).done(function (responseData) {
      console.log(responseData);
      var counter = document.createElement('p');
      counter.innerText = (responseData);
      section7.append(counter);
    })
  });

});
