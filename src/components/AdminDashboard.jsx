import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import QuoteRequestsTable from './QuoteRequestsTable';

const AdminDashboard = ({ user }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                BayLabTech Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                You are logged in as: {user ? user.email : ''}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6">
              <QuoteRequestsTable />

              {/* Messages Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">
                    Messages
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Placeholder for messages content.
                    </p>
                  </div>
                </div>
              </div>

              {/* Files Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">
                    Files
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Placeholder for files content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
