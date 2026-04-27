import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Table from '../components/Table';
import Modal from '../components/Modal';

function Bulletins() {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBulletin, setEditingBulletin] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    urgent: false
  });

  const handleEdit = (bulletin) => {
    setEditingBulletin(bulletin);
    setFormData(bulletin);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this bulletin?')) {
      deleteItem('bulletins', id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bulletinData = {
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };

    if (editingBulletin) {
      updateItem('bulletins', editingBulletin.id, bulletinData);
    } else {
      addItem('bulletins', bulletinData);
    }

    setIsModalOpen(false);
    setEditingBulletin(null);
    setFormData({ title: '', content: '', urgent: false });
  };

  const columns = [
    { key: 'title', label: 'Title' },
    { 
      key: 'content', 
      label: 'Content',
      render: (value) => value.substring(0, 100) + (value.length > 100 ? '...' : '')
    },
    { key: 'date', label: 'Date' },
    { 
      key: 'urgent', 
      label: 'Status',
      render: (value) => value ? (
        <span className="px-2 py-1 text-xs bg-admin-red text-white border-2 border-admin-black">
          URGENT
        </span>
      ) : (
        <span className="px-2 py-1 text-xs bg-admin-blue text-white border-2 border-admin-black">
          NORMAL
        </span>
      )
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Bulletins</h1>
          <p className="text-admin-dark">Post announcements and notifications</p>
        </div>
        <button
          onClick={() => {
            setEditingBulletin(null);
            setFormData({ title: '', content: '', urgent: false });
            setIsModalOpen(true);
          }}
          className="admin-btn-primary"
        >
          + POST BULLETIN
        </button>
      </div>

      <div className="admin-card">
        <Table
          columns={columns}
          data={data.bulletins}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingBulletin ? 'Edit Bulletin' : 'Post New Bulletin'}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="admin-input"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Content *</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="admin-input"
              rows="6"
              required
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
              <span className="font-bold text-sm">Mark as Urgent</span>
            </label>
          </div>

          <div className="flex gap-2">
            <button type="submit" className="admin-btn-primary flex-1">
              {editingBulletin ? 'UPDATE BULLETIN' : 'POST BULLETIN'}
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

export default Bulletins;
