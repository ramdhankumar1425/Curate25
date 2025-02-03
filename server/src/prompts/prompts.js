const {
    MAX_REFINED_PROMPT_LENGTH,
    AVAILABLE_PACKAGES,
    AVAILABLE_IMAGE_SOURCES,
    MAX_TOKENS_ALLOWED,
} = require("../constants/constants");

// const getBuildPrompt = (refined_prompt, project_name) => {
//     return `
//           Your task is to create a Vite React app with following instructions and constraints.

//           Here is the user prompt and project name you need to follow:
//                <user_prompt>
//                     ${refined_prompt}
//                </user_prompt>

//                <project_name>
//                     ${project_name}
//                </project_name>

//           <constraints>
//                CRITICAL: Do NOT be verbose and DO NOT explain anything. Stick to the provided prompt and constraints only.

//                CRITICAL: Response should not exceed ${MAX_TOKENS_ALLOWED} characters in length.

//                CRITICAL: Project must start from 'root' directory and contain 'src' directory inside it.

//                CRITICAL: MUST CREATE 'index.html' in root directory.

//                ULTRA IMPORTANT: Think first and reply with the project that contains all necessary files, directory to run. It is SUPER IMPORTANT to respond with this first.

//                CRITICAL: Must enclose the project json inside <project>...</project> tags. DO NOT USE THESE TAGS IN THE RESPONSE ANYWHERE ELSE.

//                CRITICAL: Third-party libraries and modules cannot be installed or imported. Only use packages ${AVAILABLE_PACKAGES.join(
//                    ", "
//                )}.

//                CRITICAL: Always provide the FULL, updated content of the project. This means:
//                     - Include ALL code, even if parts are unchanged
//                     - NEVER use placeholders like "// rest of the code remains the same..." or "<- leave original code here ->"
//                     - ALWAYS show the complete, up-to-date file contents when updating files
//                     - Avoid any form of truncation or summarization

//                CRITICAL: Must use single template literals to wrap file content as provided in the example.

//                CRITICAL: NEVER use a single quotation (eg. I've, we're, I'll etc.) in the project json.

//                CRITICAL: When using template literal interpolation inside any project file content (e.g., \`\${variable}\`), ensure to prepend a single escape character before the dollar sign, For example, \`\${variable}\`.

//                CRITICAL: Must use Tailwind CSS for styling, must create 'index.css' file in the 'src' directory and import it in 'main.jsx' file.

//                CRITICAL: Use export default for all components and pages to maintain consistency.

//                CRITICAL: Generate all imported pages and components: Ensure every page or component referenced in App.jsx is created. Missing imports should not exist.

//                IMPORTANT: For pages like Contact, Faculty, Resources, etc., use dummy data (placeholder text, images, or content).

//                IMPORTANT: Ensure all generated components and pages are functional, even if they only contain basic placeholder content.

//                ULTRA IMPORTANT: All the generated pages, components must be responsive.

//                ULTRA IMPORTANT: Always provide a user friendly explanation for created website with response inside <explanation>...</explanation> tags.

//                ULTRA IMPORTANT: Must follow this convention, never ever write anything else to 'main.jsx' file except importing 'App.jsx' and rendering. Always write routing logic inside 'App.jsx' only.

//                CRITICAL: You must use 'HashRouter' instead of 'BrowserRouter' for routing.

//                IMPORTANT: Use valid markdown only for all your responses.

//                IMPORTANT: Use coding best practices and split functionality into smaller modules instead of putting everything in a single gigantic file. Files should be as small as possible, and functionality should be extracted into separate modules when possible.
//                     - Ensure code is clean, readable, and maintainable.
//                     - Adhere to proper naming conventions and consistent formatting.
//                     - Split functionality into smaller, reusable modules instead of placing everything in a single large file.
//                     - Keep files as small as possible by extracting related functionalities into separate modules.
//                     - Use imports to connect these modules together effectively.

//                IMPORTANT: Use placeholder images from ${AVAILABLE_IMAGE_SOURCES.join(
//                    ", "
//                )} for images in the project.

//               IMPORTANT: For pages such as Contact, Faculty, Resources, etc., use dummy data. Dummy data can include placeholder text, images, or content.

//               IMPORTANT: The code should be properly formatted and indented.

//               IMPORTANT: We have included 'daisyUI' using CDN in 'index.html'. So use it for ui.
//           </constraints>

//           Here is one example of a correct response format:

//                <example>
//                     <user_prompt>
//                          Create a react starter app with a button component that says "Click me" when clicked.
//                     </user_prompt>

//                     <response>
//                          <project>
//                               {
//                                    "type": "directory",
//                                    "name": "root",
//                                    "children": [
//                                    {
//                                         "type": "directory",
//                                         "name": "src",
//                                         "children": [
//                                              {
//                                                   "type": "file",
//                                                   "name": "index.css",
//                                                   "content": \`@tailwind base;\n@tailwind components;\n@tailwind utilities;\`
//                                              }
//                                              {
//                                                   "type": "file",
//                                                   "name": "main.jsx",
//                                                   "content": \`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\`
//                                              },
//                                              {
//                                                   "type": "file",
//                                                   "name": "App.jsx",
//                                                   "content": \`import React from 'react';\nimport Button from './components/Button';\n\nconst App = () => {\n    return (\n        <div className="w-screen h-screen bg-gray-800">\n            <h1 className="text-3xl text-blue-500">Welcome to the website</h1>\n            <Button />\n        </div>\n    );\n};\n\nexport default App;\`
//                                                       },
//                                              {
//                                                   "type": "directory",
//                                                   "name": "components",
//                                                   "children": [
//                                                        {
//                                                             "type": "file",
//                                                             "name": "Button.jsx",
//                                                             "content": \`import React from 'react';\n\nconst Button = () => {\n    return (\n        <button className="bg-gray-200 text-white px-4 py-2.5 rounded-md hover:bg-gray-300 duration-300" onClick={()=>{alert("Button Clicked!")}}>Click me</button>\n    );\n};\n\nexport default Button;\`
//                                                        }

//                                                   ]
//                                              }
//                                         ]
//                                    },
//                                    {
//                                         "type":"file",
//                                         "name":"index.html",
//                                         "content":\`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>React App</title>\n</head>\n<body>\n <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />\n <script src="https://cdn.tailwindcss.com"></script>\n <div id="root"></div>\n <script type="module" src="/src/main.jsx"></script>\n</body>\n</html>\`
//                                    }
//                                    ]
//                               }
//                          </project>

//                          <explanation>
//                               This website contains a button component that says "Click me" when clicked.
//                               Let me know if you need any adjustments.
//                          </explanation>
//                     </response>

//                </example>
//      `;
// };

const getBuildPrompt = (refined_prompt, project_name) => {
    return `
           Your task is to create a Vite React app with following instructions and constraints.
      
           <constraints>
                CRITICAL: Do NOT be verbose and DO NOT explain anything. Stick to the provided prompt and constraints only.

                CRITICAL: Your response should not exceed ${MAX_TOKENS_ALLOWED} tokens.
 
                CRITICAL: Project must start from 'root' directory and contain 'src' directory inside it.
 
                CRITICAL: MUST CREATE 'index.html' in root directory. And don't change it, just write the provided in the example.
 
                ULTRA IMPORTANT: Think first and reply with the project that contains all necessary files, directory to run. It is SUPER IMPORTANT to respond with this first.
 
                CRITICAL: Must enclose the project json inside <project>...</project> tags. DO NOT USE THESE TAGS IN THE RESPONSE ANYWHERE ELSE.
      
                CRITICAL: Third-party libraries and modules cannot be installed or imported. Only use packages ${AVAILABLE_PACKAGES.join(
                    ", "
                )}.
 
                CRITICAL: Always provide the FULL, updated content of the project. This means:
                     - Include ALL code, even if parts are unchanged
                     - NEVER use placeholders like "// rest of the code remains the same..." or "<- leave original code here ->"
                     - ALWAYS show the complete, up-to-date file contents when updating files
                     - Avoid any form of truncation or summarization
 
                CRITICAL: Must use single template literals to wrap file content as provided in the example.
 
                CRITICAL: NEVER use a single quotation (eg. I've, we're, I'll etc.) in the project json.
 
                CRITICAL: When using template literal interpolation inside any project file content (e.g., \`\${variable}\`), ensure to prepend a single escape character before the dollar sign, For example, \`\${variable}\`.
 
                CRITICAL: Must use Tailwind CSS and daisyUI for styling. Create 'index.css' file in the 'src' directory and import it in 'main.jsx' file.
 
                CRITICAL: Use export default for all components and pages to maintain consistency.

                CRITICAL: For websites related to fitness, health, or wellness,make minimal number of pages and keep the webiste as simple as possible.
 
                ULTRA IMPORTANT: Code Completeness Requirements:
                     - MUST generate ALL imported pages and components that are referenced anywhere in the code.
                     - For pages like About, Contact, Resources etc., MUST include realistic dummy data.
                     - Dummy data should be structured and formatted appropriately for the context.
                     - Use daisyUI components to create professional-looking layouts.
                     - Include appropriate placeholder images from ${AVAILABLE_IMAGE_SOURCES.join(
                         ", "
                     )}
                     - Ensure all text content is properly formatted and styled.
                
                ULTRA IMPORTANT: Responsive Design Requirements:
                     - ALL generated pages and components MUST be responsive
                     - Use Tailwind's responsive classes (sm:, md:, lg:, xl:) appropriately
                     - Test layouts at different breakpoints
                     - Ensure content remains readable and well-organized at all screen sizes
 
                CRITICAL: Routing Requirements:
                     - Use HashRouter instead of BrowserRouter
                     - Keep ALL routing logic inside App.jsx only
                     - main.jsx should ONLY import App.jsx and handle rendering
                     - Ensure all routes have corresponding component files
 
                IMPORTANT: Code Organization:
                     - Split functionality into smaller, focused modules
                     - Maintain a clear directory structure
                     - Keep files small and focused on specific functionality
                     - Use meaningful names for components and files
                     - Follow consistent code formatting and indentation
                     - Implement proper error handling where needed
 
                CRITICAL: UI Framework Requirements:
                     - MUST use daisyUI components from CDN (included in index.html)
                     - Utilize daisyUI's pre-built components for consistent styling
                     - Apply appropriate daisyUI themes and classes
                     - Combine daisyUI with Tailwind utilities for custom styling when needed
 
                ULTRA IMPORTANT: Must provide a user friendly explanation for created website with response inside <explanation>...</explanation> tags.
 
                IMPORTANT: Use valid markdown only for all your responses.
           </constraints>
      
           Here is one example of a correct response format that properly implements these requirements:
      
                <example>
                     <user_prompt>
                          Create a react starter app with a navigation bar and a hero section using daisyUI.
                     </user_prompt>
      
                     <response>
                          <project>
                               {
                                    "type": "directory",
                                    "name": "root",
                                    "children": [
                                    {
                                         "type": "directory",
                                         "name": "src",
                                         "children": [
                                              {
                                                   "type": "file",
                                                   "name": "index.css",
                                                   "content": \`@tailwind base;\n@tailwind components;\n@tailwind utilities;\`
                                              },
                                              {
                                                   "type": "file",
                                                   "name": "main.jsx",
                                                   "content": \`import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\`
                                              },
                                              {
                                                   "type": "file",
                                                   "name": "App.jsx",
                                                   "content": \`import React from 'react';\nimport Navbar from './components/Navbar';\nimport Hero from './components/Hero';\n\nconst App = () => {\n    return (\n        <div className="min-h-screen bg-base-100">\n            <Navbar />\n            <Hero />\n        </div>\n    );\n};\n\nexport default App;\`
                                              },
                                              {
                                                   "type": "directory",
                                                   "name": "components",
                                                   "children": [
                                                        {
                                                             "type": "file",
                                                             "name": "Navbar.jsx",
                                                             "content": \`import React from 'react';\n\nconst Navbar = () => {\n    return (\n        <div className="navbar bg-base-100">\n            <div className="navbar-start">\n                <div className="dropdown">\n                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">\n                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>\n                    </div>\n                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">\n                        <li><a>Home</a></li>\n                        <li><a>About</a></li>\n                        <li><a>Contact</a></li>\n                    </ul>\n                </div>\n                <a className="btn btn-ghost text-xl">My Website</a>\n            </div>\n            <div className="navbar-center hidden lg:flex">\n                <ul className="menu menu-horizontal px-1">\n                    <li><a>Home</a></li>\n                    <li><a>About</a></li>\n                    <li><a>Contact</a></li>\n                </ul>\n            </div>\n        </div>\n    );\n};\n\nexport default Navbar;\`
                                                        },
                                                        {
                                                             "type": "file",
                                                             "name": "Hero.jsx",
                                                             "content": \`import React from 'react';\n\nconst Hero = () => {\n    return (\n        <div className="hero min-h-[500px] bg-base-200">\n            <div className="hero-content text-center">\n                <div className="max-w-md">\n                    <h1 className="text-5xl font-bold">Hello there</h1>\n                    <p className="py-6">Welcome to my website built with React, Tailwind CSS, and daisyUI.</p>\n                    <button className="btn btn-primary">Get Started</button>\n                </div>\n            </div>\n        </div>\n    );\n};\n\nexport default Hero;\`
                                                        }
                                                   ]
                                              }
                                         ]
                                    },
                                    {
                                         "type": "file",
                                         "name": "index.html",
                                         "content": \`<!DOCTYPE html>\n<html lang="en" data-theme="light">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>React App</title>\n  <style>\n @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');\n </style></head>\n<body>\n    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />\n    <script src="https://cdn.tailwindcss.com"></script>\n    <div id="root"></div>\n    <script type="module" src="/src/main.jsx"></script>\n</body>\n</html>\`
                                    }
                                    ]
                               }
                          </project>
 
                          <explanation>
                               This website features a responsive navigation bar with a mobile-friendly hamburger menu and a hero section styled using daisyUI components. The navbar includes dummy links and the hero section contains placeholder content with a call-to-action button.
                          </explanation>
                     </response>
                </example>

          Here is the user prompt and project name you need to follow:
                <user_prompt>
                     ${refined_prompt}
                </user_prompt>
 
                <project_name>
                     ${project_name}
                </project_name>
      `;
};

const getRefinePrompt = (prompt) => {
    return `
          Your task is to evaluate the given prompt for validity, specifically checking if it is related to website creation.
          If the prompt is not valid (not related to a website generation), return <valid_prompt>false</valid_prompt>. Otherwise, return <valid_prompt>true</valid_prompt>.

          If the prompt is valid:

               1. Refine and expand it to make it more detailed and specific.
               2. Suggest a suitable project name enclosed in <project_name>...</project_name>.
               3. Provide the refined prompt inside <refined_prompt>...</refined_prompt> tags.

          The original prompt will be enclosed in <prompt>...</prompt> tags.

          These are some constraints you must follow:
               <constraints>
                    CRITICAL: You must follow the format mentioned here. No additional text, explanation, or formatting should be added.
               
                    IMPORTANT: You should not exceed ${MAX_REFINED_PROMPT_LENGTH} characters in the refined prompt.
               </constraints>
          
          Here are some examples of correct response format:
               <examples>
                    <example>
                         <prompt>Create a website for a local restaurant.</prompt>
                         <valid_prompt>true</valid_prompt>
                         <project_name>Local Restaurant Website</project_name>
                         <refined_prompt>Create a website for a local restaurant that includes a homepage, menu, contact page, and about us page.</refined_prompt>
                    </example>

                    <example>
                         <prompt>Hi, How are you?</prompt>
                         <valid_prompt>false</valid_prompt>
                    </example>
               <examples>
              
          
          Here is the prompt you have to refine:
               <prompt> ${prompt} </prompt>
  `;
};

const getProjectRefinePrompt = (currProject, prompt) => {
    return `
     Your task is to refine the provided website project according to the given prompt:

          Here is the user prompt and and the old project you have to refine:
               <user_prompt>
                    ${prompt}
               </user_prompt>

               <current_project>
                    ${currProject}
               </current_project>

          Here are the constraints you must follow:
               <constraints>
                    CRITICAL: Do NOT be verbose and DO NOT explain anything. Stick to the provided prompt and constraints only.

                    CRITICAL: Your response should not exceed ${MAX_TOKENS_ALLOWED} tokens.

                    CRITICAL: MUST CREATE 'index.html' in root directory. And don't change it, just write the provided in the example.

                    CRITICAL: Project must maintain the root/src directory structure.

                    CRITICAL: Must enclose the project json inside <project>...</project> tags. DO NOT USE THESE TAGS IN THE RESPONSE ANYWHERE ELSE.

                    CRITICAL: MUST CREATE 'index.html' in root directory. And don't change it, just write the provided in the example.
     
                    CRITICAL: Third-party libraries and modules cannot be installed or imported. Only use packages ${AVAILABLE_PACKAGES.join(
                        ", "
                    )}.

                    CRITICAL: Code Completeness Requirements:
                    - MUST preserve ALL existing files unless explicitly changed by the prompt
                    - MUST generate ANY new components or pages that get imported
                    - NO imports should reference non-existent files
                    - When modifying components, ensure they remain fully functional
                    - Use daisyUI components consistently in both existing and new UI elements
                    - Maintain consistent structure and styling patterns

                    CRITICAL: Content Preservation:
                    - Keep existing functionality intact unless specifically asked to change it
                    - Preserve existing routing and navigation structure
                    - Maintain existing data flow and state management
                    - Keep existing dummy data unless changes are requested

                    CRITICAL: Modification Guidelines:
                    - Make only the changes specified in the prompt
                    - When adding new features, match the style of existing code
                    - Maintain consistent naming conventions
                    - Keep the same level of responsiveness
                    - Follow the established project patterns

                    CRITICAL: Always provide the FULL, updated content of the project:
                    - Include ALL code, even if parts are unchanged
                    - NEVER use placeholders like "// rest of the code remains the same..."
                    - ALWAYS show complete file contents
                    - NO truncation or summarization
                    - Keep all existing files and their structure unless explicitly changed

                    CRITICAL: Technical Requirements:
                    - Use template literals with proper escaping for file content
                    - Escape single quotes in strings (I\\'ve, we\\'re, etc.)
                    - Escape template literal interpolation: \`\${variable}\`
                    - Maintain Tailwind CSS and daisyUI styling
                    - Keep routing logic in App.jsx only
                    - Use HashRouter consistently
                    - Export default for all components

                    CRITICAL: UI/UX Requirements:
                    - Maintain responsive design across all modifications
                    - Use daisyUI components from CDN
                    - Ensure consistent styling with existing components
                    - Preserve existing layout structure unless changes are requested
                    - Keep all components mobile-friendly

                    ULTRA IMPORTANT: Must provide a clear explanation of changes made inside <explanation>...</explanation> tags.

                    IMPORTANT: Code Organization:
                    - Keep modular code structure
                    - Maintain clean, readable formatting
                    - Follow project's existing patterns
                    - Use consistent indentation
                    - Keep related code together

                    IMPORTANT: Image and Content Guidelines:
                    - Use placeholder images from ${AVAILABLE_IMAGE_SOURCES.join(
                        ", "
                    )}
                    - Maintain existing dummy data unless changes are needed
                    - Keep content properly formatted and styled
               </constraints>


          Here is one example of a correct response format:
               <example>
                    <user_prompt>
                         Make the click me button more attractive and larger, add hover effects to it.
                    </user_prompt>

                    <current_project>
                         {
                              "type": "directory",
                              "name": "root",
                              "children": [
                                   {
                                        "type": "directory",
                                        "name": "src",
                                        "children": [
                                             {
                                                  "type": "file",
                                                  "name": "index.css",
                                                  "content": \`@tailwind base;\n@tailwind components;\n@tailwind utilities;\` 
                                             }
                                             {
                                                  "type": "file",
                                                  "name": "main.jsx",
                                                  "content": \`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\`
                                             },
                                             {
                                                  "type": "file",
                                                  "name": "App.jsx",
                                                  "content": \`import React from 'react';\nimport Button from './components/Button';\n\nconst App = () => {\n    return (\n        <div className="w-screen h-screen bg-gray-800">\n            <h1 className="text-3xl text-blue-500">Welcome to the website</h1>\n            <Button />\n        </div>\n    );\n};\n\nexport default App;\`
                                                       },
                                             {
                                                  "type": "directory",
                                                  "name": "components",
                                                  "children": [
                                                       {
                                                            "type": "file",
                                                            "name": "Button.jsx",
                                                            "content": \`import React from 'react';\n\nconst Button = () => {\n    return (\n        <button className="bg-gray-200" onClick={()=>{alert("Button Clicked!")}}>Click me</button>\n    );\n};\n\nexport default Button;\`
                                                       }

                                                  ]
                                             }
                                        ]
                                   },
                                   {
                                         "type": "file",
                                         "name": "index.html",
                                         "content": \`<!DOCTYPE html>\n<html lang="en" data-theme="light">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>React App</title>\n  <style>\n @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');\n </style></head>\n<body>\n    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />\n    <script src="https://cdn.tailwindcss.com"></script>\n    <div id="root"></div>\n    <script type="module" src="/src/main.jsx"></script>\n</body>\n</html>\`
                                   }
                              ]
                         } 
                    </current_project>

     
                    <response>
                         <project>
                              {
                                   "type": "directory",
                                   "name": "root",
                                   "children": [
                                   {
                                        "type": "directory",
                                        "name": "src",
                                        "children": [
                                             {
                                                  "type": "file",
                                                  "name": "index.css",
                                                  "content": \`@tailwind base;\n@tailwind components;\n@tailwind utilities;\` 
                                             }
                                             {
                                                  "type": "file",
                                                  "name": "main.jsx",
                                                  "content": \`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\`
                                             },
                                             {
                                                  "type": "file",
                                                  "name": "App.jsx",
                                                  "content": \`import React from 'react';\nimport Button from './components/Button';\n\nconst App = () => {\n    return (\n        <div className="w-screen h-screen bg-gray-800">\n            <h1 className="text-3xl text-blue-500">Welcome to the website</h1>\n            <Button />\n        </div>\n    );\n};\n\nexport default App;\`
                                                      },
                                             {
                                                  "type": "directory",
                                                  "name": "components",
                                                  "children": [
                                                       {
                                                            "type": "file",
                                                            "name": "Button.jsx",
                                                            "content": \`import React from 'react';\n\nconst Button = () => {\n    return (\n        <button className="bg-gray-200 text-white px-6 py-4 text-lg rounded-md hover:bg-gray-300 duration-300 focus:outline focus:outline-blue-500" onClick={()=>{alert("Button Clicked!")}}>Click me</button>\n    );\n};\n\nexport default Button;\`
                                                       }

                                                  ]
                                             }
                                        ]
                                   },
                                   {
                                        "type":"file",
                                        "name":"index.html",
                                        "content":\`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>React App</title>\n</head>\n<body>\n <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />\n <script src="https://cdn.tailwindcss.com"></script>\n <div id="root"></div>\n <script type="module" src="/src/main.jsx"></script>\n</body>\n</html>\`
                                   }
                                   ]
                              }  
                         </project>

                         <explanation>
                              The click me button is now more attractive and larger with hover effects.
                              Let me know if you need any adjustments.
                         </explanation>
                    </response>
               
               </example>
     `;
};
// const getProjectRefinePrompt = (currProject, prompt) => {
//     return `
//      Your task is to refine the provided website project according to the given prompt:

//           Here is the user prompt and and the old project you have to refine:
//                <user_prompt>
//                     ${prompt}
//                </user_prompt>

//                <current_project>
//                     ${currProject}
//                </current_project>

//           Here are the constraints you must follow:
//                <constraints>
//                     CRITICAL: Do NOT be verbose and DO NOT explain anything. Stick to the provided prompt and constraints only.

//                     CRITICAL: Response should not exceed ${MAX_TOKENS_ALLOWED} characters in length.

//                     CRITICAL: Project must start from 'root' directory and contain 'src' directory inside it.

//                     CRITICAL: MUST CREATE 'index.html' in root directory.

//                     ULTRA IMPORTANT: Think first and reply with the project that contains all necessary files, directory to run. It is SUPER IMPORTANT to respond with this first.

//                     CRITICAL: Must enclose the project json inside <project>...</project> tags. DO NOT USE THESE TAGS IN THE RESPONSE ANYWHERE ELSE.

//                     CRITICAL: Third-party libraries and modules cannot be installed or imported. Only use packages ${AVAILABLE_PACKAGES.join(
//                         ", "
//                     )}.

//                     CRITICAL: Always provide the FULL, updated content of the project. This means:
//                          - Include ALL code, even if parts are unchanged
//                          - NEVER use placeholders like "// rest of the code remains the same..." or "<- leave original code here ->"
//                          - ALWAYS show the complete, up-to-date file contents when updating files
//                          - Avoid any form of truncation or summarization

//                     CRITICAL: Must use single template literals to wrap file content as provided in the example.

//                     CRITICAL: If you are using a single quotation (eg. I've, we're, I'll etc.) in the project json, you must use escape character before the single quotation. For example, I\'ve, we\'re, I\'ll etc.

//                     CRITICAL: When using template literal interpolation inside any project file content (e.g., \`\${variable}\`), ensure to prepend a single escape character before the dollar sign, For example, \`\${variable}\`.

//                     CRITICAL: Must use Tailwind CSS for styling, must create 'index.css' file in the 'src' directory and import it in 'main.jsx' file.

//                     ULTRA IMPORTANT: Must follow this convention, never ever write anything else to 'main.jsx' file except importing 'App.jsx' and rendering. Always write routing logic inside 'App.jsx' only.

//                     CRITICAL: You must use 'HashRouter' instead of 'BrowserRouter' for routing.

//                     CRITICAL: Use export default for all components and pages to maintain consistency.

//                     CRITICAL: Generate all imported pages and components: Ensure every page or component referenced in App.jsx is created. Missing imports should not exist.

//                     IMPORTANT: For pages like Contact, Faculty, Resources, etc., use dummy data (placeholder text, images, or content).

//                     IMPORTANT: Ensure all generated components and pages are functional, even if they only contain basic placeholder content.

//                     ULTRA IMPORTANT: All the generated pages, components must be responsive.

//                     ULTRA IMPORTANT: Always provide a user friendly explanation for what you have refined with response inside <explanation>...</explanation> tags.

//                     IMPORTANT: Use valid markdown only for all your responses.

//                     IMPORTANT: Use coding best practices and split functionality into smaller modules instead of putting everything in a single gigantic file. Files should be as small as possible, and functionality should be extracted into separate modules when possible.
//                          - Ensure code is clean, readable, and maintainable.
//                          - Adhere to proper naming conventions and consistent formatting.
//                          - Split functionality into smaller, reusable modules instead of placing everything in a single large file.
//                          - Keep files as small as possible by extracting related functionalities into separate modules.
//                          - Use imports to connect these modules together effectively.

//                     IMPORTANT: Use placeholder images from ${AVAILABLE_IMAGE_SOURCES.join(
//                         ", "
//                     )} for images in the project.

//                     IMPORTANT: For pages such as Contact, Faculty, Resources, etc., use dummy data. Dummy data can include placeholder text, images, or content.

//                     IMPORTANT: The code should be properly formatted and indented.

//                     IMPORTANT: We have included 'daisyUI' using CDN in 'index.html'. So use it for ui.
//                </constraints>

//           Here is one example of a correct response format:
//                <example>
//                     <user_prompt>
//                          Make the click me button more attractive and larger, add hover effects to it.
//                     </user_prompt>

//                     <current_project>
//                          {
//                               "type": "directory",
//                               "name": "root",
//                               "children": [
//                                    {
//                                         "type": "directory",
//                                         "name": "src",
//                                         "children": [
//                                              {
//                                                   "type": "file",
//                                                   "name": "index.css",
//                                                   "content": \`@tailwind base;\n@tailwind components;\n@tailwind utilities;\`
//                                              }
//                                              {
//                                                   "type": "file",
//                                                   "name": "main.jsx",
//                                                   "content": \`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\`
//                                              },
//                                              {
//                                                   "type": "file",
//                                                   "name": "App.jsx",
//                                                   "content": \`import React from 'react';\nimport Button from './components/Button';\n\nconst App = () => {\n    return (\n        <div className="w-screen h-screen bg-gray-800">\n            <h1 className="text-3xl text-blue-500">Welcome to the website</h1>\n            <Button />\n        </div>\n    );\n};\n\nexport default App;\`
//                                                        },
//                                              {
//                                                   "type": "directory",
//                                                   "name": "components",
//                                                   "children": [
//                                                        {
//                                                             "type": "file",
//                                                             "name": "Button.jsx",
//                                                             "content": \`import React from 'react';\n\nconst Button = () => {\n    return (\n        <button className="bg-gray-200" onClick={()=>{alert("Button Clicked!")}}>Click me</button>\n    );\n};\n\nexport default Button;\`
//                                                        }

//                                                   ]
//                                              }
//                                         ]
//                                    },
//                                    {
//                                         "type":"file",
//                                         "name":"index.html",
//                                         "content":\`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>React App</title>\n</head>\n<body>\n <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />\n <script src="https://cdn.tailwindcss.com"></script>\n <div id="root"></div>\n <script type="module" src="/src/main.jsx"></script>\n</body>\n</html>\`
//                                    }
//                               ]
//                          }
//                     </current_project>

//                     <response>
//                          <project>
//                               {
//                                    "type": "directory",
//                                    "name": "root",
//                                    "children": [
//                                    {
//                                         "type": "directory",
//                                         "name": "src",
//                                         "children": [
//                                              {
//                                                   "type": "file",
//                                                   "name": "index.css",
//                                                   "content": \`@tailwind base;\n@tailwind components;\n@tailwind utilities;\`
//                                              }
//                                              {
//                                                   "type": "file",
//                                                   "name": "main.jsx",
//                                                   "content": \`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\`
//                                              },
//                                              {
//                                                   "type": "file",
//                                                   "name": "App.jsx",
//                                                   "content": \`import React from 'react';\nimport Button from './components/Button';\n\nconst App = () => {\n    return (\n        <div className="w-screen h-screen bg-gray-800">\n            <h1 className="text-3xl text-blue-500">Welcome to the website</h1>\n            <Button />\n        </div>\n    );\n};\n\nexport default App;\`
//                                                       },
//                                              {
//                                                   "type": "directory",
//                                                   "name": "components",
//                                                   "children": [
//                                                        {
//                                                             "type": "file",
//                                                             "name": "Button.jsx",
//                                                             "content": \`import React from 'react';\n\nconst Button = () => {\n    return (\n        <button className="bg-gray-200 text-white px-6 py-4 text-lg rounded-md hover:bg-gray-300 duration-300 focus:outline focus:outline-blue-500" onClick={()=>{alert("Button Clicked!")}}>Click me</button>\n    );\n};\n\nexport default Button;\`
//                                                        }

//                                                   ]
//                                              }
//                                         ]
//                                    },
//                                    {
//                                         "type":"file",
//                                         "name":"index.html",
//                                         "content":\`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>React App</title>\n</head>\n<body>\n <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />\n <script src="https://cdn.tailwindcss.com"></script>\n <div id="root"></div>\n <script type="module" src="/src/main.jsx"></script>\n</body>\n</html>\`
//                                    }
//                                    ]
//                               }
//                          </project>

//                          <explanation>
//                               The click me button is now more attractive and larger with hover effects.
//                               Let me know if you need any adjustments.
//                          </explanation>
//                     </response>

//                </example>
//      `;
// };

module.exports = {
    getBuildPrompt,
    getRefinePrompt,
    getProjectRefinePrompt,
};
