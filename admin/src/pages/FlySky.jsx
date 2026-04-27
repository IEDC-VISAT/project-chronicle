import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Table from '../components/Table';
import Modal from '../components/Modal';

function FlySky() {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [activeTab, setActiveTab] = useState('countries');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    flag: '',
    description: '',
    requirements: '',
    exams: '',
    tuition: '',
    living: '',
    total: '',
    workRights: '',
    organization: '',
    type: 'Remote',
    duration: '',
    stipend: '',
    eligibility: '',
    applicationPeriod: '',
    website: ''
  });

  const handleEdit = (item, type) => {
    setEditingItem({ ...item, type });
    setFormData({
      ...item,
      requirements: Array.isArray(item.requirements) ? item.requirements.join('\n') : '',
      exams: Array.isArray(item.exams) 
        ? item.exams.map(e => `${e.name}|${e.score}|${e.type}`).join('\n')
        : ''
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id, type) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(type, id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const type = activeTab === 'countries' ? 'countries' : 'internships';

    let itemData = { ...formData };

    if (activeTab === 'countries') {
      itemData = {
        ...formData,
        requirements: formData.requirements.split('\n').filter(r => r.trim()),
        exams: formData.exams.split('\n').filter(e => e.trim()).map(line => {
          const [name, score, type] = line.split('|');
          return { name: name?.trim() || '', score: score?.trim() || '', type: type?.trim() || '' };
        }),
        costOverview: {
          tuition: formData.tuition,
          living: formData.living,
          total: formData.total
        }
      };
    }

    if (editingItem) {
      updateItem(type, editingItem.id, itemData);
    } else {
      addItem(type, itemData);
    }

    setIsModalOpen(false);
    setEditingItem(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      flag: '',
      description: '',
      requirements: '',
      exams: '',
      tuition: '',
      living: '',
      total: '',
      workRights: '',
      organization: '',
      type: 'Remote',
      duration: '',
      stipend: '',
      eligibility: '',
      applicationPeriod: '',
      website: ''
    });
  };

  const countryColumns = [
    { 
      key: 'flag', 
      label: 'Flag',
      render: (value) => <span className="text-2xl">{value}</span>
    },
    { key: 'name', label: 'Country' },
    { 
      key: 'description', 
      label: 'Description',
      render: (value) => value.substring(0, 60) + '...'
    }
  ];

  const internshipColumns = [
    { key: 'name', label: 'Program Name' },
    { key: 'organization', label: 'Organization' },
    { key: 'type', label: 'Type' },
    { key: 'duration', label: 'Duration' }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">FlySky Manager</h1>
          <p className="text-admin-dark">Manage study abroad and international internships</p>
        </div>
        <button
          onClick={() => {
            setEditingItem(null);
            resetForm();
            setIsModalOpen(true);
          }}
          className="admin-btn-primary"
        >
          + ADD NEW {activeTab === 'countries' ? 'COUNTRY' : 'INTERNSHIP'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('countries')}
          className={`admin-btn ${activeTab === 'countries' ? 'bg-admin-blue text-white' : ''}`}
        >
          Study Abroad Countries
        </button>
        <button
          onClick={() => setActiveTab('internships')}
          className={`admin-btn ${activeTab === 'internships' ? 'bg-admin-blue text-white' : ''}`}
        >
          International Internships
        </button>
      </div>

      <div className="admin-card">
        {activeTab === 'countries' ? (
          <Table
            columns={countryColumns}
            data={data.countries}
            onEdit={(item) => handleEdit(item, 'countries')}
            onDelete={(id) => handleDelete(id, 'countries')}
          />
        ) : (
          <Table
            columns={internshipColumns}
            data={data.internships}
            onEdit={(item) => handleEdit(item, 'internships')}
            onDelete={(id) => handleDelete(id, 'internships')}
          />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? `Edit ${activeTab === 'countries' ? 'Country' : 'Internship'}` : `Add New ${activeTab === 'countries' ? 'Country' : 'Internship'}`}
      >
        <form onSubmit={handleSubmit}>
          {activeTab === 'countries' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-bold mb-2 text-sm">Country Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="admin-input"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-sm">Flag Emoji *</label>
                  <input
                    type="text"
                    value={formData.flag}
                    onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
                    className="admin-input"
                    placeholder="🇺🇸"
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
                  rows="3"
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
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Exams (format: Name|Score|Type, one per line)</label>
                <textarea
                  value={formData.exams}
                  onChange={(e) => setFormData({ ...formData, exams: e.target.value })}
                  className="admin-input"
                  rows="4"
                  placeholder="TOEFL|100+|English Proficiency"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block font-bold mb-2 text-sm">Tuition</label>
                  <input
                    type="text"
                    value={formData.tuition}
                    onChange={(e) => setFormData({ ...formData, tuition: e.target.value })}
                    className="admin-input"
                    placeholder="$20,000 - $50,000/year"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-sm">Living Expenses</label>
                  <input
                    type="text"
                    value={formData.living}
                    onChange={(e) => setFormData({ ...formData, living: e.target.value })}
                    className="admin-input"
                    placeholder="$10,000 - $18,000/year"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-sm">Total Cost</label>
                  <input
                    type="text"
                    value={formData.total}
                    onChange={(e) => setFormData({ ...formData, total: e.target.value })}
                    className="admin-input"
                    placeholder="$30,000 - $68,000/year"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Work Rights</label>
                <input
                  type="text"
                  value={formData.workRights}
                  onChange={(e) => setFormData({ ...formData, workRights: e.target.value })}
                  className="admin-input"
                  placeholder="20 hours/week during semester"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Program Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="admin-input"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-bold mb-2 text-sm">Organization *</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="admin-input"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-sm">Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="admin-input"
                    required
                  >
                    <option value="Remote">Remote</option>
                    <option value="In-person">In-person</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-bold mb-2 text-sm">Duration *</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="admin-input"
                    placeholder="12 weeks"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-sm">Stipend</label>
                  <input
                    type="text"
                    value={formData.stipend}
                    onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                    className="admin-input"
                    placeholder="$5,000"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="admin-input"
                  rows="3"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Eligibility</label>
                <textarea
                  value={formData.eligibility}
                  onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
                  className="admin-input"
                  rows="2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-bold mb-2 text-sm">Application Period</label>
                  <input
                    type="text"
                    value={formData.applicationPeriod}
                    onChange={(e) => setFormData({ ...formData, applicationPeriod: e.target.value })}
                    className="admin-input"
                    placeholder="March - April"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-sm">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="admin-input"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex gap-2">
            <button type="submit" className="admin-btn-primary flex-1">
              {editingItem ? 'UPDATE' : 'ADD'}
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

export default FlySky;
