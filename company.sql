CREATE TABLE departments (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    dept_name VARCHAR(255));

CREATE TABLE employees (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    dept_id bigint REFERENCES departments (id),
    first_name VARCHAR(255),
    last_name VARCHAR(255));

INSERT INTO departments (dept_name) VALUES
    ('Marketing'), ('Sales'), ('IT'), ('Finance'), ('HR'), ('Purchase');

INSERT INTO employees (dept_id, first_name, last_name) VALUES
    (2, 'Petr', 'Prokhorov'), (2, 'Antonina', 'Semenova'),
    (3, 'Angelina', 'Litvinova'), (5, 'Albert', 'Plotnikov'),
    (4, 'Alexey', 'Tikhonov'), (3, 'Pavel', 'Morozov'),
    (3, 'Yana', 'Emelyanova'), (5, 'Valentina', 'Mironova');
