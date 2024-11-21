import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Activity } from 'lucide-react';

export default function Reports() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8">Reports & Analytics</h2>

        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Order Trends</h3>
              <BarChart3 className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">New Orders</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Completed Orders</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+8.2%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cancelled Orders</span>
                <div className="flex items-center text-red-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>-3.1%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Quality Metrics</h3>
              <Activity className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Defect Rate</span>
                <div className="flex items-center text-green-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>2.3%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Customer Satisfaction</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>94.8%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">On-Time Delivery</span>
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>96.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}