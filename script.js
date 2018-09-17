  $(document).ready(function($) {
   $('li.fields').filter(':nth-child(n+4)').addClass('hide');

   $('ul').on('click', 'li.title', function(event) {
     event.preventDefault();
     $(this).next().slideDown(300).siblings('li.fields').slideUp(300);
   })
 });

 function validateForm() {
   for (var i = 0; i < myForm.elements.length; i++) {
     if (myForm.elements[i].className == 'req' && myForm.elements[i].value.length == 0) {
       alert('Please fill in all required fields');
       return false;
     }
   }
   
   var email = document.getElementById('email').value;
   var atPosition = email.indexOf('@');
   var dotPosition = email.lastIndexOf('.');
   if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
     alert('Please type a valid email address.')
     return false;
   }

 }