import React, { useState } from 'react';
import { useData } from '../context/DataContext';

function Settings() {
  const { data } = useData();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'chronicle26_data.json';
    link.click();
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      localStorage.removeItem('chronicle_admin_data');
      window.location.reload();
    }
  };

  const stats = [
    { label: 'Total Jobs', value: data.jobs.length },
    { label: 'Total Skills', value: data.skills.length },
    { label: 'Total Roadmaps', value: data.roadmaps.length },
    { label: 'Total Bulletins', value: data.bulletins.length },
    { label: 'Total Countries', value: data.countries.length },
    { label: 'Total Internships', value: data.internships.length },
    { label: 'Total Templates', value: data.templates.length },
    { label: 'Total Prompts', value: data.prompts.length }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-admin-dark">System configuration and data management</p>
      </div>

      {showSuccess && (
        <div className="admin-card bg-admin-green text-white mb-6">
          <p className="font-bold">✓ Data exported successfully!</p>
        </div>
      )}

      {/* System Info */}
      <div className="admin-card mb-6">
        <h2 className="font-bold text-xl mb-4 border-b-2 border-admin-black pb-2">
          System Information
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-admin-white border-2 border-admin-black p-3">
              <p className="text-2xl font-bold text-admin-blue">{stat.value}</p>
              <p className="text-sm text-admin-dark">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Management */}
      <div className="admin-card mb-6">
        <h2 className="font-bold text-xl mb-4 border-b-2 border-admin-black pb-2">
          Data Management
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-admin-white border-2 border-admin-black">
            <div>
              <h3 className="font-bold mb-1">Export Data</h3>
              <p className="text-sm text-admin-dark">Download all data as JSON file</p>
            </div>
            <button onClick={handleExport} className="admin-btn-primary">
              EXPORT DATA
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-admin-white border-2 border-admin-black">
            <div>
              <h3 className="font-bold mb-1">Clear All Data</h3>
              <p className="text-sm text-admin-dark">Remove all data from localStorage</p>
            </div>
            <button onClick={handleClearData} className="admin-btn-danger">
              CLEAR DATA
            </button>
          </div>
        </div>
      </div>

      {/* Admin Info */}
      <div className="admin-card">
        <h2 className="font-bold text-xl mb-4 border-b-2 border-admin-black pb-2">
          Admin Information
        </h2>
        <div className="space-y-2">
          <p className="font-sans text-sm">
            <strong>Username:</strong> admin
          </p>
          <p className="font-sans text-sm">
            <strong>Email:</strong> admin@chronicle26.com
          </p>
          <p className="font-sans text-sm">
            <strong>Version:</strong> 1.0.0
          </p>
          <p className="font-sans text-sm">
            <strong>Last Login:</strong> {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
