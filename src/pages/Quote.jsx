import React, { useState } from 'react';
import { collection, addDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
  const [debugUrl, setDebugUrl] = useState(''); // New state for the debug URL

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleTestUpload = async () => {
    setDebugUrl('Testing...');
    setError(null);
    try {
      // 1. Create dummy Firestore document
      console.log("RequestQuote (Debug): Creating test document...");
      const docRef = await addDoc(collection(db, 'quoteRequests'), {
        name: "Storage Test",
        email: "storage@test.local",
        serviceCategory: "Test",
        description: "Testing Storage upload",
        createdAt: serverTimestamp(),
        status: "test",
        fileUrls: [],
      });
      console.log(`RequestQuote (Debug): Test document created with ID = ${docRef.id}`);

      // 2. Upload dummy file
      console.log("RequestQuote (Debug): Uploading test file...");
      const dummyFile = new Blob(['Hello from debug upload'], { type: 'text/plain' });
      const storageRef = ref(storage, `quoteRequests/${docRef.id}/uploads/debug.txt`);
      await uploadBytes(storageRef, dummyFile);
       console.log("RequestQuote (Debug): Test file uploaded successfully.");

      // 3. Get download URL
      console.log("RequestQuote (Debug): Getting download URL...");
      const downloadURL = await getDownloadURL(storageRef);
      console.log(`RequestQuote (Debug): Got download URL: ${downloadURL}`);

      // 4. Save URL to Firestore
      console.log("RequestQuote (Debug): Updating test document with URL...");
      await updateDoc(docRef, {
        fileUrls: [downloadURL],
      });
      console.log("RequestQuote (Debug): Test document updated.");

      // 5. Display URL
      setDebugUrl(downloadURL);
    } catch (error) {
      console.error('RequestQuote (Debug) ERROR:', error);
      const errorMessage = `Debug Error: ${error.message}`;
      setError(errorMessage);
      setDebugUrl('');
      setStatus('error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    if (formData.name === '' || formData.email === '' || formData.description === '') {
      const errorMessage = 'Please fill out all required fields.';
      console.error(`RequestQuote ERROR: ${errorMessage}`);
      setError(errorMessage);
      setStatus('error');
      return;
    }

    let docRef;

    try {
      console.log("RequestQuote: Creating Firestore document...");
      docRef = await addDoc(collection(db, 'quoteRequests'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        fileUrls: [],
      });
      console.log(`RequestQuote: Document created with ID = ${docRef.id}`);

      const fileUrls = [];
      const uploadPromises = files.map(async (file) => {
        const storageRef = ref(storage, `quoteRequests/${docRef.id}/uploads/${file.name}`);
        let downloadURL;

        try {
          console.log(`RequestQuote: Uploading file ${file.name}...`);
          await uploadBytes(storageRef, file);
          console.log(`RequestQuote: Upload success for ${file.name}`);

          console.log(`RequestQuote: Getting download URL for ${file.name}`);
          downloadURL = await getDownloadURL(storageRef);
          fileUrls.push(downloadURL);
          console.log(`RequestQuote: URL for ${file.name} is ${downloadURL}`);
        } catch (uploadError) {
            const errorMessage = `Failed to upload ${file.name}: ${uploadError.message}`;
            console.error(`RequestQuote ERROR: ${errorMessage}`);
            throw new Error('There was a problem uploading your files. Please try again or contact support.');
        }
      });

      await Promise.all(uploadPromises);
      console.log("RequestQuote: All uploads completed");

      if (fileUrls.length > 0) {
        console.log("RequestQuote: Updating Firestore document with all file URLs...");
        await updateDoc(docRef, { fileUrls: fileUrls });
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        serviceCategory: 'Product Development',
        description: '',
      });
      setFiles([]);

    } catch (err) {
        const finalErrorMessage = err.message || 'An unexpected error occurred.';
        console.error(`RequestQuote ERROR: ${finalErrorMessage}`);
        setError(finalErrorMessage);
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
                {/* <div className="mb-4 p-4 border border-dashed border-yellow-500 rounded-md">
                    <div className="flex items-center justify-between gap-x-6 ">
                        <button
                            type="button"
                            onClick={handleTestUpload}
                            className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                        >
                            Test Storage Upload
                        </button>
                        {debugUrl && (
                            <div className="text-sm overflow-x-auto">
                                <strong>Debug URL:</strong> <a href={debugUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 break-all">{debugUrl}</a>
                            </div>
                        )}
                    </div>
                </div>

                {status === 'success' && (
                    <div className="mb-4 rounded-md bg-green-50 p-4">
                        <div className="flex">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-green-800">Thank you! Your quote request has been submitted.</p>
                            </div>
                        </div>
                    </div>
                )}
                {status === 'error' && error && (
                    <div className="mb-4 rounded-md bg-red-50 p-4">
                        <div className="flex">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-red-800">{error}</p>
                            </div>
                        </div>
                    </div>
                )} */}
                <div className="flex items-center justify-end gap-x-6">
                    {status === 'submitting' && <p className="text-slate-500">Submitting...</p>}
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
