import React from 'react';

const Features = () => {
  const features = [
    { title: 'Feature 1', description: 'Description of feature 1', icon: '/path/to/icon1.png' },
    { title: 'Feature 2', description: 'Description of feature 2', icon: '/path/to/icon2.png' },
    { title: 'Feature 3', description: 'Description of feature 3', icon: '/path/to/icon3.png' },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
        <div className="flex flex-wrap mt-10">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-6">
              <div className="text-center">
                <img src={feature.icon} alt={feature.title} className="mx-auto h-16" />
                <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
