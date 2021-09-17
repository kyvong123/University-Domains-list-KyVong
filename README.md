## University Domains list-KyVong

# Required

``` bash
node >= 8.9.4
npm > 5.6.0
ng >= 6.1.3  
```

## Front-End :


# Install:
``` bash
Open Front-end Folder :
$ cd Software-sharing-website
$ cd Front-End

Install neccesary source :
$ npm install
```

# Usage
``` bash
Open browser to localhost:4200
$ npm start --o

Open browser with port ***.
$ npm start --o --port ***
Example : Open with port 4273, we run:
$ npm start --o --port 4273

build product
$ ng build
```

## Back-end
```bash
Build environment:
- Open University-Domains-list-KyVong Folder
- Run cmd here
$>env\Scripts\activate

Create Admin:
(env)$>py manage.py createsuperuser createsuperuser
- Type username and password to create user.

Run admin server:
(env)$>django-admin runserver
(In browser search bar):localhost:8000/admin
- Enter username, password
- Create more user here

Run Login feature:
(In browser search bar):localhost:4200/#/login
...       (in process)
