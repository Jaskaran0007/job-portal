import React from 'react';
import { Input } from './ui/Input';
import { SearchIcon } from 'lucide-react';

interface JobFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  jobType: string;
  setJobType: (value: string) => void;
  salaryRange: string;
  setSalaryRange: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
}

export function JobFilters({
  searchTerm,
  setSearchTerm,
  jobType,
  setJobType,
  salaryRange,
  setSalaryRange,
  location,
  setLocation,
}: JobFiltersProps) {
  return (
    <div className="w-64 space-y-6 rounded-lg bg-white p-6 shadow-sm">
      <div>
        <h3 className="mb-4 font-semibold">Search</h3>
        <Input
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          icon={<SearchIcon className="h-5 w-5 text-gray-400" />}
        />
      </div>

      <div>
        <h3 className="mb-4 font-semibold">Job Type</h3>
        <select
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">Salary Range</h3>
        <select
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
        >
          <option value="all">All Ranges</option>
          <option value="0-50000">$0 - $50,000</option>
          <option value="50000-100000">$50,000 - $100,000</option>
          <option value="100000-150000">$100,000 - $150,000</option>
          <option value="150000+">$150,000+</option>
        </select>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">Location</h3>
        <select
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="all">All Locations</option>
          <option value="remote">Remote</option>
          <option value="san-francisco">San Francisco</option>
          <option value="new-york">New York</option>
          <option value="london">London</option>
        </select>
      </div>
    </div>
  );
}