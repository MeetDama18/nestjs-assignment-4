# NestJS Assignment 4: TypeORM, MySQL, Relations & QueryBuilder

A RESTful API built with NestJS, TypeORM, and MySQL demonstrating CRUD operations, data validation with DTOs, entity relationships (One-to-Many), and custom querying using TypeORM QueryBuilder.

---

## Tech Stack
- **Framework:** NestJS
- **ORM:** TypeORM
- **Database:** MySQL (`assignment_db`)
- **Validation:** `class-validator`, `class-transformer`

---

## Deliverables & Testing Screenshots

### Deliverable 1: POST /users (Create User)
- **Endpoint:** `POST /users`
- **Description:** Creates a new user record with auto-increment ID and validation.
<img width="1917" height="1072" alt="Screenshot 2026-09-29 014025" src="https://github.com/user-attachments/assets/5fbcfe49-aa43-466f-b028-6eb4ff385b8b" />

---

### Deliverable 2: GET /users?name=meet (Search Filter)
- **Endpoint:** `GET /users?name=meet`
- **Description:** Retrieves users filtered by name using the `Like` operator.
<img width="1917" height="1072" alt="Screenshot 2026-09-29 014025" src="https://github.com/user-attachments/assets/1e0b4cf7-1298-4231-b9e8-da9b9cc005bc" />

---

### Deliverable 3: GET /posts?title=nestjs (QueryBuilder & Relations)
- **Endpoint:** `GET /posts?title=nestjs`
- **Description:** Uses TypeORM `createQueryBuilder` with `leftJoinAndSelect` to fetch posts matching the title along with the associated user details.
<img width="1917" height="1078" alt="Screenshot 2026-09-30 035633" src="https://github.com/user-attachments/assets/dcb2215a-1b1f-4168-a713-dfbedb021619" />

---

## Setup & Running Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/<your-repo-name>.git
   cd <your-repo-name>
