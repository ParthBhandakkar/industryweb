import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const orders = [
  {
    id: 'ORD-2024-001',
    part: 'Brake Caliper',
    status: 'Processing',
    date: '2024-03-15',
    supplier: 'BrakeTech Inc.',
    icon: Clock,
    statusColor: 'text-yellow-500',
  },
  {
    id: 'ORD-2024-002',
    part: 'Brake Rotor',
    status: 'Completed',
    date: '2024-03-14',
    supplier: 'AutoParts Pro',
    icon: CheckCircle,
    statusColor: 'text-green-500',
  },
  {
    id: 'ORD-2024-003',
    part: 'Brake Pad',
    status: 'Cancelled',
    date: '2024-03-13',
    supplier: 'BrakeTech Inc.',
    icon: XCircle,
    statusColor: 'text-red-500',
  },
];

export default function Orders() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Orders</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            New Order
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Part
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => {
                const StatusIcon = order.icon;
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Package className="h-5 w-5 mr-2 text-gray-400" />
                        {order.part}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        <StatusIcon className={`h-5 w-5 mr-2 ${order.statusColor}`} />
                        <span>{order.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.supplier}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}