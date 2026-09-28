import { db } from "../firebase/firebase-config.js";

import {
  ref,
  push,
  remove,
  onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const studentNameInput = document.getElementById("studentName");
const departmentInput = document.getElementById("department");
const yearInput = document.getElementById("year");
const addStudentBtn = document.getElementById("addStudentBtn");
const studentTableBody = document.getElementById("studentTableBody");

const studentsRef = ref(db, "students");

if (addStudentBtn) {
  addStudentBtn.addEventListener("click", () => {
    const studentName = studentNameInput.value.trim();
    const department = departmentInput.value.trim();
    const year = yearInput.value.trim();

    if (!studentName || !department || !year) return;

    push(studentsRef, {
      studentName,
      department,
      year,
      createdAt: Date.now()
    });

    studentNameInput.value = "";
    departmentInput.value = "";
    yearInput.value = "";
  });
}

onValue(studentsRef, (snapshot) => {
  if (!studentTableBody) return;

  studentTableBody.innerHTML = "";

  snapshot.forEach((child) => {
    const student = child.val();
    const key = child.key;

    studentTableBody.innerHTML += `
      <tr>
        <td>${student.studentName}</td>
        <td>${student.department}</td>
        <td>${student.year}</td>
        <td>
          <button class="delete-student" data-id="${key}">
            Delete
          </button>
        </td>
      </tr>
    `;
  });

  document.querySelectorAll(".delete-student").forEach((btn) => {
    btn.addEventListener("click", () => {
      remove(ref(db, `students/${btn.dataset.id}`));
    });
  });
});