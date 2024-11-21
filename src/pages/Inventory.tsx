import React from 'react';
import { Package, AlertTriangle } from 'lucide-react';

const inventory = [
  {
    id: 'INV-001',
    name: 'Brake Caliper',
    sku: 'BC-2024',
    quantity: 150,
    reorderPoint: 50,
    supplier: 'BrakeTech Inc.',
    location: 'Warehouse A',
  },
  {
    id: 'INV-002',
    name: 'Brake Rotor',
    sku: 'BR-2024',
    quantity: 30,
    reorderPoint: 40,
    supplier: 'AutoParts Pro',
    location: 'Warehouse B',
  },
  {
    id: 'INV-003',
    name: 'Brake Pad',
    sku: 'BP-2024',
    quantity: 200,
    reorderPoint: 100,
    supplier: 'BrakeTech Inc.',
    location: 'Warehouse A',
  },
];

export default function Inventory() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Inventory Management</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add Item
          </button>
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {inventory.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <Package className="h-8 w-8 text-indigo-600" />
                {item.quantity < item.reorderPoint && (
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-600">Location: {item.location}</p>
                <p className="text-sm text-gray-600">Supplier: {item.supplier}</p>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      item.quantity < item.reorderPoint
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{
                      width: `${Math.min(
                        (item.quantity / (item.reorderPoint * 3)) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}