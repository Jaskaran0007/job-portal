import React from 'react';
import { useAuthStore } from '../lib/store';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Profile() {
  const { user, applications } = useAuthStore();

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
        <div className="mt-6 space-y-6">
          <Input
            label="Full Name"
            defaultValue={user?.name}
            disabled
          />
          <Input
            label="Email"
            type="email"
            defaultValue={user?.email}
            disabled
          />
          <Button>Update Profile</Button>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">My Applications</h2>
        {applications.length > 0 ? (
          <div className="mt-4 space-y-4">
            {applications.map((application) => (
              <div
                key={`${application.jobId}-${application.appliedAt}`}
                className="rounded-lg border p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{application.jobId}</h3>
                    <p className="text-sm text-gray-600">
                      Applied on: {new Date(application.appliedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    {application.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-gray-600">You haven't applied to any jobs yet.</p>
        )}
      </div>
    </div>
  );
}