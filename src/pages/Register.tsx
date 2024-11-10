import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../lib/types';
import { useAuthStore } from '../lib/store';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function Register() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      setUser({
        id: '1',
        email: data.email,
        name: data.name,
        role: 'user',
      });
      
      navigate('/jobs');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-center text-2xl font-bold text-gray-900">Create an Account</h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our community to find your dream job
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
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
            label="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          
          <Input
            label="Confirm Password"
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />

          <Button
            type="submit"
            className="w-full"
            isLoading={isSubmitting}
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}