- Language used: JavaScript
- Framework used: Express.js
- The code uses the Express framework, which needs to be installed via npm (Node Package Manager). This is done using the command npm install express.


  
- Check if node is installed:<br> 
       node --version
  
- If node not installed install it using command:<br>
       sudo apt-get install -y nodejs
  
- Check if express.js is installed:<br>
       npx express --version<br>
  If not installed, install it using command:<br>
               npm init -y<br>
               npm install express
  
- Now clone the repository to the directory you want:<br>
      git clone https://github.com/riteshkoranga/BackEnd-API<br>

  Run:<br>
        sudo node index.js<br>
  The API will be running on the local machine on port 80.

NOTE: Ports below 1024 require elevated privileges to bind on most operating systems. Running this script might require using sudo on Unix-like systems.
      You will have to free the process at port 80 if it is already in use.

You can Access the Backend API via POSTMAN, Web browser, Terminal(linux).

POSTMAN:
- Send a GET request to the folowing address:<br>
    http://localhost/sayHello

Terminal(Linux):
- Access the API with the curl command:<br>
    curl http://localhost/sayHello
  If curl is not installed, install it with command:<br>
    sudo apt update<br>
    sudo apt install curl

Web Browser:
- Access the API via browser, just enter the following address to the search panel.<br>
    http://localhost/sayHello
