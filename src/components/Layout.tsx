import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="webcrumbs" className="min-h-screen py-8 px-4 font-body transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <main className="p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 