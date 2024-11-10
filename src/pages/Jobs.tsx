import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, BriefcaseIcon } from 'lucide-react';
import { JobFilters } from '../components/JobFilters';
import { Job } from '../lib/types';

// Enhanced mock data
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
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'London, UK',
    salary: '$100,000 - $130,000',
    type: 'full-time',
    category: 'DevOps',
    description: 'Looking for a DevOps Engineer to join our team...',
    requirements: ['AWS expertise', 'Kubernetes experience'],
    postedAt: new Date('2024-03-08'),
  },
  {
    id: '4',
    title: 'Marketing Intern',
    company: 'GrowthCo',
    location: 'New York, NY',
    salary: '$40,000 - $50,000',
    type: 'internship',
    category: 'Marketing',
    description: 'Join our marketing team as an intern...',
    requirements: ['Marketing degree', 'Social media skills'],
    postedAt: new Date('2024-03-07'),
  },
  {
    id: '5',
    title: 'Backend Developer',
    company: 'DataSys',
    location: 'Remote',
    salary: '$110,000 - $140,000',
    type: 'contract',
    category: 'Engineering',
    description: 'Backend developer needed for our data systems...',
    requirements: ['Node.js expertise', 'Database design'],
    postedAt: new Date('2024-03-06'),
  },
];

export function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('all');
  const [salaryRange, setSalaryRange] = useState('all');
  const [location, setLocation] = useState('all');

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = jobType === 'all' || job.type === jobType;
    const matchesLocation = location === 'all' || job.location.toLowerCase().includes(location.toLowerCase());
    
    let matchesSalary = true;
    if (salaryRange !== 'all') {
      const [min, max] = salaryRange.split('-').map(Number);
      const jobSalary = parseInt(job.salary.replace(/[^0-9]/g, ''));
      matchesSalary = jobSalary >= min && (!max || jobSalary <= max);
    }

    return matchesSearch && matchesType && matchesLocation && matchesSalary;
  });

  return (
    <div className="flex gap-8">
      <JobFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        jobType={jobType}
        setJobType={setJobType}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
        location={location}
        setLocation={setLocation}
      />

      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Available Jobs ({filteredJobs.length})
        </h1>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              to={`/jobs/${job.id}`}
              className="block rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="mr-1 h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <BriefcaseIcon className="mr-1 h-4 w-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{job.salary}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {new Date(job.postedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}