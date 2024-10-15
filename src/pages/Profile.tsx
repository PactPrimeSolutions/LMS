import React, { useState } from 'react';
import { 
  UserCircle, 
  BookOpen, 
  User, 
  GraduationCap, 
  PhoneCall, 
  CalendarDays, 
  PenSquare, 
  Lock,
  Home,
  X,
  UserPlus
} from 'lucide-react';

export default function Component() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [user, setUser] = useState({
    is_authenticated: true,
    is_lecturer: true,
    is_student: false,
    is_superuser: true,
    get_full_name: "John Doe",
    picture: { url: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" },
    last_login: "2023-09-30",
    get_user_role: "Employee",
    first_name: "John",
    last_name: "Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
    date_joined: "2023-01-01",
    gender: "Male"
  });

  const [newEmployee, setNewEmployee] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const [courses, setCourses] = useState([
    { id: 1, title: "Introduction to React", get_absolute_url: "#" },
    { id: 2, title: "Advanced JavaScript", get_absolute_url: "#" },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleNewEmployeeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated user data:', user);
    setIsEditing(false);
  };

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New employee data:', newEmployee);
    setIsAddingEmployee(false);
    setNewEmployee({ first_name: '', last_name: '', email: '', password: '' });
  };

  if (!user.is_authenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto p-4">
        <nav className="flex items-center text-sm font-medium text-gray-500 mb-4">
          <a href="/profile" className="hover:text-blue-600 flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Profile
          </a>
          <span className="mx-2">/</span>
          <span className="text-blue-600">{isEditing ? 'Edit Profile' : user.first_name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <img 
                  src={user.picture.url}
                  alt={user.get_full_name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">{user.get_full_name}</h2>
                <p className="text-center text-gray-600 mb-4">{user.get_user_role}</p>
                <ul className="text-sm text-gray-600 mb-6">
                  <li className="mb-2"><strong>Last login: </strong>{new Date(user.last_login).toLocaleDateString()}</li>
                  <li><strong>Role: </strong>{user.get_user_role}</li>
                </ul>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsAddingEmployee(!isAddingEmployee)} 
                    className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 flex items-center justify-center"
                  >
                    <UserPlus className="w-4 h-4 mr-2" /> Add Employee
                  </button>
                  <button 
                    onClick={() => setIsEditing(!isEditing)} 
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                  >
                    {isEditing ? (
                      <>
                        <X className="w-4 h-4 mr-2" /> Cancel Edit
                      </>
                    ) : (
                      <>
                        <PenSquare className="w-4 h-4 mr-2" /> Edit Profile
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 space-y-6">
                {isAddingEmployee ? (
                  <form onSubmit={handleAddEmployee} className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Employee</h3>
                    <div>
                      <label htmlFor="new_first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        id="new_first_name"
                        name="first_name"
                        value={newEmployee.first_name}
                        onChange={handleNewEmployeeInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="new_last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        id="new_last_name"
                        name="last_name"
                        value={newEmployee.last_name}
                        onChange={handleNewEmployeeInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="new_email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="new_email"
                        name="email"
                        value={newEmployee.email}
                        onChange={handleNewEmployeeInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">Password</label>
                      <input
                        type="password"
                        id="new_password"
                        name="password"
                        value={newEmployee.password}
                        onChange={handleNewEmployeeInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                      Add Employee
                    </button>
                  </form>
                ) : isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={user.first_name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={user.last_name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={user.gender}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="picture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                      <input
                        type="file"
                        id="picture"
                        name="picture"
                        className="mt-1 block w-full"
                      />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                      Update Profile
                    </button>
                  </form>
                ) : (
                  <>
                    {user.is_lecturer && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-blue-500" /> My Courses
                        </h3>
                        {courses.length > 0 ? (
                          <ul className="list-disc pl-5 space-y-1">
                            {courses.map(course => (
                              <li key={course.id}>
                                <a href={course.get_absolute_url} className="text-blue-600 hover:underline">{course.title}</a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-red-500">No courses assigned!</p>
                        )}
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2 text-blue-500" /> Personal Info
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p><strong>First Name:</strong> {user.first_name}</p>
                        <p><strong>Last Name:</strong> {user.last_name}</p>
                        <p><strong>ID No.:</strong> {user.username}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <PhoneCall className="w-5 h-5 mr-2 text-blue-500" /> Contact Info
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone No.:</strong> {user.phone}</p>
                        <p><strong>Address:</strong> 
                          {user.address}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <CalendarDays className="w-5 h-5 mr-2 text-blue-500" /> Important Dates
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p><strong>Last login:</strong> {new Date(user.last_login).toLocaleString()}</p>
                        <p><strong>Registered Date:</strong> {new Date(user.date_joined).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}