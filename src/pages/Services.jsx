
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Product Development',
    description: 'End-to-end development services, from concept to a market-ready product.',
    path: '/services/product-development',
    icon: 'M12 6.25278V19.2528M12 6.25278C10.8321 6.25278 9.90278 7.1821 9.90278 8.35C9.90278 9.5179 10.8321 10.4472 12 10.4472M12 6.25278C13.1679 6.25278 14.0972 7.1821 14.0972 8.35C14.0972 9.5179 13.1679 10.4472 12 10.4472M12 19.2528C10.8321 19.2528 9.90278 18.3235 9.90278 17.1556C9.90278 15.9877 10.8321 15.0583 12 15.0583M12 19.2528C13.1679 19.2528 14.0972 18.3235 14.0972 17.1556C14.0972 15.9877 13.1679 15.0583 12 15.0583'
  },
  {
    title: 'CAD & Engineering',
    description: 'High-precision 2D and 3D modeling for a variety of needs.',
    path: '/services/cad-engineering',
    icon: 'M3 15.2528H21M3 9.25278H21M17.25 3.25278L6.75 21.2528'
  },
  {
    title: 'Laser Cutting & Digital Fabrication',
    description: 'Transforming digital designs into physical objects with precision and speed.',
    path: '/services/laser-cutting',
    icon: 'M12 3.25278V21.2528M12 3.25278L4.5 12.2528M12 3.25278L19.5 12.2528'
  },
  {
    title: 'Web Development',
    description: 'Creating a seamless user experience backed by robust and scalable technology.',
    path: '/services/web-development',
    icon: 'M7.5 12.2528L4.5 9.25278L7.5 6.25278M16.5 12.2528L19.5 9.25278L16.5 6.25278M13.5 4.75278L10.5 19.7528'
  },
  {
    title: 'Visualization & 3D Rendering',
    description: 'Bringing your designs to life with stunningly realistic 3D renderings.',
    path: '/services/3d-visualization',
    icon: 'M21 12.2528C21 17.2528 16.9706 21.2528 12 21.2528C7.02944 21.2528 3 17.2528 3 12.2528C3 7.25278 7.02944 3.25278 12 3.25278C16.9706 3.25278 21 7.25278 21 12.2528ZM12 12.2528L17.6087 15.2528M12 12.2528L10.125 3.81528M12 12.2528L4.5 9.25278'
  }
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-gray-50 dark:bg-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore our capabilities across engineering, fabrication, and digital development.
            </p>
          </div>
        </div>
      </div>

      {/* Service Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                   <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link to={service.path} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn More <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need a Quote?
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
