import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const AdminQuoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quoteRequest, setQuoteRequest] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchQuoteRequest = async () => {
      const docRef = doc(db, 'quoteRequests', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setQuoteRequest(data);
        setStatus(data.status || 'new');
      } else {
        console.log('No such document!');
      }
    };

    fetchQuoteRequest();
  }, [id]);

  const handleStatusUpdate = async () => {
    const docRef = doc(db, 'quoteRequests', id);
    await updateDoc(docRef, { status });
    alert('Status updated successfully!');
  };
  
  const getFileName = (url) => {
    try {
      const pathSegment = url.split('/o/')[1];
      const filePath = pathSegment.split('?')[0];
      const decodedPath = decodeURIComponent(filePath);
      return decodedPath.split('/').pop();
    } catch (error) {
      console.error("Could not extract file name from url:", url, error);
      return 'unknown file';
    }
  };

  const getFileExtension = (fileName) => {
    if (!fileName || fileName === 'unknown file') return 'unknown';
    const parts = fileName.split('.');
    return parts.length > 1 ? parts.pop() : '';
  };


  if (!quoteRequest) {
    return <div>Loading...</div>;
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp.seconds * 1000).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <button onClick={() => navigate('/admin')} className="mb-4 text-indigo-600 hover:text-indigo-900">
                &larr; Back to All Requests
            </button>
            <h1 className="text-2xl font-bold mb-4">Quote Request Details</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div><strong>Name:</strong> {quoteRequest.name}</div>
                <div><strong>Email:</strong> {quoteRequest.email}</div>
                <div><strong>Service Category:</strong> {quoteRequest.serviceCategory}</div>
                <div><strong>Date:</strong> {formatDate(quoteRequest.createdAt)}</div>
            </div>

            <div className="mb-6">
                <strong>Description:</strong>
                <p className="mt-1 text-gray-700 whitespace-pre-wrap">{quoteRequest.description}</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Files</h2>
                {quoteRequest.attachments && quoteRequest.attachments.length > 0 ? (
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        {quoteRequest.attachments.map((url, index) => {
                            const fileName = getFileName(url);
                            const fileExtension = getFileExtension(fileName);
                            return (
                                <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                    <span className="ml-2 flex-1 w-0 truncate">{fileName} ({fileExtension})</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                    <a href={url} download={fileName} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-900">
                                        Download
                                    </a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>No files uploaded.</p>
                )}
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Update Status</h2>
                <div className="flex items-center">
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="p-2 border rounded-md">
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onClick={handleStatusUpdate} className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Update Status
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminQuoteDetail;
