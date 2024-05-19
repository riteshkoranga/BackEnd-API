- Language used: JavaScript
- Framework used: Express.js
- The code uses the Express framework, which needs to be installed via npm (Node Package Manager). This is done using the command npm install express.

- The IP Address is : 20.244.91.38
- Route : /sayHello
- Port: 80

To Deploy the API on the server/Virtual Machine you need to remotly access the virtual machine,
- Command to access virtual machine remotly: <br>
      ssh -v -u ssh_key username@hostname
  
- Now enter the directory where the API files are copied to using cd command
      - cd directory_name
  
- Check if node is installed:
      - node -version
  
- If not installed install it using command:
      - sudo apt-get install -y nodejs
  
- Check if express.js is installed:
      - npx express --version
        if not installed ,install it using command:
              - npm init -y
              - npm install express
  
- Now run the command:
      - sudo node index.js(or whatever your API file name is)
  
Your Virtual machine should be running on port 80 and you can access it via internet.       

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
