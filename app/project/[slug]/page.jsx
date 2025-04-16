// File: app/project/[slug]/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/assets/projects';

export default function ProjectGallery({ params }) {
  const { slug } = params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find(p => p.slug === slug);
      setProject(foundProject);
      setLoading(false);
    }
  }, [slug]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
          <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div> */}
      {/* Breadcrumb and Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">{project.title}</span>
        </div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-gray-600">{project.description}</p>
      </div>

      {/* Masonry Grid Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {project.items.map((item, index) => (
          <div 
            key={index} 
            className="mb-4 break-inside-avoid"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
              {/* Check if item has image or video */}
              {item.type === 'image' && (
                <img 
                  src={item.src} 
                  alt={item.title || `Item ${index + 1}`}
                  className="w-full object-cover"
                />
              )}
              {item.type === 'video' && (
                <video 
                  src={item.src}
                  className="w-full object-cover" 
                  muted
                  playsInline
                />
              )}
              {/* Item info overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg">{item.title || `Item ${index + 1}`}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto">
            <div className="flex justify-end p-2">
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="md:w-2/3">
                {selectedItem.type === 'image' && (
                  <img 
                    src={selectedItem.src} 
                    alt={selectedItem.title} 
                    className="w-full rounded-lg"
                  />
                )}
                {selectedItem.type === 'video' && (
                  <video 
                    src={selectedItem.src}
                    className="w-full rounded-lg" 
                    controls
                    autoPlay
                    muted
                    loop
                  />
                )}
              </div>
              <div className="md:w-1/3 md:pl-6 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold mb-3">{selectedItem.title}</h2>
                {selectedItem.date && (
                  <p className="text-gray-500 text-sm mb-4">{selectedItem.date}</p>
                )}
                <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                {selectedItem.tags && selectedItem.tags.length > 0 && (
                  <div className="mb-4">
                    {selectedItem.tags.map((tag, i) => (
                      <span key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}