
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Product Development',
    description: 'From initial concept to a market-ready product, we guide you through every step of the development lifecycle.',
    details: [
      'Concept sketching and validation',
      'Prototyping and iteration',
      'Material selection and sourcing',
      'Manufacturing readiness',
    ],
    image: 'https://cdn.pixabay.com/photo/2022/05/23/22/48/art-7217326_1280.jpg',
    path: '/services/product-development',
  },
  {
    title: 'CAD & Engineering',
    description: 'Precision 2D and 3D modeling, simulation, and analysis to ensure your designs are robust and manufacturable.',
    details: [
        '3D part and assembly modeling',
        'Finite Element Analysis (FEA)',
        'Technical drawings (GD&T)',
        'Design for Manufacturing (DFM)',
    ],
    image: 'https://cdn.pixabay.com/photo/2018/02/13/03/45/ship-3149740_1280.jpg',
    path: '/services/cad-engineering',
  },
  {
    title: 'Laser Cutting & Fabrication',
    description: 'High-precision cutting and engraving for a wide variety of materials, perfect for prototypes and production parts.',
    details: [
        'Wood, acrylic, and metal cutting',
        'Custom engraving services',
        'Rapid prototyping with sheet goods',
        'Small to medium batch production',
    ],
    image: 'https://cdn.pixabay.com/photo/2016/09/28/10/18/camera-1700110_1280.jpg',
    path: '/services/laser-cutting',
  },
  {
    title: 'Web Development',
    description: 'Developing custom web solutions and applications tailored for technical projects and data visualization.',
    details: [
        'Interactive data dashboards',
        'Product configurators',
        'Internal tooling and apps',
        'Technical documentation sites',
    ],
    image: 'https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_1280.jpg',
    path: '/services/web-development',
  },
  {
    title: 'Visualization & 3D Rendering',
    description: 'Creating photorealistic renders and animations for compelling presentations and marketing materials.',
    details: [
        'High-quality product renders',
        'Architectural visualizations',
        'Animated assembly instructions',
        'Virtual reality experiences',
    ],
    image: 'https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368_1280.jpg',
    path: '/services/3d-visualization',
  },
    {
    title: '3D Printing & General Projects',
    description: 'Utilizing advanced 3D printing for rapid prototyping, custom fixtures, and unique one-off projects.',
    details: [
        'FDM, SLA, and SLS printing',
        'Functional prototypes',
        'Jigs, fixtures, and tooling',
        'Custom enclosures and parts',
    ],
    image: 'https://cdn.pixabay.com/photo/2016/06/13/21/33/printer-1455169_1280.jpg',
    path: '/services/3d-printing',
  },
];

const Services = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <main className="flex-1" style={{
                  backgroundImage:
                    `linear-gradient(rgba(16, 25, 34, 0.8), rgba(16, 25, 34, 0.9)), url('https://cdn.pixabay.com/photo/2019/04/04/08/01/icon-4102192_1280.png')`,
                }}>
        {/* HeroSection */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="@container">
              <div
                className="flex min-h-[400px] flex-col gap-6 rounded-xl bg-slate-900 dark:bg-slate-800 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
                
              >
                <div className="flex flex-col gap-4 max-w-3xl">
                  <h1 className="text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
                  <h2 className="text-slate-300 dark:text-slate-400 text-lg leading-relaxed">
                    SFTechProjects is your partner in turning complex ideas into tangible products through a comprehensive range of expert engineering and prototyping services.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List/Grid */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                   <img src={service.image} alt={service.title} className="h-48 w-full object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm list-disc list-inside">
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <Link to={service.path} className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30">
                      <span className="truncate">Learn More</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="rounded-xl bg-slate-900 dark:bg-slate-800 py-16 px-8 text-center">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Start Your Project?</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Let's discuss how SFTechProjects can bring your ideas to life. Contact us today for a free consultation.
                </p>
                <div className="mt-8 flex justify-center">
                    <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        <span>Request a Quote</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
