CREATE TABLE Assignments (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  dueDate TIMESTAMP NOT NULL,
  teacherId INTEGER NOT NULL
)
