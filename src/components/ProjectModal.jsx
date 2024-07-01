import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../screens/css/projects.css';

import projects from '../data/gallery.json';

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  if (!project) return null;
  let items = projects[project.imageUrl];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="modal-anim bg-[#1e1e1f] p-6 rounded-lg w-9/12 h-4/6 outline-none flex flex-col overflow-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
    >
      <button
        onClick={onRequestClose}
        className="absolute right-1 top-1 text-2xl bg-[#2c3e50] hover:bg-amber-400 text-amber-400 hover:text-white font-bold py-1 px-3 rounded-full justify-center items-center"
      >
        &times;
      </button>
      <h2 className="text-white text-xl font-bold mb-4">{project.name}</h2>
      <div className="flex justify-center items-center mb-4">
        <div className="w-3/4">
          <ImageGallery items={items} />
        </div>
      </div>
      <p className="mb-4 text-white">{project.description}</p>
      <p className="text-white"><strong>Status:</strong> {project.status}</p>
      <p className="text-white"><strong>Technologies:</strong> {project.tech}</p>
    </Modal>
  );
};

export default ProjectModal;
