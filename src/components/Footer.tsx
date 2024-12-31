import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Plexa Hosting" 
              className="h-8 w-8 object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="ml-2 text-xl font-bold text-white">Plexa Hosting</span>
          </div>
          <div className="mt-4 space-y-4">
            <p className="text-gray-400">
              Contact us at: <a href="mailto:support@plexanodes.net" className="text-blue-400 hover:text-blue-300">support@plexanodes.net</a>
            </p>
            <p className="text-gray-400">
              Join our community: <a href="https://discord.gg/plexa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Discord Help Center</a>
            </p>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 w-full">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Plexa Hosting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}