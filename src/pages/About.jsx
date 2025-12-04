
import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder images for team members
const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    imageUrl: 'https://i.pravatar.cc/150?u=jane-doe', // Placeholder
  },
  {
    name: 'John Smith',
    role: 'Lead Engineer',
    imageUrl: 'https://i.pravatar.cc/150?u=john-smith', // Placeholder
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Projects',
    imageUrl: 'https://i.pravatar.cc/150?u=emily-johnson', // Placeholder
  },
];

const values = [
  {
    name: 'Innovation',
    description: 'We constantly explore new technologies and methods to deliver creative and effective solutions.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    name: 'Precision',
    description: 'Meticulous attention to detail ensures the highest quality and accuracy in every project.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Collaboration',
    description: 'We work closely with our clients as a true partner to achieve shared goals and success.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
    {
    name: 'Customer Success',
    description: 'Your success is our ultimate metric. We are committed to delivering results that matter.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-slate-50">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            About SFTechProjects
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Innovating the Future of Engineering and Prototyping
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pushing the boundaries of innovation
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
             SFTechProjects is a leading professional engineering services firm dedicated to pushing the boundaries of innovation. Our mission is to provide cutting-edge solutions in prototyping and digital fabrication, turning complex ideas into tangible realities. We are committed to excellence, precision, and collaborative partnerships to drive the future of technology.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
           <h2 className="text-base font-semibold leading-7 text-primary-600 lg:text-center">The Journey So Far</h2>
             <p className="mt-6 text-lg leading-8 text-slate-600">
            Founded by a group of passionate engineers, SFTechProjects began with a simple goal: to make advanced manufacturing and prototyping accessible to innovators everywhere. From our humble beginnings in a small workshop, we've grown into a trusted partner for startups and established companies alike, consistently delivering high-quality results and pushing the envelope of what's possible.
            </p>
          </div>
        </div>
      </div>


      {/* Values */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What Drives Us</h2>
            <p className="mt-4 text-lg text-slate-600">
              Our core values are the foundation of everything we do.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{value.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet Our Experts</h2>
            <p className="mt-4 text-lg text-slate-600">
              The brilliant minds behind our innovative solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div key={person.name} className="text-center">
                <img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-slate-900">{person.name}</h3>
                <p className="text-sm leading-6 text-primary-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Let's turn your vision into reality. Explore our services or get in touch for a custom quote.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
              Explore Services
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
