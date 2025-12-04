
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const StatusBadge = ({ status }) => {
  let badgeStyle = '';
  switch (status) {
    case 'Completed':
      badgeStyle = 'bg-green-100 text-green-800';
      break;
    case 'In Progress':
      badgeStyle = 'bg-yellow-100 text-yellow-800';
      break;
    case 'New':
    default:
      badgeStyle = 'bg-blue-100 text-blue-800';
  }
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${badgeStyle}`}>
      {status || 'New'}
    </span>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('quotes');
  const [quoteRequests, setQuoteRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (activeTab === 'quotes') {
      setLoading(true);
      // Query to get quote requests, ordered by creation date
      const q = query(collection(db, 'quoteRequests'), orderBy('createdAt', 'desc'));

      // onSnapshot listens for real-time updates
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const requestsData = [];
        querySnapshot.forEach((doc) => {
          requestsData.push({ id: doc.id, ...doc.data() });
        });
        setQuoteRequests(requestsData);
        setLoading(false);
      }, (error) => {
        console.error("Error fetching quote requests: ", error);
        setLoading(false);
      });

      // Cleanup subscription on component unmount
      return () => unsubscribe();
    }
  }, [activeTab]);

  // Filter requests based on search term
  const filteredRequests = quoteRequests.filter(request =>
    (request.name && request.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (request.email && request.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (request.serviceCategory && request.serviceCategory.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Admin Dashboard</h1>
          <p className="mt-4 text-lg text-slate-600">
            Manage all incoming quote requests and contact messages.
          </p>
        </header>

        <div className="mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('quotes')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'quotes'
                  ? 'bg-primary text-white'
                  : 'text-slate-600 bg-white hover:bg-slate-100'
              }`}
            >
              Quote Requests
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'contacts'
                  ? 'bg-primary text-white'
                  : 'text-slate-600 bg-white hover:bg-slate-100'
              }`}
            >
              Contact Messages
            </button>
          </div>
        </div>
        
        <div className="mb-8">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search by name, email, or service..."
                    className="block w-full bg-white border border-slate-300 rounded-md py-3 pl-10 pr-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {activeTab === 'quotes' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                 <h2 className="text-2xl font-bold text-slate-900">Latest Quote Requests</h2>
            </div>
            <div className="border-t border-slate-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Service Category</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date Received</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">View Details</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {loading ? (
                        <tr><td colSpan="6" className="text-center py-8 text-slate-500">Loading requests...</td></tr>
                    ) : filteredRequests.length > 0 ? (
                      filteredRequests.map((request) => (
                        <tr key={request.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{request.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{request.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{request.serviceCategory}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                            {request.createdAt ? request.createdAt.toDate().toLocaleDateString() : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <StatusBadge status={request.status} />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/admin/quote/${request.id}`} className="text-primary hover:text-primary-dark">View Details</Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                        <tr><td colSpan="6" className="text-center py-8 text-slate-500">No quote requests found.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'contacts' && (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-2xl font-bold text-slate-900">Contact Messages</h2>
                </div>
                 <div className="border-t border-slate-200 p-8 text-center text-slate-500">
                    <p>Contact message functionality is not yet implemented.</p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
