function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800">
        {/* Navbar */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-3xl font-extrabold text-blue-600">
                Artifacts<span className="text-gray-800">Tracker</span>
              </a>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </a>
              <a
                href="/artifacts"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Artifacts
              </a>
              <a
                href="/add-artifact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Add Artifact
              </a>
            </div>
            <div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90">
                Login
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Explore the Stories <br /> Behind the Relics
              </h1>
              <p className="mb-8 text-lg">
                Uncover the beauty and history of artifacts worldwide with our
                platform. Contribute and preserve the tales for future
                generations.
              </p>
              <a
                href="/artifacts"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:opacity-90"
              >
                Explore Artifacts
              </a>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="https://via.placeholder.com/500x350"
                alt="Hero Image"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Featured Artifacts Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Featured Artifacts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                >
                  <img
                    src="https://via.placeholder.com/250x150"
                    alt="Artifact"
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Artifact Name
                  </h3>
                  <p className="text-gray-600 mt-2">
                    A brief description of the artifact highlighting its
                    historical significance.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-700 font-medium">Likes: 42</span>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/artifacts"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90"
            >
              See All
            </a>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="bg-gradient-to-r from-yellow-100 via-pink-50 to-yellow-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Join Our Community
            </h2>
            <p className="text-gray-700 mb-8">
              Connect with like-minded enthusiasts and contribute to the
              preservation of history.
            </p>
            <a
              href="/register"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90"
            >
              Register Now
            </a>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              Our mission is to bring history closer to you by creating a
              platform that preserves and shares the stories behind historical
              artifacts.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Artifacts Tracker. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
