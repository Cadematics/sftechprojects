
import React from 'react';

const RequestAQuote = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Submit your project details and upload drawings or files. We will respond quickly.
          </p>
        </div>
        <div className="mt-16 rounded-2xl bg-white shadow-lg ring-1 ring-slate-900/5">
          <form action="#" method="POST" className="p-8 sm:p-12">
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold leading-7 text-slate-900">Your Details</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className="block w-full rounded-md border-0 bg-slate-100 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Enter your email address"
                        className="block w-full rounded-md border-0 bg-slate-100 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold leading-7 text-slate-900">Project Information</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="service-category" className="block text-sm font-medium leading-6 text-slate-900">
                        Service Category
                        </label>
                        <div className="mt-2">
                        <select
                            id="service-category"
                            name="service-category"
                            className="block w-full rounded-md border-0 bg-slate-100 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                        >
                            <option>Product Development</option>
                            <option>CAD & Engineering</option>
                            <option>Digital Fabrication</option>
                            <option>3D Printing</option>
                        </select>
                        </div>
                    </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="project-description" className="block text-sm font-medium leading-6 text-slate-900">
                      Project Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="project-description"
                        id="project-description"
                        rows={6}
                        placeholder="Please describe your project in detail..."
                        className="block w-full rounded-md border-0 bg-slate-100 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold leading-7 text-slate-900">Attachments</h2>
                 <div className="mt-6 sm:col-span-2">
                    <div className="flex justify-center rounded-lg border border-dashed border-slate-900/25 px-6 py-10">
                        <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-slate-600">
                            <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary-500"
                            >
                            <span>Click to upload</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-slate-600">PDF, STEP, DXF, STL, PNG, JPG (MAX. 25MB)</p>
                        </div>
                    </div>
                    </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-900/10">
              <div className="flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestAQuote;
