
import React from 'react';

const Contact = () => {
  return (
    <main className="flex flex-1 justify-center py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col w-full max-w-[1200px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3 text-center w-full">
            <h1 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Contact Us</h1>
            <p className="text-slate-500 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
              Have a question or need assistance? Reach out to us using the form below, or find our contact information.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 p-4">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-200">
            <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">Send us a Message</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col flex-1">
                  <p className="text-slate-800 text-base font-medium leading-normal pb-2">Name</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-background-light h-12 placeholder:text-slate-400 p-3 text-base font-normal leading-normal" placeholder="Enter your full name" />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-slate-800 text-base font-medium leading-normal pb-2">Email</p>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-background-light h-12 placeholder:text-slate-400 p-3 text-base font-normal leading-normal" placeholder="you@company.com" type="email" />
                </label>
              </div>
              <label className="flex flex-col flex-1">
                <p className="text-slate-800 text-base font-medium leading-normal pb-2">Message Body</p>
                <textarea className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-background-light min-h-36 placeholder:text-slate-400 p-3 text-base font-normal leading-normal" placeholder="Let us know how we can help..."></textarea>
              </label>
              <div className="flex flex-col gap-2">
                <p className="text-slate-800 text-base font-medium leading-normal">File Upload (Optional)</p>
                <div className="relative flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-background-light px-6 py-10 text-center transition-colors hover:border-primary/50">
                  <div className="flex flex-col items-center text-slate-500">
                    <span className="material-symbols-outlined text-4xl mb-2">upload_file</span>
                    <p className="text-sm font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-400">PDF, PNG, JPG up to 10MB</p>
                  </div>
                  <input className="absolute inset-0 h-full w-full cursor-pointer opacity-0" multiple type="file" />
                </div>
              </div>
              <button className="flex w-full sm:w-auto items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90" type="submit">
                <span className="truncate">Send Message</span>
              </button>
            </form>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl border border-slate-200 h-full">
              <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">Our Contact Details</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800">Email</h3>
                    <a className="text-slate-500 hover:text-primary" href="mailto:info@sftechprojects.com">info@sftechprojects.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800">Phone</h3>
                    <a className="text-slate-500 hover:text-primary" href="tel:+11234567890">+1 (123) 456-7890</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800">Address</h3>
                    <p className="text-slate-500">123 Engineering Lane<br/>San Francisco, CA 94105</p>
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
