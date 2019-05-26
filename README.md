# DBMS_for_images

## Найстройка бд
```
create database imageDB; 
create user 'user-db'@'localhost' identified with mysql_native_password by 'password';
grant all privileges on imageDB.* to 'user-db'@'localhost';
```
