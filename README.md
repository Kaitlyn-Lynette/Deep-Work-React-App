# DeepWorkCoding Logs

https://blooming-wildwood-70669.herokuapp.com/

Create a webpage that allows a user to write an entry using a form and submit that form to keep a log of 
work. 

## Idea Generation

This idea for this project is an evolution of the past two projects I have created using command-line and JQuery as well 
as just JQuery. This application uses React. 

## How it was built

The front-end is simple CSS using a container. 

The back-end was created using json-server to create a REST API with data that was submitted in the form. 
useState and useLocation were hooks primarily used. The useLocation was a new hook that I used for changing the buttons to navigate 
between the pastLogs page to the Go Back page. 

Some of other fun things:
* Converted the form box ino a onClick instead of onChange which allows the user to add the date once clicked.
* A challenge was figuring out how to separate the logs by date. The desired functionality was logs from today would print on the home page and logs from yesterday would print as past logs. To do this I had filter an array of object using the key day. It was new to using filter and map. 



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run server`

Starts the server. 



