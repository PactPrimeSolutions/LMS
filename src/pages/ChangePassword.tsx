import React, { useState } from 'react';
import { Lock, Home } from 'lucide-react';

const ChangePassword: React.FC = () => {
  const [formData, setFormData] = useState({
    old_password: '',
    new_password1: '',
    new_password2: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password change submitted:', formData);
    setFormData({ old_password: '', new_password1: '', new_password2: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <nav className="flex items-center text-sm font-medium text-gray-500 mb-4">
          <a href="/profile" className="hover:text-blue-600 flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Profile
          </a>
          <span className="mx-2">/</span>
          <span className="text-blue-600">Password Change</span>
        </nav>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <Lock className="w-5 h-5 mr-2 text-blue-500" />
              Change Password
            </h2>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="old_password" className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  name="old_password"
                  id="old_password"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={formData.old_password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="new_password1" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  name="new_password1"
                  id="new_password1"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={formData.new_password1}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="new_password2" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="new_password2"
                  id="new_password2"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={formData.new_password2}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
