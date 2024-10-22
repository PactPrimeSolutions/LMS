import React, { useState } from 'react';

interface Employee {
  id: number;
  name: string;
  email: string;
}

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = employees.length + 1;
    setEmployees(prev => [...prev, { id, name: newEmployee.name, email: newEmployee.email }]);
    setNewEmployee({ name: '', email: '', password: '' });
  };

  const handleRemoveEmployee = (id: number) => {
    setEmployees(prev => prev.filter(employee => employee.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">Employee Management</h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Add Employee Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="p-8 bg-blue-900">
                <h2 className="text-3xl font-semibold mb-6 text-white">Add Employee</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-100">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newEmployee.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-blue-50 text-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newEmployee.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-blue-50 text-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-blue-100">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={newEmployee.password}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-blue-50 text-blue-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Add Employee
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Employee List */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-6 text-blue-900">Employee List</h2>
                {employees.length === 0 ? (
                  <p className="text-blue-600">No employees added yet.</p>
                ) : (
                  <ul className="space-y-4">
                    {employees.map(employee => (
                      <li key={employee.id} className="bg-blue-50 shadow-md rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-lg hover:bg-blue-100 relative">
                        <h3 className="font-semibold text-lg text-blue-800">{employee.name}</h3>
                        <p className="text-blue-600">{employee.email}</p>
                        <button
                          onClick={() => handleRemoveEmployee(employee.id)}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
                          aria-label={`Remove ${employee.name}`}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}