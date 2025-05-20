'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PencilIcon, TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useParams, useRouter } from 'next/navigation';

interface Subcategory {
  id: string;
  name: string;
  description: string;
  status: string;
}

const mockSubcategories: Record<string, Subcategory[]> = {
  '1': [
    { id: '1', name: 'Smartphones', description: 'Mobile devices', status: 'Active' },
    { id: '2', name: 'Laptops', description: 'Portable computers', status: 'Active' },
  ],
  '2': [
    { id: '3', name: 'T-Shirts', description: 'Casual tops', status: 'Active' },
    { id: '4', name: 'Jeans', description: 'Denim pants', status: 'Inactive' },
  ],
  '3': [
    { id: '5', name: 'Fiction', description: 'Novels and stories', status: 'Active' },
  ],
};

export default function SubcategoriesPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;

  const [subcategories, setSubcategories] = useState<Subcategory[]>(mockSubcategories[categoryId] || []);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState<{ message: string; id: string } | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm(`Are you sure you want to delete subcategory with ID ${id}?`)) {
      setIsDeleting(id);
      try {
        // Mock API call
        setSubcategories(subcategories.filter((subcategory) => subcategory.id !== id));
        setShowSuccess({ message: 'Subcategory deleted successfully!', id });
        // TODO: Call API to delete subcategory
        setTimeout(() => setShowSuccess(null), 2000);
      } catch (error) {
        console.error('Error deleting subcategory:', error);
        alert('Failed to delete subcategory.');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Subcategory Management</h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/categories/${categoryId}/subcategories/add`)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium"
              >
                Add New Subcategory
              </motion.button>
            </div>
            <motion.div
              className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-blue-100"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subcategories.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                        No subcategories found for this category.
                      </td>
                    </tr>
                  ) : (
                    subcategories.map((subcategory, index) => (
                      <motion.tr
                        key={subcategory.id}
                        custom={index}
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        className="hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{subcategory.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subcategory.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              subcategory.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {subcategory.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => router.push(`/categories/${categoryId}/subcategories/edit/${subcategory.id}`)}
                            className="text-blue-600 hover:text-blue-800"
                            disabled={isDeleting === subcategory.id}
                          >
                            <PencilIcon className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDelete(subcategory.id)}
                            className={`text-red-600 hover:text-red-800 ${
                              isDeleting === subcategory.id ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={isDeleting === subcategory.id}
                          >
                            {isDeleting === subcategory.id ? (
                              <svg className="animate-spin h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            ) : (
                              <TrashIcon className="w-5 h-5" />
                            )}
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </motion.div>
          </div>
        </motion.div>
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
            >
              <CheckCircleIcon className="w-5 h-5" />
              {showSuccess.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}