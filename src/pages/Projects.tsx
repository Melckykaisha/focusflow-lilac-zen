
import { Layout } from '@/components/Layout';
import { FolderOpen, Plus, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      progress: 75,
      members: 4,
      dueDate: 'Dec 15, 2024',
      color: 'bg-blue-500'
    },
    {
      name: 'Mobile App Development',
      description: 'iOS and Android app for customer portal',
      progress: 45,
      members: 6,
      dueDate: 'Jan 30, 2025',
      color: 'bg-green-500'
    },
    {
      name: 'Marketing Campaign',
      description: 'Q1 2025 product launch campaign',
      progress: 20,
      members: 3,
      dueDate: 'Feb 28, 2025',
      color: 'bg-purple-500'
    }
  ];

  return (
    <Layout currentPage="projects">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between animate-fade-in-up">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <FolderOpen className="text-primary" />
              Projects
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your projects and track progress across teams.
            </p>
          </div>
          
          <Button className="btn-hero">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-right">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="form-container rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                <span className="text-sm text-muted-foreground">{project.progress}%</span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div
                  className={`h-2 rounded-full ${project.color}`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {project.members} members
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {project.dueDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
