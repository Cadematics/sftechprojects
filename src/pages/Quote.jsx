
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

// Helper function to convert a file to a Base64 string
const readFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        name: file.name,
        type: file.type,
        size: file.size,
        data: reader.result, // This is the Base64 string
      });
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceCategory: 'Product Development',
    description: '',
  });
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('new'); // new, submitting, success, error
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log("Files selected:", selectedFiles);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started.");
    setError(null);

    if (formData.name === '' || formData.email === '' || formData.description === '') {
      console.log("Validation failed: Required fields are empty.");
      setError('Please fill out all required fields.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    console.log("Status set to submitting. Form data:", formData);

    try {
      // 1. Convert files to Base64
      let attachments = [];
      if (files.length > 0) {
        console.log(`Attempting to convert ${files.length} files...`);
        attachments = await Promise.all(files.map(readFileAsBase64));
        console.log("Files converted to Base64 successfully.");
      } else {
        console.log("No files to attach.");
      }

      // 2. Create the document in Firestore, now with the file data included
      console.log("Attempting to create document in Firestore with attachments...");
      const docRef = await addDoc(collection(db, 'quoteRequests'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        attachments: attachments, // Save the array of file objects
      });
      console.log("Document created successfully in Firestore. Doc ID:", docRef.id);

      // 3. Success - No more interaction with Firebase Storage is needed.
      console.log("Quote submission process successful.");
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        serviceCategory: 'Product Development',
        description: '',
      });
      setFiles([]);
    } catch (err) {
      console.error("Detailed error during quote submission:", err);
      setError(`An error occurred: ${err.message}. Check the console for details.`);
      setStatus('error');
    }
  };

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
          <form onSubmit={handleSubmit} className="p-8 sm:p-12">
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
                        value={formData.name}
                        onChange={handleInputChange}
                        required
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
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
                        <label htmlFor="serviceCategory" className="block text-sm font-medium leading-6 text-slate-900">
                        Service Category
                        </label>
                        <div className="mt-2">
                        <select
                            id="serviceCategory"
                            name="serviceCategory"
                            value={formData.serviceCategory}
                            onChange={handleInputChange}
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
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-slate-900">
                      Project Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="description"
                        id="description"
                        rows={6}
                        placeholder="Please describe your project in detail..."
                        value={formData.description}
                        onChange={handleInputChange}
                        required
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
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} multiple />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-slate-600">PDF, STEP, DXF, STL, PNG, JPG (MAX. 25MB)</p>
                        {files.length > 0 && (
                            <div className="mt-4 text-sm text-slate-500">
                                {files.map(file => file.name).join(', ')}
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-900/10">
                <div className="flex items-center justify-end gap-x-6">
                    {status === 'submitting' && <p className="text-slate-500">Submitting...</p>}
                    {status === 'success' && <p className="text-green-500">Request submitted successfully!</p>}
                    {status === 'error' && <p className="text-red-500">{error || 'An unexpected error occurred. Please try again.'}</p>}
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                    >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                    </button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
