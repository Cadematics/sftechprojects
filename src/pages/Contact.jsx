
import React from 'react';

const Contact = () => {
  return (
    <main className="bg-gray-50 text-gray-900">
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Have a project in mind or just want to say hi? We'd love to hear from you.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <div className="w-full">
                <form action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Full name
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                    </label>
                    <div className="mt-2.5">
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Send Message
                    </button>
                </div>
                </form>
            </div>

            {/* Contact Info */}
            <div className="w-full flex items-center">
                 <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                            <p className="mt-1 text-gray-600">contact@sftechprojects.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <span className="material-symbols-outlined">call</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                            <p className="mt-1 text-gray-600">(123) 456-7890</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                            <p className="mt-1 text-gray-600">123 Engineering Lane<br/>San Francisco, CA 94105</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
