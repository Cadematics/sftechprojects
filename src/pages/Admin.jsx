
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const quoteRequestsData = [
  {
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    serviceCategory: 'Structural Engineering',
    dateReceived: '2023-10-26',
    status: 'Completed',
  },
  {
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    serviceCategory: 'MEP Design',
    dateReceived: '2023-10-25',
    status: 'In Progress',
  },
  {
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    serviceCategory: 'Civil Engineering',
    dateReceived: '2023-10-24',
    status: 'New',
  },
  {
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    serviceCategory: 'Geotechnical Services',
    dateReceived: '2023-10-23',
    status: 'New',
  },
  {
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    serviceCategory: 'Construction Management',
    dateReceived: '2023-10-22',
    status: 'New',
  },
];

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
      badgeStyle = 'bg-blue-100 text-blue-800';
      break;
    default:
      badgeStyle = 'bg-gray-100 text-gray-800';
  }
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${badgeStyle}`}>
      {status}
    </span>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('quotes');

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
                    {quoteRequestsData.map((request) => (
                      <tr key={request.email}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{request.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{request.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{request.serviceCategory}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{request.dateReceived}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <StatusBadge status={request.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to="#" className="text-primary hover:text-primary-dark">View Details</Link>
                        </td>
                      </tr>
                    ))}
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
