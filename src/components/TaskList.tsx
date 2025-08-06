
import { TaskCard } from './TaskCard';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate?: string;
  project: string;
}

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Review project proposals',
    description: 'Go through the new client proposals and provide feedback',
    completed: false,
    priority: 'high',
    dueDate: 'Today',
    project: 'Work'
  },
  {
    id: '2',
    title: 'Update portfolio website',
    description: 'Add recent projects and improve the design',
    completed: false,
    priority: 'medium',
    dueDate: 'Tomorrow',
    project: 'Personal'
  },
  {
    id: '3',
    title: 'Team meeting preparation',
    completed: true,
    priority: 'high',
    dueDate: 'Yesterday',
    project: 'Work'
  },
];

export const TaskList = () => {
  const handleToggle = (id: string) => {
    console.log('Toggling task:', id);
  };

  const activeTasks = sampleTasks.filter(task => !task.completed);
  const completedTasks = sampleTasks.filter(task => task.completed);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Active Tasks 
          <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">
            {activeTasks.length}
          </span>
        </h3>
        <div className="space-y-3">
          {activeTasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggle={handleToggle} />
          ))}
        </div>
      </div>
      
      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
            Completed ({completedTasks.length})
          </h3>
          <div className="space-y-3">
            {completedTasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={handleToggle} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
