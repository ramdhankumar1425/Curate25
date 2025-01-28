const {
    MAX_REFINED_PROMPT_LENGTH,
    AVAILABLE_PACKAGES,
    AVAILABLE_IMAGE_SOURCES,
} = require("../constants/constants");

const getBuildPrompt = (refined_prompt, project_name) => {
    return `
          Your task is to create a Vite React app with following instructions and constraints.
     
          Here is the user prompt and project name you need to follow:
               <user_prompt>
                    ${refined_prompt}
               </user_prompt>

               <project_name>
                    ${project_name}
               </project_name>
     
          <constraints>
               CRITICAL: Do NOT be verbose and DO NOT explain anything. Stick to the provided prompt and constraints only.

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

               CRITICAL: If you are using a single quotation (eg. I've, we're, I'll etc.) in the project json, you must use escape character before the single quotation. For example, I\'ve, we\'re, I\'ll etc.

               CRITICAL: When using template literal interpolation inside any project file content (e.g., \`\${variable}\`), ensure to prepend a single escape character before the dollar sign, For example, \`\${variable}\`.

               CRITICAL: Must use Tailwind CSS for styling, must create 'index.css' file in the 'src' directory and import it in 'main.jsx' file.

               CRITICAL: Only import components or pages that are explicitly created and included in the current response. Do NOT assume or reference components/pages that are not defined in this response.

               CRITICAL: Must use 'export default' for all components and pages you created.

               ULTRA IMPORTANT: All the generated pages, components must be responsive.

               ULTRA IMPORTANT: Always provide a user friendly explanation for created website with response inside <explanation>...</explanation> tags.

               IMPORTANT: Use valid markdown only for all your responses.
     
               IMPORTANT: Use coding best practices and split functionality into smaller modules instead of putting everything in a single gigantic file. Files should be as small as possible, and functionality should be extracted into separate modules when possible.
                    - Ensure code is clean, readable, and maintainable.
                    - Adhere to proper naming conventions and consistent formatting.
                    - Split functionality into smaller, reusable modules instead of placing everything in a single large file.
                    - Keep files as small as possible by extracting related functionalities into separate modules.
                    - Use imports to connect these modules together effectively.

               IMPORTANT: Use placeholder images from ${AVAILABLE_IMAGE_SOURCES.join(
                   ", "
               )} for images in the project.

              IMPORTANT: For pages such as Contact, Faculty, Resources, etc., use dummy data. Dummy data can include placeholder text, images, or content.

              IMPORTANT: The code should be properly formatted and indented.
          </constraints>
     
          Here is one example of a correct response format:
     
               <example>
                    <user_prompt>
                         Create a react starter app with a button component that says "Click me" when clicked.
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
                                                            "content": \`import React from 'react';\n\nconst Button = () => {\n    return (\n        <button className="bg-gray-200 text-white px-4 py-2.5 rounded-md hover:bg-gray-300 duration-300" onClick={()=>{alert("Button Clicked!")}}>Click me</button>\n    );\n};\n\nexport default Button;\`
                                                       }

                                                  ]
                                             }
                                        ]
                                   }
                                   ]
                              }  
                         </project>

                         <explanation>
                              This website contains a button component that says "Click me" when clicked.
                              Let me know if you need any adjustments.
                         </explanation>
                    </response>
               
               </example>
     `;
};

const getRefinePrompt = (prompt) => {
    return `
          Your task is to evaluate the given prompt for validity, specifically checking if it is related to website creation.
          If the prompt is not valid, return <valid_prompt>false</valid_prompt>. Otherwise, return <valid_prompt>true</valid_prompt>.

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

                    CRITICAL: If you are using a single quotation (eg. I've, we're, I'll etc.) in the project json, you must use escape character before the single quotation. For example, I\'ve, we\'re, I\'ll etc.

                    CRITICAL: When using template literal interpolation inside any project file content (e.g., \`\${variable}\`), ensure to prepend a single escape character before the dollar sign, For example, \`\${variable}\`.

                    CRITICAL: Must use Tailwind CSS for styling, must create 'index.css' file in the 'src' directory and import it in 'main.jsx' file.

                    CRITICAL: Only import components or pages that are explicitly created and included in the current response. Do NOT assume or reference components/pages that are not defined in this response.

                    CRITICAL: Must use 'export default' for all components and pages you created.

                    ULTRA IMPORTANT: All the generated pages, components must be responsive.

                    ULTRA IMPORTANT: Always provide a user friendly explanation for what you have refined with response inside <explanation>...</explanation> tags.

                    IMPORTANT: Use valid markdown only for all your responses.
               
                    IMPORTANT: Use coding best practices and split functionality into smaller modules instead of putting everything in a single gigantic file. Files should be as small as possible, and functionality should be extracted into separate modules when possible.
                         - Ensure code is clean, readable, and maintainable.
                         - Adhere to proper naming conventions and consistent formatting.
                         - Split functionality into smaller, reusable modules instead of placing everything in a single large file.
                         - Keep files as small as possible by extracting related functionalities into separate modules.
                         - Use imports to connect these modules together effectively.

                    IMPORTANT: Use placeholder images from ${AVAILABLE_IMAGE_SOURCES.join(
                        ", "
                    )} for images in the project.

                    IMPORTANT: For pages such as Contact, Faculty, Resources, etc., use dummy data. Dummy data can include placeholder text, images, or content.

                    IMPORTANT: The code should be properly formatted and indented.  
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

module.exports = {
    getBuildPrompt,
    getRefinePrompt,
    getProjectRefinePrompt,
};
