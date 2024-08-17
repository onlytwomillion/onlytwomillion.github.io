 const form = document.getElementById('loginForm');

       
        const validUsername = "admin";
        const validPassword = "pass1";

        // Messages to display
        const messages = [
            "WELCOME TO 2EM _DRILL",
            "2EM_DRILL THIS YOUR PROGRAMMING AND CODING DASHBOARD"
           
        ];

        // Function to type out text
        function typeText(element, text, callback) {
            let index = 0;
            element.innerHTML = "";
            const interval = setInterval(() => {
                element.innerHTML += text.charAt(index);
                index++;
                if (index > text.length) {
                    clearInterval(interval);
                    if (callback) callback();
                }
            }, 50);
        }

        // Function to cycle through messages
        function cycleMessages() {
            const messageElement = document.getElementById('message');
            let messageIndex = 0;

            function displayNextMessage() {
                typeText(messageElement, messages[messageIndex], () => {
                    setTimeout(() => {
                        messageElement.innerHTML = "";
                        messageIndex = (messageIndex + 1) % messages.length;
                        setTimeout(displayNextMessage, 1000); 
                    }, 5000); 
                });
            }

            displayNextMessage();
        }

       
        window.onload = cycleMessages;

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === validUsername && password === validPassword) {
                window.location.href = "WELCOME.html";
            } else {
                document.getElementById('errorMessage').innerText = "DANGEROUS!! YOU'RE NOT 2EM.";
            }
        });

       
        const yearElement = document.getElementById('year');
        yearElement.textContent = new Date().getFullYear();