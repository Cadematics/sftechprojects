
import React from 'react';
import { Link } from 'react-router-dom';

const offerings = [
  {
    title: 'CAD & Simulation',
    description: 'Advanced computer-aided design and finite element analysis to optimize performance and identify potential issues early in the development cycle.',
    image: 'https://images.unsplash.com/photo-1615751072497-5f5169225a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Prototyping & Testing',
    description: 'Rapid prototyping using 3D printing, CNC machining, and rigorous physical testing protocols to validate designs and functionality.',
    image: 'https://images.unsplash.com/photo-1593106578502-27fa8479d060?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Manufacturing Support',
    description: 'Guidance and support for transitioning to mass production, including tool design, process optimization, and quality control systems.',
    image: 'https://images.unsplash.com/photo-1581092916376-296069419262?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const Service_ProductDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5773895a345e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Product Development & Engineering</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Innovative Solutions for Modern Challenges</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Overview</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              BayLabTech delivers comprehensive product development services, from initial concept generation to final prototype fabrication. Our team of experienced engineers utilizes cutting-edge technology to ensure your vision becomes a market-ready reality, focusing on efficiency, reliability, and precision.
            </p>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Our Offerings</h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-8">
              {offerings.map((offering) => (
                <div key={offering.title} className="flex flex-col items-center gap-x-8 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:flex-row">
                  <div className="flex-shrink-0">
                    <img className="h-32 w-48 rounded-md object-cover" src={offering.image} alt={offering.title} />
                  </div>
                  <div className="mt-6 sm:mt-0">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900">{offering.title}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{offering.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to start your project?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us today to discuss your product development needs and get a free quote.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/quote"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_ProductDevelopment;
