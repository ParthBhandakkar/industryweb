import React from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  Package,
  BarChart3,
  Settings,
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onClose: () => void;
}

export default function Navigation({ currentPage, onPageChange, onClose }: NavigationProps) {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    { name: 'Orders', icon: ClipboardList, id: 'orders' },
    { name: 'Inventory', icon: Package, id: 'inventory' },
    { name: 'Reports', icon: BarChart3, id: 'reports' },
    { name: 'Settings', icon: Settings, id: 'settings' },
  ];

  return (
    <nav className="h-full">
      <div className="space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isCurrent = currentPage === item.id;
          return (
            <button
              key={item.name}
              onClick={() => {
                onPageChange(item.id);
                onClose();
              }}
              className={`group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isCurrent
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              <Icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-indigo-600'
                }`}
              />
              {item.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}