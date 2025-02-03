const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST API"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "npm"] }
  ]

  return (
    <div data-curate-edit-id="4164dceb-60d1-4efe-b82f-b2acd2a822f6" className="container mx-auto px-4 py-12">
      <h2 data-curate-edit-id="585245f3-58bd-4eb2-9e7f-7aa2f6167779" className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
      <div data-curate-edit-id="11eda4fa-4677-4426-bb71-57fe4b16095c" className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div data-curate-edit-id="115e47ee-062b-4977-968c-972e8237f541" key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
            <h3 data-curate-edit-id="eb877fe9-f5b5-4001-bf63-dbfefd68000f" className="text-xl font-semibold mb-4">{skill.category}</h3>
            <ul data-curate-edit-id="68592b11-3eb0-4e08-ae93-946e65a48668" className="space-y-2">
              {skill.items.map((item) => (
                <li data-curate-edit-id="5d097f4f-63ec-434b-b62d-4ca4098fe3ef" key={item} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills