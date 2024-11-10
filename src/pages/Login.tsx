import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../lib/types';
import { useAuthStore } from '../lib/store';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

type LoginForm = {
  email: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      setUser({
        id: '1',
        email: data.email,
        name: 'John Doe',
        role: 'user',
      });
      
      navigate('/jobs');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-center text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to your account to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
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

          <Button
            type="submit"
            className="w-full"
            isLoading={isSubmitting}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}