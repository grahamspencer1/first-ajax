Step 0 #####################################################

1. What HTTP method did your browser use to make the request?

GET request
____________________________________________________________
2. How many milliseconds did it take your browser to complete it?

146.82 ms
____________________________________________________________
3. What HTTP status code did the server return? What does that mean?

200 - Standard response meaning everything went okay
____________________________________________________________
4. Look at the "Initiator" and "Type" columns. Was this an xhr/JavaScript/AJAX request or a normal browser request?

Type - document
Initiator - Other

____________________________________________________________
Step 1 #####################################################

5. What are the values in the "Method" and "Status" columns? Compare these values to Step 0.

Method - GET
Status - 200
Same values
____________________________________________________________
6. What are the values in the "Type" and "Initiator" columns? Compare these values to Step 0.

Type - document
Initiator - Other
Same values

____________________________________________________________
Step 3 #####################################################

3. Click on the request. This displays a detailed view of this one request. Investigate the "Response" and "Preview" sub-tabs. What was the content of the response?

"Wow what a ride! I came all the way from the server!"

____________________________________________________________
Step 4 #####################################################

3. What is the new HTTP status code?

500 (Internal Server Error)

____________________________________________________________
Step 6 #####################################################

2. Switch back and forth between the /ping and /pong URLs, reloading the page and running your request each time. What do you see in your Developer Tools? What messages show up in your console?

PING: network = 200 OK, console = "Wow what a ride! I came all the way from the server!"
PONG: network = 500 error, console = "Request failed."
