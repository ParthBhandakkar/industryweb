import React from 'react';
import { Bell, Lock, Users, Globe } from 'lucide-react';

const settingsSections = [
  {
    title: 'Notifications',
    icon: Bell,
    settings: [
      { name: 'Order Updates', enabled: true },
      { name: 'Inventory Alerts', enabled: true },
      { name: 'Quality Reports', enabled: false },
    ],
  },
  {
    title: 'Security',
    icon: Lock,
    settings: [
      { name: 'Two-Factor Authentication', enabled: true },
      { name: 'API Access', enabled: false },
      { name: 'Session Timeout', enabled: true },
    ],
  },
  {
    title: 'Team',
    icon: Users,
    settings: [
      { name: 'User Management', enabled: true },
      { name: 'Role Permissions', enabled: true },
      { name: 'Activity Logs', enabled: true },
    ],
  },
  {
    title: 'Integration',
    icon: Globe,
    settings: [
      { name: 'Supplier API', enabled: true },
      { name: 'Retailer Portal', enabled: false },
      { name: 'Analytics Service', enabled: true },
    ],
  },
];

export default function Settings() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8">Settings</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {settingsSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-medium">{section.title}</h3>
                </div>
                <div className="space-y-4">
                  {section.settings.map((setting) => (
                    <div
                      key={setting.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-600">{setting.name}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={setting.enabled}
                          onChange={() => {}}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}