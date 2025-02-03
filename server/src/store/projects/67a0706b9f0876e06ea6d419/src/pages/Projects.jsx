const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://demo1.example.com",
      repo: "https://github.com/example1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      demo: "https://demo2.example.com",
      repo: "https://github.com/example2"
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support and user interactions.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://demo3.example.com",
      repo: "https://github.com/example3"
    }
  ]

  return (
    <div data-curate-edit-id="241e0115-1587-4c11-9efc-3d8a24c5ce93" className="container mx-auto px-4 py-12">
      <h2 data-curate-edit-id="99a40067-abed-4306-a238-17d05b940670" className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div data-curate-edit-id="02f4e1fd-b9a3-4a82-9083-6e951fd4a5af" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div data-curate-edit-id="8f2cb075-17f6-4e04-aea6-b7ce47df03a5" key={project.title} className="bg-white p-6 rounded-lg shadow-md">
            <h3 data-curate-edit-id="a78898b3-88ea-42de-9410-992140b789c0" className="text-xl font-semibold mb-3">{project.title}</h3>
            <p data-curate-edit-id="c0273bf4-01ee-4452-a646-391982cad4a7" className="text-gray-600 mb-4">{project.description}</p>
            <div data-curate-edit-id="4373a9d0-e62b-440e-a250-21ab83679d01" className="mb-4">
              <h4 data-curate-edit-id="8cbfb2e0-1b7d-4c01-9946-1738672186d6" className="font-medium mb-2">Technologies:</h4>
              <div data-curate-edit-id="e9fef764-2188-4c6d-b94c-8b3f485608b2" className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span data-curate-edit-id="99b6ce78-f385-42fe-be60-11bda4ca95e4" key={tech} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div data-curate-edit-id="64ec1aa7-68a4-4b82-9009-15b4194b7de0" className="flex gap-4">
              <a data-curate-edit-id="9d738275-694a-408d-b219-e2d6b12e37a9" href={project.demo} className="text-blue-600 hover:underline">Live Demo</a>
              <a data-curate-edit-id="75f706e9-9932-4269-9c34-4d3acbb27c26" href={project.repo} className="text-blue-600 hover:underline">Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects