
import { Layout } from '@/components/Layout';
import { Calendar, Clock } from 'lucide-react';

export default function Upcoming() {
  return (
    <Layout currentPage="upcoming">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Clock className="text-primary" />
            Upcoming Tasks
          </h1>
          <p className="text-muted-foreground text-lg">
            Plan ahead and stay on top of your future commitments.
          </p>
        </div>
        
        <div className="grid gap-6 animate-slide-in-right">
          <div className="form-container rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Tomorrow
            </h3>
            <div className="space-y-3">
              <div className="task-card rounded-lg p-4">
                <h4 className="font-medium">Client presentation prep</h4>
                <p className="text-sm text-muted-foreground mt-1">Prepare slides for the quarterly review</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">🔴 High</span>
                  <span className="px-2 py-1 bg-accent rounded-full text-accent-foreground">Work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              This Week
            </h3>
            <div className="space-y-3">
              <div className="task-card rounded-lg p-4">
                <h4 className="font-medium">Code review sessions</h4>
                <p className="text-sm text-muted-foreground mt-1">Review team's pull requests</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">🟡 Medium</span>
                  <span className="px-2 py-1 bg-accent rounded-full text-accent-foreground">Work</span>
                </div>
              </div>
              <div className="task-card rounded-lg p-4">
                <h4 className="font-medium">Gym membership renewal</h4>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">🟢 Low</span>
                  <span className="px-2 py-1 bg-accent rounded-full text-accent-foreground">Personal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
