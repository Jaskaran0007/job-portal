import React from 'react';
import { PlusIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Job } from '../lib/types';

// Temporary mock data
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'full-time',
    category: 'Engineering',
    description: 'We are looking for a Senior Frontend Developer...',
    requirements: ['5+ years of React experience', 'TypeScript expertise'],
    postedAt: new Date('2024-03-10'),
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignStudio',
    location: 'Remote',
    salary: '$90,000 - $120,000',
    type: 'full-time',
    category: 'Design',
    description: 'Join our creative team as a Product Designer...',
    requirements: ['3+ years of UI/UX design', 'Figma proficiency'],
    postedAt: new Date('2024-03-09'),
  },
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add New Job
        </Button>
      </div>

      <div className="rounded-lg bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Company</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Posted</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockJobs.map((job) => (
                <tr key={job.id}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="font-medium text-gray-900">{job.title}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-500">{job.company}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-500">{job.location}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-500">{job.type}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                    {new Date(job.postedAt).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}