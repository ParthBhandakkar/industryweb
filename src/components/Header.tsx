import React, { useState } from 'react';
import { Menu, Bell, UserCircle, X } from 'lucide-react';
import Navigation from './Navigation';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 rounded-lg hover:bg-indigo-500 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
            <span className="ml-4 text-xl font-bold">AutoParts SCMS</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 cursor-pointer hover:text-indigo-200" />
            <UserCircle className="h-6 w-6 cursor-pointer hover:text-indigo-200" />
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Menu */}
          <div className="fixed inset-y-0 left-0 w-64 bg-white z-50">
            <div className="h-full overflow-y-auto">
              <Navigation 
                currentPage={currentPage}
                onPageChange={onPageChange}
                onClose={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </>
      )}

      {/* Desktop Navigation */}
      <div className="hidden lg:block border-t border-indigo-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <Navigation
            currentPage={currentPage}
            onPageChange={onPageChange}
            onClose={() => {}}
          />
        </div>
      </div>
    </header>
  );
}