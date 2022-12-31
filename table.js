
var formSubmit = document.querySelector('.form-Submission')
var afterSubmit = document.querySelector('.after-Submit')

  formSubmit.addEventListener('submit',(eve)=>{
    eve.preventDefault();
    var firstName = document.querySelector('[placeholder="First Name"]').value
    var lastName = document.querySelector('[placeholder="Last Name"]').value
    var address = document.querySelector('[placeholder="Gender"]').value
    var gender = document.querySelector('[placeholder="Address"]').value
    var state = document.querySelector('[placeholder="State"]').value
    var pinCode = document.querySelector('[placeholder="PinCode"]').value
    var country = document.querySelector('[placeholder="Country"]').value

   const arrayOfDetails = [firstName,lastName,address,gender,state,pinCode,country]
  
    if(firstName != '' && lastName != '' && address != '' && gender != '' && state != '' && pinCode != '' && country != ''){

        var table_Row = document.createElement('tr')
        
          for(i=0;i<arrayOfDetails.length;i++){

            var td_data = document.createElement('td')
            td_data.innerText = arrayOfDetails[i]
            table_Row.append(td_data)

            document.querySelector('.table1').style.display = 'block'

            document.querySelector('tbody').append(table_Row)

            formSubmit.reset();

          } 
       
          // afterSubmit.style.display = 'block'
          document.querySelector('.notEmpty').style.display = "none";
 
 } else {
          document.querySelector('.notEmpty').style.display = "block";
          afterSubmit.style.display = "none";
 }    

})                              





