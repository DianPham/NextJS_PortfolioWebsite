'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/assets/projects';
import { assets } from '@/assets/assets';

export default function ProjectGallery({ params }) {
  const paramsValue = React.use(params);
const { slug } = paramsValue || {};
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find((p) => p.slug === slug);
      setProject(foundProject || null);
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div
          className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"
          role="status"
          aria-label="Loading project"
        ></div>
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
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>
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
            key={item.id || item.src}
            className="mb-4 break-inside-avoid"
            onClick={() => handleItemClick(item)}
          >
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer aspect-w-16 aspect-h-9">
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.title || `Project item ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={1280}
                  height={720}
                  loading="lazy"
                />
              ) : item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  autoPlay
                  loop
                  aria-label={item.title || `Project video ${index + 1}`}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p>Unsupported format</p>
                </div>
              )}
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-opacity duration-300 flex items-end pointer-events-none">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-lg text-shadow-xl">
                    {item.title || 'Project item'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50">
          <div className="absolute inset-0 -z-10">
            <Image
              src={assets.header_bg_color}
              alt="Modal background"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
          </div>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="md:w-2/3">
                {selectedItem.type === 'image' && (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full rounded-lg"
                    width={1280}
                    height={720}
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
                    aria-label={selectedItem.title || 'Project video'}
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
                      <span
                        key={i}
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
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