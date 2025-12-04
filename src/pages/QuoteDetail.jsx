
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const QuoteDetail = () => {
  const { id } = useParams(); // Get the quote ID from the URL
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Reference to the specific document
    const docRef = doc(db, 'quoteRequests', id);

    // Listen for real-time updates to the document
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setQuote({ id: docSnap.id, ...docSnap.data() });
        setLoading(false);
      } else {
        setError('Quote not found.');
        setLoading(false);
      }
    }, (err) => {
      console.error("Error fetching document: ", err);
      setError('Failed to fetch quote details.');
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  if (!quote) {
    return null; // Or a 'not found' message
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin" className="text-sm font-medium text-primary hover:text-primary-dark">
                &larr; Back to Dashboard
            </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-slate-200">
            <h1 className="text-3xl font-bold text-slate-900">Quote Request Details</h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-500">Request ID: {quote.id}</p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-slate-500">Full Name</dt>
                <dd className="mt-1 text-sm text-slate-900">{quote.name}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-slate-500">Email Address</dt>
                <dd className="mt-1 text-sm text-slate-900">{quote.email}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-slate-500">Service Category</dt>
                <dd className="mt-1 text-sm text-slate-900">{quote.serviceCategory}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-slate-500">Date Received</dt>
                <dd className="mt-1 text-sm text-slate-900">
                    {quote.createdAt ? quote.createdAt.toDate().toLocaleString() : 'N/A'}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-slate-500">Project Description</dt>
                <dd className="mt-1 text-sm text-slate-900 whitespace-pre-wrap">{quote.description}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-slate-500">Attachments</dt>
                <dd className="mt-1 text-sm text-slate-900">
                  {quote.attachments && quote.attachments.length > 0 ? (
                    <ul className="border border-slate-200 rounded-md divide-y divide-slate-200">
                      {quote.attachments.map((file, index) => (
                        <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <svg className="flex-shrink-0 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <a href={file.data} download={file.name} className="font-medium text-primary hover:text-primary-dark">
                              Download
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No attachments were uploaded with this request.</p>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDetail;
