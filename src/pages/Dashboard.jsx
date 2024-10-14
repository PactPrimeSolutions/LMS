import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <div className="space-y-6">
        <AnnouncementCard />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard title="Currently Watching" content="Module-1" />
          <DashboardCard title="Course Completion" content="50%" />
          <DashboardCard title="Upcoming Assessments" content="3" />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-blue-600">{content}</p>
    </div>
  );
}

function AnnouncementCard() {
  return (
    <div className="bg-yellow-100 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-yellow-800">Updates For You</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
          <p className="text-yellow-800">New course material available for Module-2</p>
        </div>
        <div className="flex items-start">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
          <p className="text-yellow-800">Upcoming webinar on Advanced Topics next week</p>
        </div>
      </div>
    </div>
  );
}