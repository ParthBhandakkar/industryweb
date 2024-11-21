import React from 'react';
import { Box, Truck, Factory, Store, MessageCircle } from 'lucide-react';

const stats = [
  { name: 'Parts in Production', value: '245', icon: Box },
  { name: 'Active Shipments', value: '38', icon: Truck },
  { name: 'Manufacturing Orders', value: '156', icon: Factory },
  { name: 'Retailer Feedback', value: '12', icon: MessageCircle },
];

export default function Dashboard() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8">Supply Chain Overview</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="bg-white overflow-hidden rounded-lg shadow transition-all hover:shadow-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.name}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {stat.value}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Part Tracking</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Brake Caliper #BC-2024-001</p>
                  <p className="text-sm text-gray-500">Status: In Manufacturing</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  In Progress
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Brake Caliper #BC-2024-002</p>
                  <p className="text-sm text-gray-500">Status: Quality Check</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  QA Review
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Recent Feedback</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      Quality issue reported with batch #BC-2024-015
                    </p>
                    <p className="text-xs text-red-500 mt-1">2 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-green-500 bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      Positive feedback on durability test results
                    </p>
                    <p className="text-xs text-green-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}