import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { ALLOWED_EDITS } from "../constants/constants";

const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0();

    const [project, setProject] = useState({
        id: "",
        name: "",
        currBundle: ``,
        currCode: {
            type: "directory",
            name: "root",
            children: [
                {
                    type: "directory",
                    name: "src",
                    children: [
                        {
                            type: "file",
                            name: "index.css",
                            content:
                                "@tailwind base;\n@tailwind components;\n@tailwind utilities;",
                        },
                        {
                            type: "file",
                            name: "main.jsx",
                            content:
                                "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './index.css';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
                        },
                        {
                            type: "file",
                            name: "App.jsx",
                            content:
                                "import React from 'react';\nimport { HashRouter as Router, Routes, Route } from 'react-router-dom';\nimport Navbar from './components/Navbar';\nimport Footer from './components/Footer';\nimport Home from './pages/Home';\nimport CalorieTracker from './pages/CalorieTracker';\nimport WorkoutTracker from './pages/WorkoutTracker';\nimport Articles from './pages/Articles';\nimport Login from './pages/Login';\nimport Register from './pages/Register';\n\nconst App = () => {\n  return (\n    <Router>\n      <div className=\"min-h-screen flex flex-col\">\n        <Navbar />\n        <main className=\"flex-grow\">\n          <Routes>\n            <Route path=\"/\" element={<Home />} />\n            <Route path=\"/calorie-tracker\" element={<CalorieTracker />} />\n            <Route path=\"/workout-tracker\" element={<WorkoutTracker />} />\n            <Route path=\"/articles\" element={<Articles />} />\n            <Route path=\"/login\" element={<Login />} />\n            <Route path=\"/register\" element={<Register />} />\n          </Routes>\n        </main>\n        <Footer />\n      </div>\n    </Router>\n  );\n};\n\nexport default App;",
                        },
                        {
                            type: "directory",
                            name: "components",
                            children: [
                                {
                                    type: "file",
                                    name: "Navbar.jsx",
                                    content:
                                        'import React from \'react\';\nimport { Link } from \'react-router-dom\';\n\nconst Navbar = () => {\n  return (\n    <nav data-curate-edit-id="a2e12896-4c19-4bf7-98bc-a8086f324082" className="bg-blue-600 text-white p-4">\n      <div data-curate-edit-id="d45ff359-8fc7-4a6d-8858-3985f695d5cd" className="container mx-auto flex justify-between items-center">\n        <Link data-curate-edit-id="1c85c152-cf9e-4f62-ab24-68d3c906e870" to="/" className="text-2xl font-bold">Fitness Tracker Hub</Link>\n        <div data-curate-edit-id="106030cb-c8aa-475c-88ca-7aefe55d7c1e" className="space-x-4">\n          <Link data-curate-edit-id="05bff659-e410-4ed4-a6d3-6e9aa0de91be" to="/calorie-tracker" className="hover:text-gray-200">Calorie Tracker</Link>\n          <Link data-curate-edit-id="851fa6b1-b8ca-4cb7-a3b2-69710effe22e" to="/workout-tracker" className="hover:text-gray-200">Workout Tracker</Link>\n          <Link data-curate-edit-id="ae80f875-a813-4452-a20d-b869cb298227" to="/articles" className="hover:text-gray-200">Articles</Link>\n          <Link data-curate-edit-id="d70d7834-0bf3-40dd-a8d3-fddbfd8f5b2a" to="/login" className="hover:text-gray-200">Login</Link>\n          <Link data-curate-edit-id="85de4eb8-097a-4388-9baf-1c74aa622df6" to="/register" className="hover:text-gray-200">Register</Link>\n        </div>\n      </div>\n    </nav>\n  );\n};\n\nexport default Navbar;',
                                },
                                {
                                    type: "file",
                                    name: "Footer.jsx",
                                    content:
                                        'import React from \'react\';\n\nconst Footer = () => {\n  return (\n    <footer data-curate-edit-id="21dd5d05-bdd5-412f-a681-f6f71b536d11" className="bg-gray-800 text-white p-4 mt-auto">\n      <div data-curate-edit-id="14e5551b-7739-41a5-9003-4f73e1b81d70" className="container mx-auto text-center">\n        <p data-curate-edit-id="83511233-17a6-40db-a2b2-0f65b5801597">&copy; 2024 Fitness Tracker Hub. All rights reserved.</p>\n      </div>\n    </footer>\n  );\n};\n\nexport default Footer;',
                                },
                            ],
                        },
                        {
                            type: "directory",
                            name: "pages",
                            children: [
                                {
                                    type: "file",
                                    name: "Home.jsx",
                                    content:
                                        'import React from \'react\';\n\nconst Home = () => {\n  return (\n    <div data-curate-edit-id="3ba1d4e3-5229-45a3-b11f-f18aa819b5a3" className="container mx-auto px-4 py-8">\n      <h1 data-curate-edit-id="0b69f870-f35d-49f7-a17b-bddd7d22131a" className="text-4xl font-bold mb-6">Welcome to Fitness Tracker Hub</h1>\n      <div data-curate-edit-id="aae4c949-9cce-4194-821a-9c63ecb29d40" className="grid md:grid-cols-2 gap-8">\n        <div data-curate-edit-id="191b42f6-4219-4a30-80d6-94eb30cff2ef">\n          <img data-curate-edit-id="459971bc-c836-4f29-b518-1152beeaec49" src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg" alt="Fitness" className="rounded-lg w-full" />\n        </div>\n        <div data-curate-edit-id="bb3e84cd-f8e8-46d0-b69f-ce14e395e3ee">\n          <h2 data-curate-edit-id="90b3c37d-9804-434c-9f2a-581fb20a02ca" className="text-2xl font-semibold mb-4">Your Journey to Better Health Starts Here</h2>\n          <p data-curate-edit-id="77d5c3f6-5cca-4b1c-b7c8-7cf404e769ea" className="text-gray-600 mb-4">Track your calories, monitor your workouts, and access valuable fitness resources all in one place.</p>\n          <button data-curate-edit-id="4afca34b-f566-46a4-b5ca-30a685afa1b7" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get Started</button>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default Home;',
                                },
                                {
                                    type: "file",
                                    name: "CalorieTracker.jsx",
                                    content:
                                        'import React, { useState } from \'react\';\n\nconst CalorieTracker = () => {\n  const [calories, setCalories] = useState([]);\n  const [food, setFood] = useState(\'\');\n  const [amount, setAmount] = useState(\'\');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (food && amount) {\n      setCalories([...calories, { food, amount }]);\n      setFood(\'\');\n      setAmount(\'\');\n    }\n  };\n\n  return (\n    <div data-curate-edit-id="56d96a6e-b31e-4102-bdea-85f20a925879" className="container mx-auto px-4 py-8">\n      <h1 data-curate-edit-id="a729c325-c3cb-4e0a-84e8-eb943a6106a4" className="text-3xl font-bold mb-6">Calorie Tracker</h1>\n      <form data-curate-edit-id="7da9f7ee-0162-439e-aa08-aee408c964f9" onSubmit={handleSubmit} className="mb-8">\n        <div data-curate-edit-id="251c522a-b472-4655-a41a-7a60b8551afd" className="flex gap-4">\n          <input data-curate-edit-id="24b149c7-02be-413c-a995-3e76cbce4e2a"\n            type="text"\n            value={food}\n            onChange={(e) => setFood(e.target.value)}\n            placeholder="Food item"\n            className="border p-2 rounded"\n          />\n          <input data-curate-edit-id="b7d0190c-3070-49be-b955-ac198f299f72"\n            type="number"\n            value={amount}\n            onChange={(e) => setAmount(e.target.value)}\n            placeholder="Calories"\n            className="border p-2 rounded"\n          />\n          <button data-curate-edit-id="4d1aec1e-2f07-4c23-a6b1-0bb79e5f335f" type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">\n            Add\n          </button>\n        </div>\n      </form>\n      <div data-curate-edit-id="27b71b44-3c4b-4ebf-9084-2384544df564">\n        {calories.map((item, index) => (\n          <div data-curate-edit-id="d7cb697c-953e-4d5a-9805-70ad1501fdc8" key={index} className="bg-gray-100 p-4 mb-2 rounded">\n            {item.food}: {item.amount} calories\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default CalorieTracker;',
                                },
                                {
                                    type: "file",
                                    name: "WorkoutTracker.jsx",
                                    content:
                                        'import React, { useState } from \'react\';\n\nconst WorkoutTracker = () => {\n  const [workouts, setWorkouts] = useState([]);\n  const [exercise, setExercise] = useState(\'\');\n  const [sets, setSets] = useState(\'\');\n  const [reps, setReps] = useState(\'\');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (exercise && sets && reps) {\n      setWorkouts([...workouts, { exercise, sets, reps }]);\n      setExercise(\'\');\n      setSets(\'\');\n      setReps(\'\');\n    }\n  };\n\n  return (\n    <div data-curate-edit-id="1bbc0b1c-2dcf-44c0-a4fc-40b215410e5b" className="container mx-auto px-4 py-8">\n      <h1 data-curate-edit-id="205aa122-8b35-48c7-969c-9ca3563a0158" className="text-3xl font-bold mb-6">Workout Tracker</h1>\n      <form data-curate-edit-id="8752be59-b9a8-435b-85cb-ab56295e502f" onSubmit={handleSubmit} className="mb-8">\n        <div data-curate-edit-id="71f7531f-7c0b-41d7-bfbc-5bdab4abbb3f" className="flex gap-4">\n          <input data-curate-edit-id="07032514-a2af-46d8-850a-f9f4e238d922"\n            type="text"\n            value={exercise}\n            onChange={(e) => setExercise(e.target.value)}\n            placeholder="Exercise"\n            className="border p-2 rounded"\n          />\n          <input data-curate-edit-id="00edf228-d6b9-4c59-af6a-aa15950dfbf1"\n            type="number"\n            value={sets}\n            onChange={(e) => setSets(e.target.value)}\n            placeholder="Sets"\n            className="border p-2 rounded"\n          />\n          <input data-curate-edit-id="1bdac731-6e1c-4705-853c-c49f64ee6783"\n            type="number"\n            value={reps}\n            onChange={(e) => setReps(e.target.value)}\n            placeholder="Reps"\n            className="border p-2 rounded"\n          />\n          <button data-curate-edit-id="cbe80da6-e343-48ff-8ddf-f85bc8c60137" type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">\n            Add\n          </button>\n        </div>\n      </form>\n      <div data-curate-edit-id="86c09cef-d05d-44ee-83b1-94c472739df4">\n        {workouts.map((workout, index) => (\n          <div data-curate-edit-id="a800178f-1145-46a2-91b1-7a755465d5d1" key={index} className="bg-gray-100 p-4 mb-2 rounded">\n            {workout.exercise}: {workout.sets} sets x {workout.reps} reps\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default WorkoutTracker;',
                                },
                                {
                                    type: "file",
                                    name: "Articles.jsx",
                                    content:
                                        'import React from \'react\';\n\nconst Articles = () => {\n  const articles = [\n    {\n      title: "Benefits of Regular Exercise",\n      excerpt: "Learn about how regular exercise can improve your physical and mental health.",\n      image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg"\n    },\n    {\n      title: "Nutrition Tips for Muscle Growth",\n      excerpt: "Discover the best foods and nutrients to support muscle growth and recovery.",\n      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"\n    }\n  ];\n\n  return (\n    <div data-curate-edit-id="fe14058a-0241-4513-a5d6-ba1b7f223d81" className="container mx-auto px-4 py-8">\n      <h1 data-curate-edit-id="981d2bd4-98b1-4430-b291-f2123c7f8bae" className="text-3xl font-bold mb-6">Fitness Articles</h1>\n      <div data-curate-edit-id="6ccd5c4c-e9fe-4a99-b12d-20c62b305a54" className="grid md:grid-cols-2 gap-8">\n        {articles.map((article, index) => (\n          <div data-curate-edit-id="211d53dc-5c23-4b6d-8188-7912d4fc5237" key={index} className="bg-white rounded-lg shadow-md overflow-hidden">\n            <img data-curate-edit-id="11e6775c-f5ec-4d3e-a46a-7789eaecc035" src={article.image} alt={article.title} className="w-full h-48 object-cover" />\n            <div data-curate-edit-id="3a259105-422d-4f2f-87bb-4ea0957929e7" className="p-4">\n              <h2 data-curate-edit-id="fd9ec1a3-6ffb-47fd-97ce-3d796d8d0be0" className="text-xl font-semibold mb-2">{article.title}</h2>\n              <p data-curate-edit-id="aea49f15-b2ee-4e83-aab1-21b5fac67633" className="text-gray-600">{article.excerpt}</p>\n              <button data-curate-edit-id="5a55a036-6387-4c3b-950b-8025ce7c6a87" className="mt-4 text-blue-600 hover:text-blue-700">Read more</button>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default Articles;',
                                },
                                {
                                    type: "file",
                                    name: "Login.jsx",
                                    content:
                                        'import React from \'react\';\n\nconst Login = () => {\n  return (\n    <div data-curate-edit-id="6000a736-abd7-4969-a737-9e5d630bfd7a" className="container mx-auto px-4 py-8">\n      <div data-curate-edit-id="cea7fabe-f117-4576-a4d7-41d8feb20fd6" className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">\n        <h1 data-curate-edit-id="e4bbb391-98a3-4794-837c-7e7aa4e07b31" className="text-3xl font-bold mb-6">Login</h1>\n        <form data-curate-edit-id="a6aa3b09-4aa8-424a-86e9-10b765374a7e">\n          <div data-curate-edit-id="5eacf8ed-d543-4cf3-89dd-3a9dcc5e455e" className="mb-4">\n            <label data-curate-edit-id="23239496-414f-45b7-aeaa-4eef9bc96ecb" className="block text-gray-700 mb-2">Email</label>\n            <input data-curate-edit-id="780792b2-de22-4610-8630-eeb4f1d87121" type="email" className="w-full border p-2 rounded" />\n          </div>\n          <div data-curate-edit-id="f4a780ab-a08e-4565-a861-7859b57c8556" className="mb-6">\n            <label data-curate-edit-id="1c854d6e-d204-464c-85ae-ec577649f271" className="block text-gray-700 mb-2">Password</label>\n            <input data-curate-edit-id="fde7fc9e-3b39-4a7f-a04e-76f3bcdbc508" type="password" className="w-full border p-2 rounded" />\n          </div>\n          <button data-curate-edit-id="b8040c2a-e5fa-496b-8149-2d8aa6f8f7c9" type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">\n            Login\n          </button>\n        </form>\n      </div>\n    </div>\n  );\n};\n\nexport default Login;',
                                },
                                {
                                    type: "file",
                                    name: "Register.jsx",
                                    content:
                                        'import React from \'react\';\n\nconst Register = () => {\n  return (\n    <div data-curate-edit-id="78489bf2-5239-44d9-bc26-25ad935afec0" className="container mx-auto px-4 py-8">\n      <div data-curate-edit-id="598000e6-b78c-4526-b658-acdbec1c5bff" className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">\n        <h1 data-curate-edit-id="c634f7c7-1344-4fca-aa40-761cf0a71e56" className="text-3xl font-bold mb-6">Register</h1>\n        <form data-curate-edit-id="9607635f-41c3-4d46-a268-f430355a79cc">\n          <div data-curate-edit-id="63f325f7-b7c6-41b8-bb5a-db85a3d26361" className="mb-4">\n            <label data-curate-edit-id="cfa1ae95-0fc3-42e8-9591-489ac573cd81" className="block text-gray-700 mb-2">Name</label>\n            <input data-curate-edit-id="2f6157cf-34cd-4ee1-bf36-b82610d846e8" type="text" className="w-full border p-2 rounded" />\n          </div>\n          <div data-curate-edit-id="fd0d5eda-f18f-4e47-aaf6-b56a291c6794" className="mb-4">\n            <label data-curate-edit-id="bd1cfcb1-45e3-4d90-a751-f3beb359b31b" className="block text-gray-700 mb-2">Email</label>\n            <input data-curate-edit-id="29205c7a-1bd1-4041-bbf7-b5076446b8bc" type="email" className="w-full border p-2 rounded" />\n          </div>\n          <div data-curate-edit-id="c9772c29-cdce-463e-86e3-9d5e3dd3093f" className="mb-6">\n            <label data-curate-edit-id="c1f167cf-69ea-4902-8840-a2dc2d33a323" className="block text-gray-700 mb-2">Password</label>\n            <input data-curate-edit-id="8cd92cf0-f82a-45c0-b4ca-3e9d5e4ce359" type="password" className="w-full border p-2 rounded" />\n          </div>\n          <button data-curate-edit-id="1df37d1f-4ec6-41c9-b2e8-a2ba49454afa" type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">\n            Register\n          </button>\n        </form>\n      </div>\n    </div>\n  );\n};\n\nexport default Register;',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "file",
                    name: "index.html",
                    content:
                        '<!DOCTYPE html>\n<html data-curate-edit-id="a56f1c1f-77ba-4670-8015-14e6bac34501" lang="en">\n<head data-curate-edit-id="f2e59667-ef1b-4f2f-a940-1b637bfc8f89">\n    <meta data-curate-edit-id="ffc89db5-13f5-4b45-af21-833283a5cf04" charset="UTF-8">\n    <meta data-curate-edit-id="4a748bdb-907d-4086-afce-f33b91cdba16" name="viewport" content="width=device-width, initial-scale=1.0">\n    <title data-curate-edit-id="c441b713-1152-4ec2-9043-184971d040d7">Fitness Tracker Hub</title>\n</head>\n<body data-curate-edit-id="4f115af4-4169-48bb-8bf1-add966affcc7">\n    <div data-curate-edit-id="816a9f71-7025-4661-9eaf-a68b7d02111a" id="root"></div>\n    <script data-curate-edit-id="ca3195c2-a583-4cdf-a32f-6fdf4c5790ed" type="module" src="/src/main.jsx"></script>\n</body>\n</html>',
                },
            ],
        },
        history: [],
    });
    const [chats, setChats] = useState([
        { role: "bot", text: "Hello!" },
        { role: "user", text: "I want to create a website for my business" },
        {
            role: "bot",
            text: "Sure, I can help you with that. What is the name of your business?",
        },
        { role: "user", text: "Curate" },
        { role: "bot", text: "Great! What is the purpose of your website?" },
        { role: "user", text: "To showcase my products and services" },
        { role: "bot", text: "Got it! What is your target audience?" },
        { role: "user", text: "People aged 18-35" },
        { role: "bot", text: "What is your budget for the website?" },
        { role: "user", text: "$5000" },
        { role: "bot", text: "What is your timeline for the website?" },
        { role: "user", text: "3 months" },
        { role: "bot", text: "What is your preferred color scheme?" },
        { role: "user", text: "Blue and white" },
        { role: "bot", text: "What is your preferred font style?" },
        { role: "user", text: "Sans-serif" },
        { role: "bot", text: "What is your preferred layout style?" },
        { role: "user", text: "Grid" },
        { role: "bot", text: "What is your preferred navigation style?" },
        { role: "user", text: "Top bar" },
        { role: "bot", text: "What is your preferred footer style?" },
        { role: "user", text: "Simple" },
        { role: "bot", text: "What is your preferred image style?" },
        { role: "user", text: "Realistic" },
        { role: "bot", text: "What is your preferred icon style?" },
        { role: "user", text: "Flat" },
        { role: "bot", text: "What is your preferred button style?" },
        { role: "user", text: "Rounded" },
    ]);

    const [mode, setMode] = useState("chatbot"); // can be "chatbot" or "code" or "preview"
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [viewPort, setViewPort] = useState("desktop");

    const iframeRef = useRef(null);
    const selectedNodeRef = useRef(null);

    // main build function to send prompt to server
    const handleBuild = useCallback(
        async (prompt) => {
            try {
                setLoading(true);

                const token = await getAccessTokenSilently();
                const serverURI = import.meta.env.VITE_SERVER_URI;

                if (!serverURI) {
                    throw new Error(
                        "Server URI is not defined in the environment."
                    );
                }

                const response = await axios.post(
                    `${serverURI}/build`,
                    { prompt },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const { message, bundle, code, projectId } =
                    await response.data;

                console.log("message", message);

                setProject({
                    id: projectId,
                    currBundle: bundle,
                    currCode: code,
                    history: [],
                });

                setChats([{ role: "user", text: prompt }]);

                navigate("/builder");
            } catch (error) {
                console.error("Error submitting prompt:", error);
            } finally {
                setLoading(false);
            }
        },
        [getAccessTokenSilently, project]
    );

    // function to refine further using reprompt
    const handleRefine = useCallback(
        async (prompt) => {
            try {
                setLoading(true);

                const token = await getAccessTokenSilently();
                const serverURI = import.meta.env.VITE_SERVER_URI;

                if (!serverURI) {
                    throw new Error(
                        "Server URI is not defined in the environment."
                    );
                }

                const response = await axios.post(
                    `${serverURI}/refine`,
                    {
                        currProject: project.currCode,
                        prompt,
                        projectId: project.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const { message, bundle, code } = await response.data;

                console.log("message", message);

                setProject((prev) => ({
                    ...project,
                    currBundle: bundle,
                    currCode: code,
                    history: [...prev.history, prev.currCode],
                }));

                setChats((prev) => [...prev, { role: "user", text: prompt }]);
            } catch (error) {
                console.error("Error submitting prompt:", error);
            } finally {
                setLoading(false);
            }
        },
        [getAccessTokenSilently, project]
    );

    // function to edit the project using editor panel
    const handleEditing = useCallback(
        (property, value) => {
            const node = selectedNodeRef.current;
            if (!node || !property) return;

            const curateEditId = node.dataset.curateEditId;

            if (!curateEditId) {
                console.error("Element does not have a Curate Edit ID");
                return;
            }

            // to apply the change on the iframe
            switch (property) {
                case ALLOWED_EDITS.COLOR:
                    node.style.color = value;
                    break;
                case ALLOWED_EDITS.BACKGROUND_COLOR:
                    node.style.backgroundColor = value;
                    break;
                case ALLOWED_EDITS.MARGIN:
                    node.style.margin = value;
                    break;
                case ALLOWED_EDITS.PADDING:
                    node.style.padding = value;
                    break;
                case ALLOWED_EDITS.BORDER:
                    node.style.border = value;
                    break;
                case ALLOWED_EDITS.BORDER_RADIUS:
                    node.style.borderRadius = value;
                    break;
                case ALLOWED_EDITS.FONT_FAMILY:
                    node.style.fontFamily = value;
                    break;
                case ALLOWED_EDITS.FONT_SIZE:
                    node.style.fontSize = value;
                    break;
                case ALLOWED_EDITS.FONT_WEIGHT:
                    node.style.fontWeight = value;
                    break;
                case ALLOWED_EDITS.OPACITY:
                    node.style.opacity = value;
                    break;
                case ALLOWED_EDITS.WIDTH:
                    node.style.width = value;
                    break;
                case ALLOWED_EDITS.HEIGHT:
                    node.style.height = value;
                    break;
                case ALLOWED_EDITS.TEXT_ALIGN:
                    node.style.textAlign = value;
                    break;

                default:
                    break;
            }

            // update the index.css file in the project
            let indexCss = project.currCode?.children
                ?.find((child) => child.name === "src")
                ?.children?.find((child) => child.name === "index.css");

            if (!indexCss)
                indexCss = {
                    type: "file",
                    name: "index.css",
                    content: "",
                };

            const regex = new RegExp(
                `\\[data-curate-edit-id="${curateEditId}"\\] \\{([\\s\\S]*?)\\}`,
                "g"
            );

            // Check if the rule for the given ID exists
            const match = regex.exec(indexCss.content);

            if (match) {
                // If the rule exists, check if the property already exists
                const rule = match[0];
                const propertyRegex = new RegExp(`\\s*${property}:.*?;`, "g");

                if (propertyRegex.test(rule)) {
                    // If property exists, replace its value
                    indexCss.content = indexCss.content.replace(
                        propertyRegex,
                        `  ${property.toString()}: ${value};`
                    );
                } else {
                    // If property does not exist, add it to the rule
                    indexCss.content = indexCss.content.replace(
                        rule,
                        rule.replace(
                            "}",
                            `  ${property.toString()}: ${value};\n}`
                        )
                    );
                }
            } else {
                // If the rule doesn't exist, add it
                indexCss.content += `\n\n[data-curate-edit-id="${curateEditId}"] {\n  ${property.toString()}: ${value};\n}`;
            }

            setProject((prev) => ({
                ...prev,
                currCode: {
                    ...prev.currCode,
                    children: prev.currCode.children.map((child) =>
                        child.name === "src"
                            ? {
                                  ...child,
                                  children: child.children.map((child) =>
                                      child.name === "index.css"
                                          ? indexCss
                                          : child
                                  ),
                              }
                            : child
                    ),
                },
            }));
        },
        [project]
    );

    const handleSaveChanges = useCallback(async () => {
        try {
            setLoading(true);

            const token = await getAccessTokenSilently();
            const serverURI = import.meta.env.VITE_SERVER_URI;

            if (!serverURI) {
                throw new Error(
                    "Server URI is not defined in the environment."
                );
            }

            const response = await axios.post(
                `${serverURI}/update`,
                {
                    currProject: project.currCode,
                    projectId: project.id + "abcd",
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const { message, bundle } = await response.data;

            console.log("message", message);

            setProject((prev) => ({
                ...project,
                currBundle: bundle,
                history: [...prev.history, prev.currCode],
            }));
        } catch (error) {
            console.error("Error updating project:", error);
        } finally {
            setLoading(false);
        }
    }, [getAccessTokenSilently, project]);

    const handleDownload = useCallback(async () => {
        try {
            setLoading(true);

            const token = await getAccessTokenSilently();
            const serverURI = import.meta.env.VITE_SERVER_URI;

            if (!serverURI) {
                throw new Error(
                    "Server URI is not defined in the environment."
                );
            }

            const response = await axios.post(
                `${serverURI}/download`,
                {
                    project: project.currCode,
                    projectId: project.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    responseType: "blob",
                }
            );

            const blob = new Blob([response.data], { type: "application/zip" });

            // Create a download link
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "output.zip"); // Set the filename
            document.body.appendChild(link);
            link.click();
            link.remove();

            console.log("Download successful");
        } catch (error) {
            console.error("Error downloading project:", error);
        } finally {
            setLoading(false);
        }
    }, [getAccessTokenSilently, project]);

    const handleFetchProjectHistory = useCallback(async () => {
        try {
            setLoading(true);

            const token = await getAccessTokenSilently();
            const serverURI = import.meta.env.VITE_SERVER_URI;

            if (!serverURI) {
                throw new Error(
                    "Server URI is not defined in the environment."
                );
            }

            const response = await axios.get(`${serverURI}/history`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const { history, message } = await response.data;

            return history;
        } catch (error) {
            console.error("Error fetching project history:", error);
        } finally {
            setLoading(false);
        }
    }, [getAccessTokenSilently]);

    const handleGetProject = useCallback(
        async (projectId) => {
            try {
                setLoading(true);

                const token = await getAccessTokenSilently();
                const serverURI = import.meta.env.VITE_SERVER_URI;

                if (!serverURI) {
                    throw new Error(
                        "Server URI is not defined in the environment."
                    );
                }

                const response = await axios.post(
                    `${serverURI}/project`,
                    { projectId },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const { message, bundle, code } = await response.data;

                console.log("message", message);

                setProject({
                    id: projectId,
                    currBundle: bundle,
                    currCode: code,
                    history: [],
                });

                navigate("/builder");
            } catch (error) {
                console.error("Error submitting prompt:", error);
            } finally {
                setLoading(false);
            }
        },
        [getAccessTokenSilently, project]
    );

    // editing mode to highlight elements
    useEffect(() => {
        const iframe = iframeRef.current;

        if (!iframe) return;

        const handleMouseOver = (e) => {
            e.target.style.outline = "1px solid red";
        };
        const handleMouseLeave = (e) => {
            e.target.style.outline = "";
        };
        const handleClick = (e) => {
            e.preventDefault();
            selectedNodeRef.current = e.target;
        };

        if (isEditing) {
            const allNodes =
                iframe.contentWindow.document.querySelectorAll("*");

            allNodes.forEach((node) => {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseleave", handleMouseLeave);
                node.addEventListener("click", handleClick);
            });

            return () => {
                allNodes.forEach((node) => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseleave", handleMouseLeave);
                    node.removeEventListener("click", handleClick);
                });
            };
        } else {
            return () => {}; // No cleanup needed when not editing
        }
    }, [isEditing]);

    const contextValue = useMemo(
        () => ({
            project,
            setProject,
            iframeRef,
            chats,
            isDragging,
            setIsDragging,
            isEditing,
            setIsEditing,
            loading,
            setLoading,
            handleBuild,
            handleEditing,
            mode,
            setMode,
            viewPort,
            setViewPort,
            handleRefine,
            handleDownload,
            handleSaveChanges,
            handleFetchProjectHistory,
            handleGetProject,
        }),
        [
            project,
            chats,
            isDragging,
            isEditing,
            loading,
            handleBuild,
            handleEditing,
            mode,
            viewPort,
            handleRefine,
            handleDownload,
            handleSaveChanges,
            handleFetchProjectHistory,
            handleGetProject,
        ]
    );

    return (
        <ProjectContext.Provider value={contextValue}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => {
    if (!ProjectContext) {
        throw new Error("useProject must be used within a ProjectProvider");
    }

    return useContext(ProjectContext);
};
