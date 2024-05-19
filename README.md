Language used: JavaScript
Framework used: Express.js
- The code uses the Express framework, which needs to be installed via npm (Node Package Manager). This is done using the command npm install express.

The IP Address is : 20.244.91.38
Route : /sayHello
Port: 80

NOTE: Ports below 1024 require elevated privileges to bind on most operating systems. Running this script might require using sudo on Unix-like systems.
      You will have to free the process at port 80 if it is already in use.


You can Access the Backend API via POSTMAN, Web browser, Terminal(linux)

POSTMAN:
- Send a GET request to the folowing address:
    http://20.244.91.38/sayHello

Termianl(Linux):
- Access the API with the curl command:
    curl http://20.244.91.38/sayHello

  If curl is not intalled, install it with command:-
    sudo apt update
    sudo apt install curl

Web Browser
- Access the API via browser, just enter the following address to the search panel.
    http://20.244.91.38/sayHello
