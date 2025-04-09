import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="webcrumbs" className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-8 px-4 font-body transition-colors duration-200">
      <div className="w-[1200px] mx-auto bg-white dark:bg-neutral-800 shadow-lg rounded-lg min-h-[800px] transition-colors duration-200">
        {/* Main Content */}
        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 