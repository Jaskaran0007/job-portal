import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { XIcon } from 'lucide-react';
import { applicationSchema } from '../lib/types';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Job } from '../lib/types';
import { useAuthStore } from '../lib/store';

interface ApplicationModalProps {
  job: Job;
  onClose: () => void;
  onSuccess: () => void;
}

export function ApplicationModal({ job, onClose, onSuccess }: ApplicationModalProps) {
  const { user, addApplication } = useAuthStore();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      jobId: job.id,
      userId: user?.id || '',
      name: user?.name || '',
      email: user?.email || '',
      phone: '',
      coverLetter: '',
      resumeUrl: '',
      status: 'pending',
      appliedAt: new Date(),
    },
  });

  const onSubmit = async (data: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addApplication(data);
      onSuccess();
    } catch (error) {
      console.error('Application failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-bold">Apply for {job.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{job.company}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <Input
            label="Full Name"
            {...register('name')}
            error={errors.name?.message}
          />
          
          <Input
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          
          <Input
            label="Phone"
            {...register('phone')}
            error={errors.phone?.message}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover Letter
            </label>
            <textarea
              {...register('coverLetter')}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              rows={4}
            />
            {errors.coverLetter?.message && (
              <p className="text-sm text-red-600">{errors.coverLetter?.message}</p>
            )}
          </div>
          
          <Input
            label="Resume URL"
            type="url"
            {...register('resumeUrl')}
            error={errors.resumeUrl?.message}
            placeholder="https://example.com/resume.pdf"
          />

          <Button
            type="submit"
            className="w-full"
            isLoading={isSubmitting}
          >
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}