import { db } from "../firebase/firebase-config.js";

import {
  ref,
  push,
  onValue,
  get,
  update
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const studentSelect = document.getElementById("studentSelect");
const roomSelect = document.getElementById("roomSelect");
const allocateBtn = document.getElementById("allocateBtn");
const allocationTableBody = document.getElementById("allocationTableBody");

const studentsRef = ref(db, "students");
const roomsRef = ref(db, "rooms");
const allocationsRef = ref(db, "allocations");

onValue(studentsRef, (snapshot) => {
  studentSelect.innerHTML = "";

  snapshot.forEach((child) => {
    const student = child.val();

    studentSelect.innerHTML += `
      <option value="${child.key}">
        ${student.studentName}
      </option>
    `;
  });
});

onValue(roomsRef, (snapshot) => {
  roomSelect.innerHTML = "";

  snapshot.forEach((child) => {
    const room = child.val();

    roomSelect.innerHTML += `
      <option value="${child.key}">
        ${room.roomNo}
      </option>
    `;
  });
});

allocateBtn.addEventListener("click", async () => {
  const studentId = studentSelect.value;
  const roomId = roomSelect.value;

  if (!studentId || !roomId) return;

  const roomSnap = await get(ref(db, `rooms/${roomId}`));

  if (!roomSnap.exists()) return;

  const room = roomSnap.val();

  if (room.occupied >= room.capacity) {
    alert("Room is full");
    return;
  }

  await push(allocationsRef, {
    studentId,
    roomId,
    allocatedAt: new Date().toLocaleString()
  });

  await update(ref(db, `rooms/${roomId}`), {
    occupied: (room.occupied || 0) + 1
  });
});

onValue(allocationsRef, async (snapshot) => {
  allocationTableBody.innerHTML = "";

  const studentsSnap = await get(studentsRef);
  const roomsSnap = await get(roomsRef);

  const students = studentsSnap.val() || {};
  const rooms = roomsSnap.val() || {};

  snapshot.forEach((child) => {
    const allocation = child.val();

    const studentName =
      students[allocation.studentId]?.studentName || "Unknown";

    const roomNo =
      rooms[allocation.roomId]?.roomNo || "Unknown";

    allocationTableBody.innerHTML += `
      <tr>
        <td>${studentName}</td>
        <td>${roomNo}</td>
        <td>${allocation.allocatedAt}</td>
      </tr>
    `;
  });
});