const students = [];
const allStudents = [];
const newStudentList = [];
let errorMessage = document.querySelectorAll('h3')[0];


function addStudent() {
    let studentName = document.getElementById('student-input').value;
    let firstMessage = document.getElementById('first-message');
    let numberOfStudent = students.length;
    students.push(studentName);
    allStudents.push(studentName);

    firstMessage.classList.add('none-displaying');

    if (studentName === '') {
        errorMessage.classList.remove('none-displaying')
        errorMessage.innerHTML = 'Please enter a student name'
        errorMessage.style = 'color: red'
        students.splice(students.indexOf('studentName'), 1)

    }
    else if (studentName === studentName.toLowerCase()) {
        errorMessage.classList.remove('none-displaying')
        errorMessage.innerHTML = 'Student name must be start with a capital letter'
        errorMessage.style = 'color: red'
        students.splice(students.indexOf('studentName'), 1)
    }

    else {
        errorMessage.classList.add('none-displaying')
        let index = students.indexOf[studentName];
        numberOfStudent = students.length;
        if (index !== numberOfStudent - 1) {
            index = numberOfStudent - 1
        }
        let studentList = document.getElementsByClassName('student-list');
        studentList[0].innerHTML += `<h1>${index + 1}. ${studentName}</h1>`;
    }
    document.getElementById('student-input').value = '';
}


function deleteStudent() {
    let chosenStudent = document.getElementById('inputStudentName').value;
    let studentList = document.getElementsByClassName('student-list');
    let numberOfStudent = students.length;
    studentList[0].innerHTML = '';

    if (numberOfStudent === 0) {
        errorMessage.classList.remove('none-displaying')
        errorMessage.innerHTML = 'Please, add a student first';
        errorMessage.style = 'color: red';
    }
    else if (chosenStudent === '') {
        errorMessage.classList.remove('none-displaying')
        errorMessage.innerHTML = 'Field cannot be empty'
        errorMessage.style = 'color: red'
    }
    for (let i = 0; i < numberOfStudent; i++) {
        chosenStudent = chosenStudent.toLowerCase()
        studentNameLowerCased = students[i].toLowerCase();
        if (chosenStudent === studentNameLowerCased) {
            errorMessage.classList.add('none-displaying')
            students.splice(i, 1);
            break;
        }
        else {
            errorMessage.classList.remove('none-displaying')
            errorMessage.innerHTML = 'Please enter a valid student name'
            errorMessage.style = 'color: red'
        }

    }
    numberOfStudent = students.length;

    for (let i = 0; i < numberOfStudent; i++) {
        studentList[0].innerHTML += `<h1> ${i + 1}. ${students[i]}</h1>`;
    }
    document.getElementById('inputStudentName').value = '';

}

function sorting() {
    let numberOfStudent = students.length;
    let sortingOption = document.getElementById('selecting').value
    let studentList = document.getElementsByClassName('student-list');
    for (let i=0; i<numberOfStudent; i++) {
        newStudentList[i]= students[i];
    }
    students.sort();
    studentList[0].innerHTML = '';
    if (sortingOption === '1') {
        errorMessage.classList.add('none-displaying')
        for (let i = 0; i < numberOfStudent; i++) {
            studentList[0].innerHTML += `<h1>${i + 1}. ${students[i]}</h1>`;
        }
    }
    else if (sortingOption === '2'){
        errorMessage.classList.add('none-displaying')
        let k = 1;
        for (let i = numberOfStudent-1; i >= 0; i--) {
            studentList[0].innerHTML += `<h1>${k}. ${students[i]}</h1>`;
            k++;
        }
    }
    else if (sortingOption === '3'){
        errorMessage.classList.add('none-displaying')
        for (let i = 0; i < numberOfStudent; i++){
            studentList[0].innerHTML += `<h1>${i + 1}. ${newStudentList[i]}</h1>`;
        }
    }
    else if (sortingOption === '4'){
        errorMessage.classList.add('none-displaying')
        let k = 1;
        for (let i = numberOfStudent-1; i >=0; i--){
            studentList[0].innerHTML += `<h1>${i + 1}. ${newStudentList[i]}</h1>`;
            k++;
        }
    }
    else{
        errorMessage.classList.remove('none-displaying')
        errorMessage.innerHTML = 'Please select a valid option to display'
        errorMessage.style = 'color: red'
    }

}