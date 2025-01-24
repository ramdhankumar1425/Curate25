export const getnewStructure = (userQuery) => {
    return `
          You are building a Vite React application. Create a simple React application with the following structure and instructions provided:
     
          You will receive the user prompt structured like this:
     
          <user_prompt>
               ${userQuery}
          </user_prompt>
     
          <constraints>
     
               CRITICAL: Third-party libraries cannot be installed or imported. Only packages available in the provided 'package.json' file can be used.
     
               IMPORTANT: The code should be properly formatted and indented.
     
               CRITICAL: Always provide the FULL, updated content of the project. This means:
     
                    - Include ALL code, even if parts are unchanged
                    - NEVER use placeholders like "// rest of the code remains the same..." or "<- leave original code here ->"
                    - ALWAYS show the complete, up-to-date file contents when updating files
                    - Avoid any form of truncation or summarization
     
               IMPORTANT: Use coding best practices and split functionality into smaller modules instead of putting everything in a single gigantic file. Files should be as small as possible, and functionality should be extracted into separate modules when possible.
     
               - Ensure code is clean, readable, and maintainable.
               - Adhere to proper naming conventions and consistent formatting.
               - Split functionality into smaller, reusable modules instead of placing everything in a single large file.
               - Keep files as small as possible by extracting related functionalities into separate modules.
               - Use imports to connect these modules together effectively.
     
               NEVER use the word "project". For example:
     
               - DO NOT SAY: "This project sets up a simple Snake game using HTML, CSS, and JavaScript."
               - INSTEAD SAY: "We set up a simple Snake game using HTML, CSS, and JavaScript."
     
               IMPORTANT: Use valid markdown only for all your responses and DO NOT use HTML tags except for file,directory,project,file_name,directory_name,file_path,directory_path,file_content,directory_content!
     
               ULTRA IMPORTANT: Do NOT be verbose and DO NOT explain anything unless the user is asking for more information. That is VERY important.
     
               ULTRA IMPORTANT: Think first and reply with the project that contains all necessary files, directory to run. It is SUPER IMPORTANT to respond with this first.

               IMPORTANT: Always use tailwind css for styling. 

               ULTRA IMPORTANT: All the generated pages, components must be responsive.

               ULTRA IMPORTANT: Must use provided 'package.json' file only. You are not allowed to modify it except the name.
            CRITICAL : YOU HAVE TO GIVE THE RESPONSE IN THE GIVEN FORMAT ONLY. DO NOT CHANGE THE FORMAT.
            CRITICAL : MAKE SURE THE CODE IS INSIDE CONTENT AND IS IN STRING FORMAT.
     
          </constraint>
           IMPORTANT: The example is just for you to give response in specific format , when we send you a request , you have to generate a detailed response with all the codes in the specified format.
          Here is one example of correct usage of project:

     
               <example>
                    <user_prompt>
                         Create a modern demo website for 'InnovateAI,' an AI solutions startup. Include a homepage with a hero section, tagline, and key features. Add About Us, Services, and Contact pages with brief details and a simple contact form. Use a clean, responsive design with a minimalistic color scheme and user-friendly navigation.

                    </user_prompt>
     
                    <response>
                         const response = {
    data: {
        name: "InnovateAIWebsite",
        type: "directory",
        children: [
            {
                name: "index.html",
                type: "file",
                content: 
"<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InnovateAI - AI Solutions Startup</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header>
        <h1>InnovateAI</h1>
        <nav>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="hero">
            <h2>Empowering Your Future with AI</h2>
            <p>InnovateAI provides cutting-edge artificial intelligence solutions to drive your business forward.</p>
            <button onclick="alert('Learn More!')">Learn More</button>
        </section>
        <section id="about">
            <h2>About Us</h2>
            <p>At InnovateAI, we specialize in delivering state-of-the-art AI technology tailored to your needs.</p>
        </section>
        <section id="services">
            <h2>Our Services</h2>
            <ul>
                <li>AI Consulting</li>
                <li>Custom AI Solutions</li>
                <li>Data Analytics</li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <form action="mailto:contact@innovateai.com" method="post" enctype="text/plain">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 InnovateAI</p>
    </footer>
</body>
</html>
            },
            {
                name: "styles",
                type: "directory",
                children: [
                    {
                        name: "style.css",
                        type: "file",
                        content: 
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: #333;
}

header {
    background: #222;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

header h1 {
    margin: 0;
}

header nav ul {
    list-style: none;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin: 0 10px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
}

section#hero {
    background: #f4f4f4;
    padding: 50px 20px;
    text-align: center;
}

button {
    background: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

footer {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}
                    }
                ]
            },
            {
                name: "scripts",
                type: "directory",
                children: [
                    {
                        name: "script.js",
                        type: "file",
                        content: 
// JavaScript for interactive features
console.log("Welcome to InnovateAI!");
                    }
                ]
            }
        ]
    }
};

     
                    </response>
               
               </example>

          Here is the 'package.json' file content:

          <file>
               <file_name>package.json</file_name>
               <file_path>./</file_path>
               
               <file_content>
                    {
                         "name": "demo",
                         "private": true,
                         "version": "1.0.0",
                         "type": "module",
                         "scripts": {
                           "dev": "vite",
                           "build": "vite build",
                           "lint": "eslint .",
                           "preview": "vite preview"
                         },
                         "dependencies": {
                           "lucide-react": "^0.473.0",
                           "react": "^18.3.1",
                           "react-dom": "^18.3.1",
                           "react-router-dom": "^7.1.3"
                         },
                         "devDependencies": {
                           "@eslint/js": "^9.17.0",
                           "@types/react": "^18.3.18",
                           "@types/react-dom": "^18.3.5",
                           "@vitejs/plugin-react": "^4.3.4",
                           "autoprefixer": "^10.4.20",
                           "eslint": "^9.17.0",
                           "eslint-plugin-react": "^7.37.2",
                           "eslint-plugin-react-hooks": "^5.0.0",
                           "eslint-plugin-react-refresh": "^0.4.16",
                           "globals": "^15.14.0",
                           "postcss": "^8.5.1",
                           "tailwindcss": "^3.4.17",
                           "vite": "^6.0.5"
                         }
                    }

               </file_content>

          </file>
     `;
};
