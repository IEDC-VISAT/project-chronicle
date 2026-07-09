import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Table from '../components/Table';
import Modal from '../components/Modal';

function Jobs() {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    type: 'Job',
    location: '',
    domain: '',
    description: '',
    requirements: '',
    responsibilities: '',
    apply_link: '',
    urgent: false
  });

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      ...job,
      // API returns arrays; convert to newline strings for textarea
      requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : '',
      responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.join('\n') : '',
      // API returns snake_case; map to form field
      apply_link: job.apply_link || '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      deleteItem('jobs', id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      title: formData.title,
      company: formData.company,
      type: formData.type,
      location: formData.location,
      domain: formData.domain,
      description: formData.description,
      urgent: formData.urgent,
      apply_link: formData.apply_link,
      requirements: formData.requirements.split('\n').filter(r => r.trim()),
      responsibilities: formData.responsibilities.split('\n').filter(r => r.trim()),
    };

    if (editingJob) {
      updateItem('jobs', editingJob.id, jobData);
    } else {
      addItem('jobs', jobData);
    }

    setIsModalOpen(false);
    setEditingJob(null);
    setFormData({
      title: '',
      company: '',
      type: 'Job',
      location: '',
      domain: '',
      description: '',
      requirements: '',
      responsibilities: '',
      apply_link: '',
      urgent: false
    });
  };

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'company', label: 'Company' },
    { 
      key: 'type', 
      label: 'Type',
      render: (value) => (
        <span className={`px-2 py-1 text-xs border-2 border-admin-black ${
          value === 'Internship' ? 'bg-admin-blue text-white' : 'bg-admin-dark text-white'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'location', label: 'Location' },
    { key: 'domain', label: 'Domain' }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Jobs & Internships</h1>
          <p className="text-admin-dark">Add, edit, or remove job listings</p>
        </div>
        <button
          onClick={() => {
            setEditingJob(null);
            setFormData({
              title: '',
              company: '',
              type: 'Job',
              location: '',
              domain: '',
              description: '',
              requirements: '',
              responsibilities: '',
              applyLink: '',
              urgent: false
            });
            setIsModalOpen(true);
          }}
          className="admin-btn-primary"
        >
          + ADD NEW JOB
        </button>
      </div>

      <div className="admin-card">
        <Table
          columns={columns}
          data={data.jobs}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingJob ? 'Edit Job' : 'Add New Job'}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-bold mb-2 text-sm">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="admin-input"
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">Company *</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="admin-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block font-bold mb-2 text-sm">Type *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="admin-input"
                required
              >
                <option value="Job">Full-Time Job</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">Location *</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="admin-input"
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">Domain *</label>
              <input
                type="text"
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="admin-input"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="admin-input"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Requirements (one per line)</label>
            <textarea
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              className="admin-input"
              rows="4"
              placeholder="Enter each requirement on a new line"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Responsibilities (one per line)</label>
            <textarea
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              className="admin-input"
              rows="4"
              placeholder="Enter each responsibility on a new line"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Apply Link</label>
            <input
              type="url"
              value={formData.apply_link}
              onChange={(e) => setFormData({ ...formData, apply_link: e.target.value })}
              className="admin-input"
              placeholder="https://example.com/apply"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.urgent}
                onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="font-bold text-sm">Mark as Urgent/Breaking</span>
            </label>
          </div>

          <div className="flex gap-2">
            <button type="submit" className="admin-btn-primary flex-1">
              {editingJob ? 'UPDATE JOB' : 'ADD JOB'}
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="admin-btn"
            >
              CANCEL
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Jobs;
