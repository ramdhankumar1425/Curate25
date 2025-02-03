import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav data-curate-edit-id="80df6ce3-e993-450e-90dc-abd4c039f09d" className="bg-gray-800 text-white p-4">
      <div data-curate-edit-id="f7ff92d9-0ce6-48bc-b355-56a4ed08a307" className="container mx-auto flex justify-between items-center">
        <Link data-curate-edit-id="dbb466a6-c97e-4029-89ab-12d6d86c5880" to="/" className="text-xl font-bold">Portfolio</Link>
        <div data-curate-edit-id="10ebceb1-95d9-4a55-b2e4-3709fe3b5de6" className="space-x-4">
          <Link data-curate-edit-id="7554a90d-258d-4714-9e83-ff33a61517e0" to="/" className="hover:text-gray-300">Home</Link>
          <Link data-curate-edit-id="f5b9bab1-38de-44cd-acf9-7dfe970c86d5" to="/skills" className="hover:text-gray-300">Skills</Link>
          <Link data-curate-edit-id="686872de-ed78-44a2-8730-c65ddcf45382" to="/projects" className="hover:text-gray-300">Projects</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar