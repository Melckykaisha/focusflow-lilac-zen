
import { ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Focus on what
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                matters most
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              FocusFlow helps you organize your tasks, manage projects, and stay productive 
              with a beautiful, intuitive interface designed for modern workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300/20 rounded-full animate-pulse-soft"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse-soft"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Why choose FocusFlow?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for modern teams and individuals who value simplicity, beauty, and productivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Intuitive interface that gets out of your way so you can focus on what matters.'
              },
              {
                icon: Shield,
                title: 'Secure & Private',
                description: 'Your data is encrypted and secure. We respect your privacy above all else.'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Work together seamlessly with real-time collaboration and project sharing.'
              },
              {
                icon: CheckCircle,
                title: 'Smart Organization',
                description: 'Automatic categorization and intelligent suggestions to keep you organized.'
              },
              {
                icon: ArrowRight,
                title: 'Goal Tracking',
                description: 'Set goals, track progress, and celebrate achievements with built-in analytics.'
              },
              {
                icon: Zap,
                title: 'Cross-Platform',
                description: 'Access your tasks anywhere - web, mobile, desktop. Always in sync.'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="form-container rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="hero-overlay rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to boost your productivity?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have transformed their workflow with FocusFlow.
            </p>
            <Link to="/register">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
