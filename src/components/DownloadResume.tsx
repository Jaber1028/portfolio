import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

export default function DownloadResume() {
  return (
    <a
      href="/resume.pdf"
      download="Jacob_Aberasturi_Resume.pdf"
      className="inline-flex items-center px-4 py-2 bg-blue-500/80 hover:bg-blue-500 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
    >
      <FaFileDownload className="text-lg mr-2" />
      <span>Resume</span>
    </a>
  );
} 