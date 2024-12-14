import React from "react";

const CompletedProjects = () => {
  const projects = [
    {
      date: "Mar 16, 2023",
      author: "Dr. Frank",
      title: "Health Website",
      image: "./img/nurse.png", // Replace with actual image URL
    },
    {
      date: "Apr 10, 2022",
      author: "Kutchy Graphics",
      title: "Graphic Posters",
      image: "./img/kutchy.png", // Replace with actual image URL
    },
    {
      date: "Nov 12, 2024",
      author: "Waithaka's site",
      title: "Ecommerce",
      image: "./img/ecommerce.png", // Replace with actual image URL
    },
  ];

  return (
    <section id="completedprojects" className="py-12 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-10 px-4 bg-blue-900">
        <div className="inline-block  text-white py-2 px-4 rounded-md">
          <h2 className="text-3xl font-bold">Completed Projects</h2>
          <p className="mt-2 text-white text-lg">Learn how to grow your business with our expert advice.</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {project.date} &middot; {project.author}
              </p>
              <h3 className="mt-2 text-xl font-bold text-gray-800">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjects;
