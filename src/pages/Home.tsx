import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, BriefcaseIcon, UsersIcon, BuildingIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Home() {
  return (
    <div className="space-y-16">
      <section className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find Your Dream Job Today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/jobs">
              <Button size="lg">Browse Jobs</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">Post a Job</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to find your next opportunity
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                <SearchIcon className="h-5 w-5 flex-none text-blue-600" />
                Smart Search
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Advanced filters to help you find exactly what you're looking for.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                <BriefcaseIcon className="h-5 w-5 flex-none text-blue-600" />
                Latest Jobs
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Daily updated job listings from top companies.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                <BuildingIcon className="h-5 w-5 flex-none text-blue-600" />
                Top Companies
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Connect with industry-leading employers.</p>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}