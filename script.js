//Initalizing the student information array
const Student_Data = [
  {
    id: 1,
    name: "Nikhil Pathak",
    email: "nikhil.pathak",
    contactNo: "9876543210",
  },
  {
    id: 2,
    name: "Nikhil Pathak",
    email: "nikhil.pathak",
    contactNo: "9876543210",
  },
  {
    id: 3,
    name: "Nikhil Pathak",
    email: "nikhil.pathak",
    contactNo: "9876543210",
  },
  {
    id: 4,
    name: "Nikhil Pathak",
    email: "nikhil.pathak",
    contactNo: "9876543210",
  },
];

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

function RenderStudentData() {
  Student_Data.map((Student) => {
    (document.querySelector(
      "#table_body"
    ).innerHTML = `<tr key=${Student.id}><td>${Student.id}</td><td>${Student.name}</td><td>${Student.email}</td><td>${Student.contactNo}</td></tr>`);
  }).join('');
}

RenderStudentData();

//Creating the function to handle the form submit

const form = document.getElementById("student-register-form");
form.addEventListener("submit", (event) => {
  //preventing the default action of the form
  event.preventDefault();

  //Accessing all the fields value
  const name = event.target.firstname.value + " " + event.target.lastname.value;
  const id = event.target.studentid.value;
  const email = event.target.email.value;
  const contactNo = event.target.contactno.value;
});
