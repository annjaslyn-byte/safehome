import { db } from "../firebase/firebase-config.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const totalRoomsEl = document.getElementById("totalRooms");
const totalStudentsEl = document.getElementById("totalStudents");
const totalAllocationsEl = document.getElementById("totalAllocations");
const vacantRoomsEl = document.getElementById("vacantRooms");

onValue(ref(db, "rooms"), (snapshot) => {
  let totalRooms = 0;
  let vacantRooms = 0;

  snapshot.forEach((child) => {
    totalRooms++;

    const room = child.val();

    if ((room.occupied || 0) < room.capacity) {
      vacantRooms++;
    }
  });

  totalRoomsEl.textContent = totalRooms;
  vacantRoomsEl.textContent = vacantRooms;
});

onValue(ref(db, "students"), (snapshot) => {
  let count = 0;

  snapshot.forEach(() => {
    count++;
  });

  totalStudentsEl.textContent = count;
});

onValue(ref(db, "allocations"), (snapshot) => {
  let count = 0;

  snapshot.forEach(() => {
    count++;
  });

  totalAllocationsEl.textContent = count;
});