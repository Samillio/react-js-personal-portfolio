import React from 'react';

const services = [
  {
    title: 'Computer Networking',
    description:
      'We design, implement, and maintain secure and reliable computer networks for businesses and institutions.',
    icon: '🌐',
  },
  {
    title: 'Computer Repair and Maintenance',
    description:
      'Our experts provide comprehensive repair and maintenance services to ensure your computers perform at their best.',
    icon: '🛠️',
  },
  {
    title: 'Website Development',
    description:
      'We create responsive and user-friendly websites tailored to meet your business needs and objectives.',
    icon: '🌟',
  },
  {
    title: 'Mobile Phones Repair (Hardware & Software)',
    description:
      'From screen replacements to software troubleshooting, we provide expert mobile repair services.',
    icon: '📱',
  },
  {
    title: 'All ICT Services',
    description:
      'We offer a wide range of ICT solutions, including software installations, system upgrades, and IT consultancy.',
    icon: '💻',
  },
  {
    title: 'Business Plans and Trade Plans',
    description:
      'Our team specializes in creating detailed and professional business plans to guide your ventures to success.',
    icon: '📑',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100">
      <div className="bg-blue-900 text-white py-16 px-8">
        <h2 
          className="text-center text-4xl font-bold mb-4" 
          aria-label="Our Services"
        >
          Our Services
        </h2>
        <p className="text-center max-w-3xl mx-auto">
          Explore our comprehensive range of services tailored to meet all your ICT and business needs. From cutting-edge IT solutions to professional business plans, we’ve got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title} // Using title as the key since it's unique
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl hover:bg-blue-50 transition-shadow duration-300"
          >
            <div 
              className="text-blue-900 text-4xl mb-4" 
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
