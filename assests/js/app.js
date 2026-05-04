const tablebody = document.getElementById('tablebody')



let stdArr =[
              {
                fname : 'Jhone',
                lname : 'Doe',
                email : 'jhone@gmail.com',
                contact : 7894561232,
                std_id : 'h25632-785469552-8256225f52'
              },
               {
                fname : 'Mary',
                lname : 'Doe',
                email : 'mary@gmail.com',
                contact : 1234567890,
                std_id : 'h25632-785469552-8256225f60'
              },
               {
                fname : 'May',
                lname : 'Doe',
                email : 'may@gmail.com',
                contact : 7754812365,
                std_id : 'h25632-785469552-8256225f652'
              }

]


function templating(arr){
  let result =``
  arr.forEach((ele,i) => {
      result +=`<tr>
                  <td>${i+1}</td>
                  <td>${ele.fname} ${ele.lname}</td>
                  <td>${ele.email}</td>
                  <td>${ele.contact}</td>
                  <td><i role="button" class="fa-regular fa-pen-to-square fa-2x text-success"></i></td>
                  <td><i role="button" class="fa-solid fa-trash text-danger fa-2x"></i></td>
                </tr>`
  });


  tablebody.innerHTML =result;
}


templating(stdArr);