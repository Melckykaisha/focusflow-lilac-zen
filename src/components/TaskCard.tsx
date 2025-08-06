
import { CheckCircle2, Circle, Clock, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate?: string;
  project: string;
}

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
}

const priorityColors = {
  high: 'text-red-500',
  medium: 'text-yellow-500',
  low: 'text-green-500',
};

const priorityIcons = {
  high: '🔴',
  medium: '🟡',
  low: '🟢',
};

export const TaskCard = ({ task, onToggle }: TaskCardProps) => {
  return (
    <div className={cn(
      'task-card rounded-lg p-4 group cursor-pointer',
      task.completed && 'opacity-60'
    )}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className="mt-1 transition-colors hover:text-primary"
        >
          {task.completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            'font-medium text-foreground group-hover:text-primary transition-colors',
            task.completed && 'line-through text-muted-foreground'
          )}>
            {task.title}
          </h3>
          
          {task.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {task.description}
            </p>
          )}
          
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <span>{priorityIcons[task.priority]}</span>
              {task.priority}
            </span>
            
            {task.dueDate && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {task.dueDate}
              </span>
            )}
            
            <span className="px-2 py-1 bg-accent rounded-full text-accent-foreground">
              {task.project}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
