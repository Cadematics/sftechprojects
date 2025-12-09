import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const QuoteRequestsTable = () => {
  const [quoteRequests, setQuoteRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Admin: Starting to fetch quoteRequests...");
    setError(null);

    const q = query(collection(db, 'quoteRequests'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("Admin: Query executed.");
      const requests = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(`Admin: Received ${requests.length} documents.`);
      setQuoteRequests(requests);
      setFilteredRequests(requests);
    }, (err) => {
      console.error("Admin: Query error:", err);
      setError(`Failed to fetch quote requests: ${err.message}`);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let filtered = quoteRequests;

    if (searchTerm) {
      filtered = filtered.filter(req =>
        (req.name && req.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (req.email && req.email.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (serviceFilter) {
      filtered = filtered.filter(req => req.serviceCategory === serviceFilter);
    }

    if (statusFilter) {
        filtered = filtered.filter(req => req.status === statusFilter);
    }


    setFilteredRequests(filtered);
  }, [searchTerm, serviceFilter, statusFilter, quoteRequests]);

  const handleViewDetails = (id) => {
    navigate(`/admin/quote/${id}`);
  };
  
  const truncate = (str, n) => {
    if (!str) return "";
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp.seconds * 1000).toLocaleDateString();
  };
  
  const serviceCategories = [...new Set(quoteRequests.map(req => req.serviceCategory))];

  const statusColors = {
    new: 'bg-blue-200 text-blue-800',
    'in-review': 'bg-yellow-200 text-yellow-800',
    completed: 'bg-green-200 text-green-800',
    archived: 'bg-gray-200 text-gray-800',
  };


  return (
    <div className="bg-white shadow rounded-lg p-5">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="p-2 border rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          onChange={(e) => setServiceFilter(e.target.value)}
          value={serviceFilter}
        >
          <option value="">All Services</option>
          {serviceCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
            className="p-2 border rounded"
            onChange={(e) => setStatusFilter(e.target.value)}
            value={statusFilter}
        >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="in-review">In Review</option>
            <option value="completed">Completed</option>
            <option value="archived">Archived</option>
        </select>

      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="relative px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRequests.map(request => (
              <tr key={request.id} onClick={() => handleViewDetails(request.id)} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">{request.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.serviceCategory}</td>
                <td className="px-6 py-4 whitespace-nowrap">{truncate(request.description, 80)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formatDate(request.createdAt)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.attachments ? request.attachments.length : 0} files</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[request.status] || 'bg-gray-200 text-gray-800'}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <span className="text-indigo-600 hover:text-indigo-900">View</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuoteRequestsTable;
