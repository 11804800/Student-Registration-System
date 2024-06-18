//Initalizing the student information array

//Condition: If Student_Data is present in local storage then parse else return empty array;
const Student_Data = localStorage.getItem("Student_Data")
  ? JSON.parse(localStorage.getItem("Student_Data"))
  : [];

//accessing the add new button from the dom using querySelector

const Add_New_Student_btn = document.querySelector(".Add-new-btn");

//Accesing the student form modal article
const Student_registration_form_modal = document.querySelector(
  "#student-registration-form-article"
);

//Accesing the close button of the form by using querySelector
const Close_Student_btn = document.querySelector("#form-close-btn");

//Adding click event to add_new_student_btn and action will set display to flex for making display none to flex
Add_New_Student_btn.addEventListener("click", () => {
  Student_registration_form_modal.style.display = "flex";
});

//Adding click event to close_student_btn and action will set display to none;
Close_Student_btn.addEventListener("click", () => {
  Student_registration_form_modal.style.display = "none";
});

//This function will render the data from the Student_data Array to the html table;
function RenderStudentData() {
  Student_Data.map((Student) => {
    document.querySelector("#table_body").innerHTML += `<tr key=${
      Student.id
    } id=${Student.id}><td>${Student.id}</td><td>${Student.name}</td><td>${
      Student.email
    }</td><td>${
      Student.contactNo
    }</td><td><button class="edit-btn" >Edit</button>${" "}<button class="Delete-btn" >Delete</button></td></tr>`;
  }).join("");
}

//calling the function
RenderStudentData();

//Creating the function to handle the form submit

const form = document.getElementById("student-register-form");
form.addEventListener("submit", (event) => {
  //   //preventing the default action of the form
  //   event.preventDefault();

  //Accessing all the fields value
  const name = event.target.firstname.value + " " + event.target.lastname.value;
  const id = event.target.studentid.value;
  const email = event.target.email.value;
  const contactNo = event.target.contactno.value;

  //checking if the id already exists in the array
  const index1 = Student_Data.findIndex((item) => item.id === id);
  console.log(index1);
  //if it doesn't exist in the then add it to the array
  if (index1<1) {
    Student_Data.push({
      name: name,
      id: id,
      email: email,
      contactNo: contactNo,
    });
  }
  else
  {
    event.preventDefault();
  }

  localStorage.setItem("Student_Data", JSON.stringify(Student_Data));
});

//-----------------------creating delete function for deleting the student data------------------

//fetching: all the delete buttons from dom

const Delete_btn = document.querySelectorAll(".Delete-btn");

//iterating: through all the delete buttons from the dom
Delete_btn.forEach((Delete_btn) => {
  //adding: click event to all the delete buttons and passing the event
  Delete_btn.addEventListener("click", (event) => {
    //fetching: the id of the element parent of parent of the delete button;
    const id = event.target.parentElement.parentElement.id;

    //fetching: index number of the element from the Student Data array;
    //findIndex:it will return the index number
    //condition :If the element id will match the id present int the table
    const index = Student_Data.findIndex((Student) => Student.id == id);

    //Splice :it will remove the element from the original array ;
    //Passing : Id of the element and 1 means remove only 1 element;
    Student_Data.splice(index, 1);
    //Updating: LocalStorage with new data;
    localStorage.setItem("Student_Data", JSON.stringify(Student_Data));
    //refreshing the browser to make the change visible to the array;
    location.reload();
  });
});

//--------------------creating update/edit function for editing the student data-----------------

//Creating a global variable called index to update the student data
var index=-1;

//fetching: all the edit buttons from dom
const Edit_Btn = document.querySelectorAll(".edit-btn");

const UpdateModal=document.querySelector("#student-record-update-article");
//iterating: through all the edit buttons from the dom
Edit_Btn.forEach((element) => {
  //adding: click event to all the edit buttons and passing the event

  element.addEventListener("click", (event) => {
    //fetching: the id of the element parent of parent of the delete button;
    const id = event.target.parentElement.parentElement.id;

    //fetching: index number of the element from the Student Data array;
    //findIndex:it will return the index number
    //condition :If the element id will match the id present int the table
    index = Student_Data.findIndex((Student) => Student.id == id);


    //Fetching:The From inputs and setting the value
    document.getElementById("firstname1").value = `${Student_Data[index].name.split(" ")[0]}`;
    document.getElementById("lastname1").value = Student_Data[index].name.split(" ")[1];
    document.getElementById("student-id1").value =Student_Data[index].id;
    document.getElementById("student-email1").value = Student_Data[index].email;
    document.getElementById("contactno1").value = Student_Data[index].contactNo;
    UpdateModal.style.display = "flex";

  });
});

//closing the update form 
document.getElementById("edit-form-close-btn").addEventListener("click",()=>{
  UpdateModal.style.display = "none";
});


const UpdateForm=document.getElementById("student-update-form");

//handling the update form submit
UpdateForm.addEventListener("submit",(event)=>{
  
  //Accessing all the fields value
  const name = event.target.firstname1.value + " " + event.target.lastname1.value;
  const id = event.target.studentid1.value;
  const email = event.target.email1.value;
  const contactNo = event.target.contactno1.value;

  Student_Data[index]={
    name: name,
    id: id,
    email: email,
    contactNo: contactNo
  }

  localStorage.setItem("Student_Data", JSON.stringify(Student_Data));
  UpdateModal.style.display = "none";
  index=-1;

});
