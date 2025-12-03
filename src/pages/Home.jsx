
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Product Development',
    description: 'End-to-end development services, from concept to a market-ready product.',
    path: '/services/product-development',
    image: 'https://cdn.pixabay.com/photo/2022/05/23/22/48/art-7217326_1280.jpg'
  },
  {
    title: 'CAD & Engineering',
    description: 'High-precision 2D and 3D modeling for a variety of needs.',
    path: '/services/cad-engineering',
    image: 'https://cdn.pixabay.com/photo/2018/02/13/03/45/ship-3149740_1280.jpg'
  },
  {
    title: 'Laser Cutting & Digital Fabrication',
    description: 'Transforming digital designs into physical objects with precision and speed.',
    path: '/services/laser-cutting',
    image: 'https://cdn.pixabay.com/photo/2016/09/28/10/18/camera-1700110_1280.jpg'
  },
  {
    title: 'Web Development',
    description: 'Creating a seamless user experience backed by robust and scalable technology.',
    path: '/services/web-development',
    image: 'https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_1280.jpg'
  },
  {
    title: 'Visualization & 3D Rendering',
    description: 'Bringing your designs to life with stunningly realistic 3D renderings.',
    path: '/services/3d-visualization',
    image: 'https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368_1280.jpg'
  },
   {
    title: 'Book a consultation',
    description: 'Not sure where to start? We can help.',
    path: '/contact',
    image: 'https://cdn.pixabay.com/photo/2022/01/04/18/47/oil-6915740_1280.jpg'
  }
];

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/01/09/11/26/road-bike-594164_1280.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Engineering, Prototyping & Digital Fabrication Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We help individuals, startups, and businesses turn ideas into reality through CAD, fabrication, and web development.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request a Quote
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                Explore Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="relative py-24 sm:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/01/04/18/47/oil-6915740_1280.jpg)' }}>
         <div className="absolute inset-0 bg-white opacity-75"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to bring your project to life
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg shadow-lg">
                   {service.image && <img src={service.image} alt={service.title} className="h-48 w-full object-cover rounded-md mb-4" />}
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
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
            </dl>
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="relative bg-gray-50 dark:bg-slate-800 py-24 sm:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg)' }}>
         <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Who We Are</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
             A passionate team of engineers, designers, and developers.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
             We are a modern engineering and prototyping studio that thrives on turning innovative ideas into tangible realities. Our expertise in design, fabrication, and web development allows us to support a diverse range of projects, from individual passion projects to large-scale business solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    to="/about"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    About Us
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative bg-indigo-700 py-24 sm:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/01/09/11/26/road-bike-594164_1280.jpg)' }}>
         <div className="absolute inset-0 bg-indigo-900 opacity-60"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900/50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start Your Project Today
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Upload your drawings or idea notes — we’ll respond quickly.
              </p>
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

export default Home;
