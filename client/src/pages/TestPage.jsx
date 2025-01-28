import React, { useEffect, useRef } from "react";
// import Babel from "babel-standalone";
import { transform } from "@babel/standalone";

const reactApp = {
    "main.jsx": `
      import React from 'react';
      import ReactDOM from 'react-dom/client';
    //   import App from './App.jsx';
  
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
    `,
    "App.jsx": `
    //   import React from 'react';
    //   import Header from './components/Header.jsx';
    //   import Footer from './components/Footer.jsx';
  
      const App = () => (
        <div>
          <Header />
          <main><p>Welcome to the dynamically rendered app!</p></main>
          <Footer />
        </div>
      );
  
    //   export default App;
    `,
    "./components/Header.jsx": `
    //   import React from 'react';
      const Header = () => <header><h1>Header</h1></header>;
    //   export default Header;
    `,
    "./components/Footer.jsx": `
    //   import React from 'react';
      const Footer = () => <footer><p>Footer</p></footer>;
    //   export default Footer;
    `,
};

function TestPage() {
    const iframeRef = useRef(null);

    async function renderApp(reactApp, iframe) {
        const reactCDNs = `
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        `;

        // Combine files into one script (to avoid module resolution issues)
        const combinedCode = Object.values(reactApp).join("\n");
        console.log("Combined code:", combinedCode);

        // Transpile the combined code with Babel
        const transpiledCode = await new Promise((resolve) => {
            // const babelScript = document.createElement("script");
            // babelScript.src = babelCDN;
            // babelScript.onload = () => {
            const transpiled = transform(combinedCode, {
                presets: [["env", { modules: false }], "react"],
                sourceType: "module",
            }).code;

            resolve(transpiled);
            // };
            // document.body.appendChild(babelScript);
        });

        console.log("Transpiled code:", transpiledCode);

        // Generate the dynamic HTML
        const htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dynamic React App</title>
            ${reactCDNs}
          </head>
          <body>
            <div id="root"></div>
            <script type="module">
              ${transpiledCode}
            </script>
          </body>
          </html>
        `;

        console.log("HTML content:", htmlContent);

        // Render inside an iframe
        const iframeDoc =
            iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(htmlContent); // Write the dynamic HTML content
        iframeDoc.close();
    }

    useEffect(() => {
        if (iframeRef.current) {
            renderApp(reactApp, iframeRef.current);
        }
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1>Iframe</h1>
            <iframe ref={iframeRef} className="w-3/4 h-3/4 border"></iframe>
        </div>
    );
}

export default TestPage;
