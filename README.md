# burger-restaurant
A full-stack burger eating simulator

Tablecloth form background from: https://cssdeck.com/labs/wqehr26k
Background image from Annie Spratt: https://unsplash.com/photos/KPeGlRjUcJg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink 
Burger Names: https://bobs-burgers.fandom.com/wiki/Burger_of_the_Day 

## Description
This application is a full-stack burger eating tracker/ simulator. The front-end was written using HTML, CSS, JavaScript, and jQuery.  The backend was written using Node.js, Express, and MySQL.  HTML rendering is handled via handlebars.  The application follows the model-view-controller design pattern and uses a custom object relational mapper. 

### Functionality
* Create a new burger
* Eat a burger and move to the devoured list
* Move a burger back to the list to be devoured
* Delete a burger from either list

### NPM Dependencies
* express
* express-handlebars
* mysql

[Link to the repository](https://github.com/pkriengsiri/burger-eater)
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
  
## Installation
From GitHub, fork the repo and upload all contents to the deployed server.  The server must have Node.js installed. Once forked, run 'npm i' from the root directory to install required dependencies.  

Modify the `/config/connection.js` file to connect to your MySQL server.   Run the `schema.sql` and `seeds.sql` files to create the database and populate the table.

## Usage

Fill out the form to add a burger to the "Burgers To Devour" list.

Click on the "Devour" button to move the burger to the "Burgers I've Eaten" list.

Click on the "Eat Again" button to move the burger back to the "Burgers To Devour" list.

Click on the "Delete" button to delete the burger.,

![demo of employee-tracker application](./demo/demo.gif)

[Video demo of the application](https://drive.google.com/file/d/14C_6sO917B9JxrjquNRSR30Se6XTPIIa/view)

## Credits
Collaborators on this project included instructional staff, TAs, and students in the Georgia Tech Coding Boot Camp Winter 2020 cohort.

ASCII artwork generated from https://www.patorjk.com/software/taag/ 

### References
* https://stackoverflow.com/questions/10195451/sql-inner-join-with-3-tables
* https://stackoverflow.com/questions/3709560/joining-three-tables-using-mysql
* https://www.mysqltutorial.org/mysql-self-join/


## License
This application is covered under MIT License

<details>
  <summary>
    License Text
  </summary> 

```

Copyright (c) 2021  Pete Kriengsiri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
</details>


## Contributing
No contributions are being accepted at this time.
  
## Badges
* [![GitHub issues](https://img.shields.io/github/issues/pkriengsiri/employee-tracker)](https://github.com/pkriengsiri/employee-tracker/issues)
* [![GitHub forks](https://img.shields.io/github/forks/pkriengsiri/employee-tracker)](https://github.com/pkriengsiri/employee-tracker/network)
* [![GitHub license](https://img.shields.io/github/license/pkriengsiri/employee-tracker)](https://github.com/pkriengsiri/employee-tracker/blob/main/LICENSE)


## Questions
Contact me via [email](mailto:pkriengsiri@gmail.com).
View my GitHub [profile](https://github.com/pkriengsiri).