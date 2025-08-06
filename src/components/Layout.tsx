
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
}

export const Layout = ({ children, currentPage }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar currentPage={currentPage} />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
