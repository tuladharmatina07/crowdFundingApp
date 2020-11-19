
    function myFunction() {
        function email_number_check() {
          var email = document.getElementById('email').value;
          var phone = document.getElementById('phoneNo').value;
          console.log(email,phone);
          if (email == "" || phone =="") {
              alert("Fill in the Required Fields field cannot be empty");
          }
          else if (isNaN(email) == true) {
  
              var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
              if (reg.test(email) == false ) {
                  alert('Invalid Email Address');
              }
              else {
              $("#fund").submit();
          }
        }
          else if (isNaN(email) == false){
            alert("email no can't be numbers ");
          }
          
          else if (isNaN(phone) == false) {
  
              var reg_mobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  
              if (reg_mobile.test(phone) == false) {
  
                  alert('Invalid mobile');
              }
              else {
                var con = confirm("Please confirm  payment");
               if(con){
                alert("we will send you confimation latter as soon as possible ");
               $("#fund").submit();
  
      }
            }
          }
      }
      email_number_check();
    };
  
  
  