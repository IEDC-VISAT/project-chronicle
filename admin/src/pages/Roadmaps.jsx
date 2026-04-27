import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import Modal from '../components/Modal';

function Roadmaps() {
  const { data, addItem, updateItem, deleteItem } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoadmap, setEditingRoadmap] = useState(null);
  const [formData, setFormData] = useState({
    role: '',
    description: '',
    steps: []
  });
  const [currentStep, setCurrentStep] = useState({
    title: '',
    duration: '',
    skills: '',
    resources: '',
    projects: ''
  });

  const handleEdit = (roadmap) => {
    setEditingRoadmap(roadmap);
    setFormData(roadmap);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this roadmap?')) {
      deleteItem('roadmaps', id);
    }
  };

  const addStep = () => {
    if (!currentStep.title) return;
    
    const step = {
      id: formData.steps.length + 1,
      title: currentStep.title,
      duration: currentStep.duration,
      skills: currentStep.skills.split('\n').filter(s => s.trim()),
      resources: currentStep.resources.split('\n').filter(r => r.trim()),
      projects: currentStep.projects.split('\n').filter(p => p.trim())
    };

    setFormData({
      ...formData,
      steps: [...formData.steps, step]
    });

    setCurrentStep({
      title: '',
      duration: '',
      skills: '',
      resources: '',
      projects: ''
    });
  };

  const removeStep = (index) => {
    setFormData({
      ...formData,
      steps: formData.steps.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingRoadmap) {
      updateItem('roadmaps', editingRoadmap.id, formData);
    } else {
      addItem('roadmaps', formData);
    }

    setIsModalOpen(false);
    setEditingRoadmap(null);
    setFormData({ role: '', description: '', steps: [] });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Roadmaps</h1>
          <p className="text-admin-dark">Create and manage career roadmaps</p>
        </div>
        <button
          onClick={() => {
            setEditingRoadmap(null);
            setFormData({ role: '', description: '', steps: [] });
            setIsModalOpen(true);
          }}
          className="admin-btn-primary"
        >
          + ADD NEW ROADMAP
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.roadmaps.map((roadmap) => (
          <div key={roadmap.id} className="admin-card">
            <h3 className="font-bold text-lg mb-2">{roadmap.role}</h3>
            <p className="text-sm text-admin-dark mb-3">{roadmap.description}</p>
            <p className="text-sm mb-4">
              <strong>{roadmap.steps?.length || 0}</strong> steps
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(roadmap)}
                className="admin-btn flex-1"
              >
                EDIT
              </button>
              <button
                onClick={() => handleDelete(roadmap.id)}
                className="admin-btn-danger"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingRoadmap ? 'Edit Roadmap' : 'Add New Roadmap'}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Role Name *</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="admin-input"
              placeholder="e.g., Software Engineer"
              required
            />
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

          <div className="border-2 border-admin-black p-4 mb-4 bg-admin-grey">
            <h4 className="font-bold mb-3">Add Steps</h4>
            
            <div className="mb-3">
              <label className="block font-bold mb-1 text-sm">Step Title</label>
              <input
                type="text"
                value={currentStep.title}
                onChange={(e) => setCurrentStep({ ...currentStep, title: e.target.value })}
                className="admin-input"
                placeholder="e.g., Fundamentals"
              />
            </div>

            <div className="mb-3">
              <label className="block font-bold mb-1 text-sm">Duration</label>
              <input
                type="text"
                value={currentStep.duration}
                onChange={(e) => setCurrentStep({ ...currentStep, duration: e.target.value })}
                className="admin-input"
                placeholder="e.g., 3-4 months"
              />
            </div>

            <div className="mb-3">
              <label className="block font-bold mb-1 text-sm">Skills (one per line)</label>
              <textarea
                value={currentStep.skills}
                onChange={(e) => setCurrentStep({ ...currentStep, skills: e.target.value })}
                className="admin-input"
                rows="3"
              />
            </div>

            <div className="mb-3">
              <label className="block font-bold mb-1 text-sm">Resources (one per line)</label>
              <textarea
                value={currentStep.resources}
                onChange={(e) => setCurrentStep({ ...currentStep, resources: e.target.value })}
                className="admin-input"
                rows="3"
              />
            </div>

            <div className="mb-3">
              <label className="block font-bold mb-1 text-sm">Projects (one per line)</label>
              <textarea
                value={currentStep.projects}
                onChange={(e) => setCurrentStep({ ...currentStep, projects: e.target.value })}
                className="admin-input"
                rows="3"
              />
            </div>

            <button
              type="button"
              onClick={addStep}
              className="admin-btn-success w-full"
            >
              + ADD STEP
            </button>
          </div>

          {formData.steps.length > 0 && (
            <div className="mb-4">
              <h4 className="font-bold mb-2">Steps ({formData.steps.length})</h4>
              <div className="space-y-2">
                {formData.steps.map((step, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-admin-white border-2 border-admin-black">
                    <span className="font-bold text-sm">
                      {index + 1}. {step.title} ({step.duration})
                    </span>
                    <button
                      type="button"
                      onClick={() => removeStep(index)}
                      className="admin-btn-danger text-xs"
                    >
                      REMOVE
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button type="submit" className="admin-btn-primary flex-1">
              {editingRoadmap ? 'UPDATE ROADMAP' : 'ADD ROADMAP'}
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

export default Roadmaps;
