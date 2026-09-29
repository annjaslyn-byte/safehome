<img width="1005" height="245" alt="image" src="https://github.com/user-attachments/assets/630c1d39-5fa2-4e22-9b1c-79e23839d0c6" />
# Relational Schema – Hostel Room Allocation System

The **relational schema** defines how the data of the Hostel Room Allocation System is organized into tables and how those tables are connected using **primary keys (PK)** and **foreign keys (FK)**.

The system consists of three main relations:

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

## 1. STUDENTS Relation

The `STUDENTS` table stores the details of students registered in the hostel.

| Attribute    | Description                                        |
| ------------ | -------------------------------------------------- |
| `student_id` | Unique identifier for each student and primary key |
| `name`       | Name of the student                                |
| `department` | Student's academic department                      |
| `year`       | Current academic year                              |
| `created_at` | Date and time when the student record was created  |

`student_id` is the **primary key**, so every student can be uniquely identified.

---

## 2. ROOMS Relation

The `ROOMS` table stores information about the available hostel rooms.

| Attribute    | Description                                         |
| ------------ | --------------------------------------------------- |
| `room_id`    | Unique identifier for each room and primary key     |
| `room_no`    | Hostel room number                                  |
| `capacity`   | Maximum number of students the room can accommodate |
| `occupied`   | Current number of students occupying the room       |
| `created_at` | Date and time when the room record was created      |

`room_id` is the **primary key** of the `ROOMS` relation.

The `capacity` and `occupied` attributes are used to prevent a room from being allocated beyond its available capacity.

---

## 3. ALLOCATIONS Relation

The `ALLOCATIONS` table records the assignment of students to rooms.

| Attribute       | Description                                           |
| --------------- | ----------------------------------------------------- |
| `allocation_id` | Unique identifier for each allocation and primary key |
| `student_id`    | Foreign key referencing `STUDENTS`                    |
| `room_id`       | Foreign key referencing `ROOMS`                       |
| `allocated_at`  | Date and time when the allocation was made            |

The `student_id` and `room_id` attributes are **foreign keys**.

```text
student_id → STUDENTS.student_id
room_id    → ROOMS.room_id
```

This connects each allocation with a specific student and a specific room.

---

## 4. Relationships Between Relations

The `ALLOCATIONS` relation acts as the connecting relation between `STUDENTS` and `ROOMS`.

```text
STUDENTS
   │
   │ student_id
   │
   ▼
ALLOCATIONS
   ▲
   │ room_id
   │
   │
ROOMS
```

Thus:

```text
STUDENTS  1 ─────── N  ALLOCATIONS  N ─────── 1  ROOMS
```

The schema allows the system to store **allocation history** rather than storing room information directly inside the student table.

## 5. Purpose of the Relational Schema

The relational schema provides a structured representation of the hostel data. It ensures that:

* Each student has a unique identifier.
* Each room has a unique identifier.
* Each allocation has a unique identifier.
* Allocations can be linked to students and rooms.
* Room occupancy can be tracked.
* Room capacity can be checked before allocation.
* Allocation history can be maintained.
* Data is separated into logically related entities, reducing unnecessary duplication.
