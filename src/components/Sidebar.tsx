
import { Calendar, Home, FolderOpen, Clock, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentPage: string;
}

const navItems = [
  { icon: Home, label: 'Today', path: '/dashboard', emoji: '🏷️' },
  { icon: Clock, label: 'Upcoming', path: '/upcoming', emoji: '🚀' },
  { icon: FolderOpen, label: 'Projects', path: '/projects', emoji: '💼' },
  { icon: Calendar, label: 'Calendar', path: '/calendar', emoji: '🗓️' },
];

export const Sidebar = ({ currentPage }: SidebarProps) => {
  return (
    <aside className="w-64 sidebar-bg border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">FocusFlow</h1>
        <p className="text-sm text-muted-foreground mt-1">Stay organized & focused</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'hover:bg-accent hover:text-accent-foreground'
                  )
                }
              >
                <span className="text-lg">{item.emoji}</span>
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground w-full text-left">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};
