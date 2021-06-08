# Nodejs Rest API Example Using ExpressJS and PostgreSQL #

Example of REST API for CRUD operation using PostgreSQL database. This API has following features:
- Get records/single record from employees/departments table
- Add record into employees/departments table
- Edit record in employees/departments table
- Delete record from employees/departments table

## Run this app ##
Clone this repo
Create 'company' database in postgreSQL 
To create 'departments' and 'employees' tables run the following command from this app folder:

`psql -f company.sql company`

Then run:

```
npm install
node server
```
