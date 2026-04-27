import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Table from '../components/Table';
import Modal from '../components/Modal';

function Skills() {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Programming',
    difficulty: 'Beginner',
    description: '',
    howToLearn: '',
    whereToLearn: '',
    tags: '',
    trending: false,
    editorsPick: false
  });

  const handleEdit = (skill) => {
    setEditingSkill(skill);
    setFormData({
      ...skill,
      howToLearn: Array.isArray(skill.howToLearn) ? skill.howToLearn.join('\n') : '',
      whereToLearn: Array.isArray(skill.whereToLearn) 
        ? skill.whereToLearn.map(r => `${r.name}|${r.type}|${r.url}`).join('\n')
        : '',
      tags: Array.isArray(skill.tags) ? skill.tags.join(', ') : ''
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      deleteItem('skills', id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const skillData = {
      ...formData,
      howToLearn: formData.howToLearn.split('\n').filter(s => s.trim()),
      whereToLearn: formData.whereToLearn.split('\n').filter(s => s.trim()).map(line => {
        const [name, type, url] = line.split('|');
        return { name: name?.trim() || '', type: type?.trim() || '', url: url?.trim() || '' };
      }),
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t)
    };

    if (editingSkill) {
      updateItem('skills', editingSkill.id, skillData);
    } else {
      addItem('skills', skillData);
    }

    setIsModalOpen(false);
    setEditingSkill(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Programming',
      difficulty: 'Beginner',
      description: '',
      howToLearn: '',
      whereToLearn: '',
      tags: '',
      trending: false,
      editorsPick: false
    });
  };

  const columns = [
    { key: 'name', label: 'Skill Name' },
    { key: 'category', label: 'Category' },
    { 
      key: 'difficulty', 
      label: 'Difficulty',
      render: (value) => {
        const colors = {
          'Beginner': 'bg-admin-green',
          'Intermediate': 'bg-yellow-600',
          'Advanced': 'bg-admin-red'
        };
        return (
          <span className={`px-2 py-1 text-xs text-white border-2 border-admin-black ${colors[value]}`}>
            {value}
          </span>
        );
      }
    },
    { 
      key: 'trending', 
      label: 'Status',
      render: (value, row) => (
        <div className="flex gap-1">
          {row.trending && <span className="text-xs">🔥</span>}
          {row.editorsPick && <span className="text-xs">⭐</span>}
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Skills</h1>
          <p className="text-admin-dark">Add, edit, or remove skills from Skill Corner</p>
        </div>
        <button
          onClick={() => {
            setEditingSkill(null);
            resetForm();
            setIsModalOpen(true);
          }}
          className="admin-btn-primary"
        >
          + ADD NEW SKILL
        </button>
      </div>

      <div className="admin-card">
        <Table
          columns={columns}
          data={data.skills}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingSkill ? 'Edit Skill' : 'Add New Skill'}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-bold mb-2 text-sm">Skill Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="admin-input"
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2 text-sm">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="admin-input"
                required
              >
                <option value="Programming">Programming</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Core Engineering">Core Engineering</option>
                <option value="Soft Skills">Soft Skills</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Difficulty *</label>
            <select
              value={formData.difficulty}
              onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
              className="admin-input"
              required
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
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
            <label className="block font-bold mb-2 text-sm">How to Learn (one step per line)</label>
            <textarea
              value={formData.howToLearn}
              onChange={(e) => setFormData({ ...formData, howToLearn: e.target.value })}
              className="admin-input"
              rows="5"
              placeholder="Step 1: Learn basics&#10;Step 2: Practice&#10;..."
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Where to Learn (format: Name|Type|URL, one per line)</label>
            <textarea
              value={formData.whereToLearn}
              onChange={(e) => setFormData({ ...formData, whereToLearn: e.target.value })}
              className="admin-input"
              rows="4"
              placeholder="Official Docs|Documentation|https://example.com&#10;YouTube Course|Video|https://youtube.com"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Tags (comma-separated)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="admin-input"
              placeholder="Free, Certification, Paid"
            />
          </div>

          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.trending}
                onChange={(e) => setFormData({ ...formData, trending: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="font-bold text-sm">Trending</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.editorsPick}
                onChange={(e) => setFormData({ ...formData, editorsPick: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="font-bold text-sm">Editor's Pick</span>
            </label>
          </div>

          <div className="flex gap-2">
            <button type="submit" className="admin-btn-primary flex-1">
              {editingSkill ? 'UPDATE SKILL' : 'ADD SKILL'}
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

export default Skills;
