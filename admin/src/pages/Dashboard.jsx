import React from 'react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';

function Dashboard() {
  const { data } = useData();

  const stats = [
    { label: 'Total Jobs', value: data.jobs.length, icon: '💼', color: 'bg-admin-blue', link: '/jobs' },
    { label: 'Total Skills', value: data.skills.length, icon: '📘', color: 'bg-admin-green', link: '/skills' },
    { label: 'Total Roadmaps', value: data.roadmaps.length, icon: '🗺️', color: 'bg-admin-dark', link: '/roadmaps' },
    { label: 'Total Bulletins', value: data.bulletins.length, icon: '📢', color: 'bg-admin-red', link: '/bulletins' }
  ];

  const recentActivity = [
    { action: 'System initialized', time: 'Just now', type: 'info' },
    { action: 'Admin logged in', time: 'Just now', type: 'success' }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-admin-dark">Overview of Chronicle'26 content management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Link
            key={index}
            to={stat.link}
            className="admin-card hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all no-underline"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">{stat.icon}</span>
              <div className={`${stat.color} text-white px-3 py-1 border-2 border-admin-black font-bold text-2xl`}>
                {stat.value}
              </div>
            </div>
            <h3 className="font-bold text-lg">{stat.label}</h3>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="admin-card">
        <h2 className="font-bold text-xl mb-4 border-b-2 border-admin-black pb-2">
          Recent Activity
        </h2>
        <div className="space-y-2">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-admin-white border-2 border-admin-black"
            >
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${
                  activity.type === 'success' ? 'bg-admin-green' : 'bg-admin-blue'
                }`}></span>
                <span className="font-sans text-sm">{activity.action}</span>
              </div>
              <span className="text-xs text-admin-dark">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-card mt-6">
        <h2 className="font-bold text-xl mb-4 border-b-2 border-admin-black pb-2">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/jobs" className="admin-btn-primary text-center no-underline">
            + ADD NEW JOB
          </Link>
          <Link to="/skills" className="admin-btn-primary text-center no-underline">
            + ADD NEW SKILL
          </Link>
          <Link to="/bulletins" className="admin-btn-primary text-center no-underline">
            + POST BULLETIN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
