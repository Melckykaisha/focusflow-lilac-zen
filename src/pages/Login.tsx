
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center p-6">
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="form-container rounded-2xl p-8 shadow-2xl backdrop-blur-sm bg-white/95">
          <div className="text-center mb-8 animate-fade-in-up">
            <Link to="/" className="text-3xl font-bold text-primary">
              FocusFlow
            </Link>
            <h1 className="text-2xl font-semibold mt-4 mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <form className="space-y-6 animate-slide-in-right">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="text-lg py-3"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="text-lg py-3 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-border" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full btn-hero text-lg py-3" size="lg">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
