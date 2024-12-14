import React from 'react';

const testimonials = [
  {
    company: 'Architecture',
    logo: '🌐', // Replace with an image URL if needed
    feedback:
      "I am incredibly impressed with the website created for my architecture business. From the initial consultation to the final product, the team truly understood my vision and executed it flawlessly. The design is sleek, modern, and perfectly showcases my work in the best light. The attention to detail and user experience is exceptional. It’s not just a website; it’s a powerful tool that enhances my business's online presence and helps potential clients easily navigate my portfolio. I highly recommend their services to anyone looking for top-notch design and professional support.",
    name: 'Architecture Kirui',
    position: 'Director Lennyways Limited',
    image: 'https://via.placeholder.com/50', // Replace with actual image
  },
  {
    company: 'Doctor Services',
    logo: '💻', // Replace with an image URL if needed
    feedback:
      "I am extremely pleased with the website created for my medical practice. From the outset, the team took the time to understand my needs and designed a site that perfectly reflects the professional, compassionate care I provide to my patients. The website is user-friendly, easy to navigate, and offers all the necessary information my patients need, including appointment scheduling and resources about services. It has enhanced my practice's online presence and made it easier for people to find and connect with me. I highly recommend their services to any healthcare provider looking to elevate their online presence.",
    name: 'Dr. Frank',
    position: 'Doctor',
    image: 'https://via.placeholder.com/50', // Replace with actual image
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-center text-4xl font-bold mb-4">What Our Clients Say</h2>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-400">
        Our services span diverse areas, including architecture and doctor services. We ensure our clients receive exceptional quality and expertise in every project. Here's what our clients have to say about working with us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">{testimonial.logo}</div>
              <h3 className="text-2xl font-bold">{testimonial.company}</h3>
            </div>
            <p className="italic mb-6">"{testimonial.feedback}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
