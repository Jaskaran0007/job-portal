import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPinIcon, BriefcaseIcon, BuildingIcon, CalendarIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Job } from '../lib/types';
import { useAuthStore } from '../lib/store';
import { ApplicationModal } from '../components/ApplicationModal';

// Enhanced mock data with more jobs
const mockJobs: Record<string, Job> = {
  '1': {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'full-time',
    category: 'Engineering',
    description: 'We are looking for a Senior Frontend Developer to join our team. You will be responsible for building and maintaining web applications using React and TypeScript.',
    requirements: [
      '5+ years of React experience',
      'Strong TypeScript expertise',
      'Experience with modern frontend tools and practices',
      'Excellent problem-solving skills',
      'Strong communication abilities',
    ],
    postedAt: new Date('2024-03-10'),
  },
  // Add more jobs here...
};

export function JobDetails() {
  const { id } = useParams();
  const { user } = useAuthStore();
  const [showModal, setShowModal] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const job = mockJobs[id || ''];

  const handleApplySuccess = () => {
    setShowModal(false);
    setApplicationSuccess(true);
    setTimeout(() => setApplicationSuccess(false), 5000);
  };

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {applicationSuccess && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          Application submitted successfully! We'll be in touch soon.
        </div>
      )}

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-xl text-gray-600">{job.company}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <span className="flex items-center text-gray-500">
                <MapPinIcon className="mr-1 h-5 w-5" />
                {job.location}
              </span>
              <span className="flex items-center text-gray-500">
                <BriefcaseIcon className="mr-1 h-5 w-5" />
                {job.type}
              </span>
              <span className="flex items-center text-gray-500">
                <BuildingIcon className="mr-1 h-5 w-5" />
                {job.category}
              </span>
              <span className="flex items-center text-gray-500">
                <CalendarIcon className="mr-1 h-5 w-5" />
                Posted {new Date(job.postedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">{job.salary}</p>
            {user ? (
              <Button 
                className="mt-4"
                onClick={() => setShowModal(true)}
              >
                Apply Now
              </Button>
            ) : (
              <Link to="/login">
                <Button className="mt-4">Login to Apply</Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Job Description</h2>
        <p className="mt-4 text-gray-600">{job.description}</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {showModal && (
        <ApplicationModal
          job={job}
          onClose={() => setShowModal(false)}
          onSuccess={handleApplySuccess}
        />
      )}
    </div>
  );
}