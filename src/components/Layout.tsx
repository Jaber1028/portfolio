import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="webcrumbs" className="min-h-screen bg-neutral-100 py-8 px-4 font-body">
      <div className="w-[1200px] mx-auto bg-white shadow-lg rounded-lg min-h-[800px]">


        {/* Main Content */}
        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 