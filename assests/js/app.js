const tablebody = document.getElementById('tablebody')
const studentform = document.getElementById('studentform')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const contact = document.getElementById('contact')
const stdtable = document.getElementById('stdtable')
const tablehead = document.getElementById('tablehead')
const nostudent = document.getElementById('nostudent')

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
      result +=`<tr id="${ele.std_id}">
                  <td>${i+1}</td>
                  <td>${ele.fname} ${ele.lname}</td>
                  <td>${ele.email}</td>
                  <td>${ele.contact}</td>
                  <td><i role="button" class="fa-regular fa-pen-to-square fa-2x text-success" onclick ="OnEdit(this)"></i></td>
                  <td><i role="button" class="fa-solid fa-trash text-danger fa-2x"  onclick ="OnRemove(this)"></i></td>
                </tr>`

              
  });


  tablebody.innerHTML =result;
}

function OnRemove(ele){
  let getconfirm = confirm('Are you sure you want to remove the student ?')

  if(getconfirm){
  let removeID = ele.closest('tr').id;

  let index = stdArr.findIndex(ele => ele.std_id == removeID)

  let removeObj = stdArr.splice(index,1);

  ele.closest('tr').remove();

  let trs = document.querySelectorAll('#tablebody tr')

  trs.forEach((ele,i) =>{
    ele.firstElementChild.innerText = i+1;
  })

  Swal.fire({
    title : `The Student ${removeObj[0].fname}  ${removeObj[0].lname} is removed successfully!!!`,
    icon : 'success',
    timer : 3000
  })
  }

  if(stdArr.length == 0){
    tablehead.classList.add('d-none')
    nostudent.classList.remove('d-none')

  }


  
}


function onsubmit(ele){
  ele.preventDefault();
  let newtodo ={
    fname : fname.value,
    lname : lname.value,
    email : email.value,
    contact : contact.value,
    std_id : Date.now().toString()
  }

  stdArr.push(newtodo)
  studentform.reset()
  
  let tr = document.createElement('tr')
  tr.id = newtodo.std_id;
  tr.innerHTML = `<td>${stdArr.length}</td>
                  <td>${newtodo.fname} ${newtodo.lname}</td>
                  <td>${newtodo.email}</td>
                  <td>${newtodo.contact}</td>
                  <td><i role="button" class="fa-regular fa-pen-to-square fa-2x text-success"></i></td>
                  <td><i role="button" class="fa-solid fa-trash text-danger fa-2x"></i></td>`

stdtable.append(tr)

 if(stdArr.length > 0){
    tablehead.classList.remove('d-none')
    nostudent.classList.add('d-none')

  }

Swal.fire({
  title : `The New Student ${newtodo.fname}  ${newtodo.lname} is added successfully !!!`,
  icon : 'success',
  timer:3000

})

}



templating(stdArr);
studentform.addEventListener('submit',onsubmit)