<img width="1012" height="667" alt="image" src="https://github.com/user-attachments/assets/cf3766d3-e5f2-497c-a713-314c8fcbe710" />
# ER Diagram – Hostel Room Allocation System

The **Entity-Relationship (ER) diagram** represents the structure of the Hostel Room Allocation System and shows how students, rooms, and allocations are related.

## 1. Student Entity

The **Student** entity stores information about students registered in the hostel system.

**Attributes:**

* `student_id` – Primary key that uniquely identifies each student.
* `name` – Student's name.
* `department` – Student's academic department.
* `year` – Student's current academic year.
* `created_at` – Date and time when the student record was created.

## 2. Room Entity

The **Room** entity stores information about hostel rooms.

**Attributes:**

* `room_id` – Primary key that uniquely identifies each room.
* `room_no` – Hostel room number.
* `capacity` – Maximum number of students the room can accommodate.
* `occupied` – Current number of students occupying the room.
* `created_at` – Date and time when the room was created.

## 3. Allocation Entity

The **Allocation** entity records the assignment of a student to a hostel room.

**Attributes:**

* `allocation_id` – Primary key that uniquely identifies an allocation.
* `student_id` – Foreign key referencing the student.
* `room_id` – Foreign key referencing the room.
* `allocated_at` – Date and time when the room was allocated.

## 4. Relationships

### Student → Allocation

A student can have allocation records associated with them. The `student_id` in the **Allocation** entity references `student_id` in the **Student** entity.

```text
Student (1) ───────── (N) Allocation
```

This means one student can be associated with multiple allocation records over time, allowing the system to maintain allocation history.

### Room → Allocation

A room can appear in multiple allocation records. The `room_id` in the **Allocation** entity references `room_id` in the **Room** entity.

```text
Room (1) ───────── (N) Allocation
```

This allows the system to maintain the history of students who have been assigned to a particular room.

## 5. Overall Relationship

The **Allocation** entity acts as the linking entity between **Student** and **Room**.

```text
Student
   │
   │ 1:N
   ▼
Allocation
   ▲
   │ N:1
   │
 Room
```

Therefore, the system can determine:

* Which room is assigned to a student.
* Which students are assigned to a room.
* When an allocation was made.
* The allocation history of students and rooms.
* Whether a room has reached its maximum capacity.

## 6. Relational Representation

The ER model can be represented using the following relational schema:

```text
STUDENTS(
    student_id PK,
    name,
    department,
    year,
    created_at
)

ROOMS(
    room_id PK,
    room_no,
    capacity,
    occupied,
    created_at
)

ALLOCATIONS(
    allocation_id PK,
    student_id FK → STUDENTS.student_id,
    room_id FK → ROOMS.room_id,
    allocated_at
)
```

The primary keys uniquely identify records, while the foreign keys establish relationships between students, rooms, and allocation records.
