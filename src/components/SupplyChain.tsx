import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SupplyChain() {
  return (
    <div className="py-8 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8">Supply Chain Flow</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-medium text-indigo-600 mb-4">Supplier</h3>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Manufacturing Plant"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Part Manufacturing
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Quality Control
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Shipping Preparation
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-medium text-indigo-600 mb-4">OEM Manufacturer</h3>
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7"
              alt="Assembly Line"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Part Reception
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Assembly Process
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Final Testing
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-lg font-medium text-indigo-600 mb-4">Retailer</h3>
            <img
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d"
              alt="Retail Store"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Product Reception
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Customer Service
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                Feedback Collection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}