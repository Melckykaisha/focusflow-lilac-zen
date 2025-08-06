
import { Layout } from '@/components/Layout';
import { TaskForm } from '@/components/TaskForm';
import { TaskList } from '@/components/TaskList';

export default function Dashboard() {
  return (
    <Layout currentPage="today">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-2">Good morning! ☀️</h1>
          <p className="text-muted-foreground text-lg">
            You have 3 tasks for today. Let's make it a productive day!
          </p>
        </div>
        
        <div className="animate-slide-in-right">
          <TaskForm />
        </div>
        
        <div className="animate-fade-in-up">
          <TaskList />
        </div>
      </div>
    </Layout>
  );
}
