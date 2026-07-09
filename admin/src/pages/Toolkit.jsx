import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Table from '../components/Table';
import Modal from '../components/Modal';

function Toolkit() {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [activeTab, setActiveTab] = useState('templates');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    // Template fields (snake_case to match API)
    name: '',
    description: '',
    style: '',
    best_for: '',
    download_url: '',
    // Prompt fields
    title: '',
    category: '',
    prompt_text: '',
    usage: ''
  });

  const handleEdit = (item, type) => {
    setEditingItem({ ...item, type });
    // Map API snake_case fields into form state
    setFormData({
      name: item.name || '',
      description: item.description || '',
      style: item.style || '',
      best_for: item.best_for || '',
      download_url: item.download_url || '',
      title: item.title || '',
      category: item.category || '',
      prompt_text: item.prompt_text || '',
      usage: item.usage || '',
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
    const type = activeTab === 'templates' ? 'templates' : 'prompts';

    let payload;
    if (type === 'templates') {
      payload = {
        name: formData.name,
        description: formData.description,
        style: formData.style,
        best_for: formData.best_for,
        download_url: formData.download_url,
      };
    } else {
      payload = {
        title: formData.title,
        category: formData.category,
        prompt_text: formData.prompt_text,
        usage: formData.usage,
      };
    }

    if (editingItem) {
      updateItem(type, editingItem.id, payload);
    } else {
      addItem(type, payload);
    }

    setIsModalOpen(false);
    setEditingItem(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '', description: '', style: '', best_for: '', download_url: '',
      title: '', category: '', prompt_text: '', usage: ''
    });
  };

  const templateColumns = [
    { key: 'name', label: 'Template Name' },
    { key: 'description', label: 'Description', render: v => (v || '').substring(0, 60) + '...' },
    { key: 'best_for', label: 'Best For' }
  ];

  const promptColumns = [
    { key: 'title', label: 'Prompt Title' },
    { key: 'category', label: 'Category' },
    {
      key: 'prompt_text',
      label: 'Prompt',
      render: (value) => (value || '').substring(0, 80) + '...'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Toolkit Manager</h1>
          <p className="text-admin-dark">Manage resume templates and AI prompts</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); resetForm(); setIsModalOpen(true); }}
          className="admin-btn-primary"
        >
          + ADD NEW {activeTab === 'templates' ? 'TEMPLATE' : 'PROMPT'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('templates')} className={`admin-btn ${activeTab === 'templates' ? 'bg-admin-blue text-white' : ''}`}>
          Resume Templates
        </button>
        <button onClick={() => setActiveTab('prompts')} className={`admin-btn ${activeTab === 'prompts' ? 'bg-admin-blue text-white' : ''}`}>
          Prompt Library
        </button>
      </div>

      <div className="admin-card">
        {activeTab === 'templates' ? (
          <Table
            columns={templateColumns}
            data={data.templates}
            onEdit={(item) => handleEdit(item, 'templates')}
            onDelete={(id) => handleDelete(id, 'templates')}
          />
        ) : (
          <Table
            columns={promptColumns}
            data={data.prompts}
            onEdit={(item) => handleEdit(item, 'prompts')}
            onDelete={(id) => handleDelete(id, 'prompts')}
          />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem
          ? `Edit ${activeTab === 'templates' ? 'Template' : 'Prompt'}`
          : `Add New ${activeTab === 'templates' ? 'Template' : 'Prompt'}`}
      >
        <form onSubmit={handleSubmit}>
          {activeTab === 'templates' ? (
            <>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Template Name *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="admin-input" required />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Description *</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="admin-input" rows="3" required />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Style</label>
                <input type="text" value={formData.style} onChange={(e) => setFormData({ ...formData, style: e.target.value })} className="admin-input" placeholder="e.g. Modern, Classic" />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Best For</label>
                <input type="text" value={formData.best_for} onChange={(e) => setFormData({ ...formData, best_for: e.target.value })} className="admin-input" placeholder="e.g. Software Engineers" />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Download URL</label>
                <input type="url" value={formData.download_url} onChange={(e) => setFormData({ ...formData, download_url: e.target.value })} className="admin-input" placeholder="https://..." />
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Prompt Title *</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="admin-input" required />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Category *</label>
                <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="admin-input" required>
                  <option value="">Select Category</option>
                  <option value="Career">Career</option>
                  <option value="Technical">Technical</option>
                  <option value="Professional Branding">Professional Branding</option>
                  <option value="Skill Development">Skill Development</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Prompt Text *</label>
                <textarea value={formData.prompt_text} onChange={(e) => setFormData({ ...formData, prompt_text: e.target.value })} className="admin-input" rows="8" required />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-sm">Usage Instructions</label>
                <textarea value={formData.usage} onChange={(e) => setFormData({ ...formData, usage: e.target.value })} className="admin-input" rows="3" />
              </div>
            </>
          )}

          <div className="flex gap-2">
            <button type="submit" className="admin-btn-primary flex-1">{editingItem ? 'UPDATE' : 'ADD'}</button>
            <button type="button" onClick={() => setIsModalOpen(false)} className="admin-btn">CANCEL</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Toolkit;
