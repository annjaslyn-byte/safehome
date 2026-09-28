import { db } from "../firebase/firebase-config.js";

import {
  ref,
  push,
  remove,
  onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const roomNoInput = document.getElementById("roomNo");
const capacityInput = document.getElementById("capacity");
const addRoomBtn = document.getElementById("addRoomBtn");
const roomTableBody = document.getElementById("roomTableBody");

const roomsRef = ref(db, "rooms");

if (addRoomBtn) {
  addRoomBtn.addEventListener("click", () => {
    const roomNo = roomNoInput.value.trim();
    const capacity = parseInt(capacityInput.value);

    if (!roomNo || !capacity) return;

    push(roomsRef, {
      roomNo,
      capacity,
      occupied: 0,
      createdAt: Date.now()
    });

    roomNoInput.value = "";
    capacityInput.value = "";
  });
}

onValue(roomsRef, (snapshot) => {
  if (!roomTableBody) return;

  roomTableBody.innerHTML = "";

  snapshot.forEach((child) => {
    const room = child.val();
    const key = child.key;

    roomTableBody.innerHTML += `
      <tr>
        <td>${room.roomNo}</td>
        <td>${room.capacity}</td>
        <td>${room.occupied}</td>
        <td>
          <button class="delete-room" data-id="${key}">
            Delete
          </button>
        </td>
      </tr>
    `;
  });

  document.querySelectorAll(".delete-room").forEach((btn) => {
    btn.addEventListener("click", () => {
      remove(ref(db, `rooms/${btn.dataset.id}`));
    });
  });
});