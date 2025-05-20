// 'use client';

// import Sidebar from '@/components/Sidebar';
// import Navbar from '@/components/Navbar';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
// import { useRouter } from 'next/navigation';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   status: string;
// }

// const mockUsers: User[] = [
//   { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//   { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
//   { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
// ];

// export default function UsersPage() {
//   const [users, setUsers] = useState<User[]>(mockUsers);
//   const router = useRouter();

//   const handleDelete = (id: string) => {
//     if (confirm(`Are you sure you want to delete user with ID ${id}?`)) {
//       setUsers(users.filter((user) => user.id !== id));
//       alert('User deleted successfully! (Mock action)');
//       // TODO: Call API to delete user
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 ml-64">
//         <Navbar />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="p-6"
//         >
//           <div className="max-w-7xl mx-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => router.push('/users/add')}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Add New User
//               </motion.button>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-blue-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {users.map((user) => (
//                     <motion.tr
//                       key={user.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                       className="hover:bg-blue-50 transition-colors duration-150"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => router.push(`/users/edit/${user.id}`)}
//                           className="text-blue-600 hover:text-blue-800 mr-4"
//                         >
//                           <PencilIcon className="w-5 h-5" />
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleDelete(user.id)}
//                           className="text-red-600 hover:text-red-800"
//                         >
//                           <TrashIcon className="w-5 h-5" />
//                         </motion.button>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }