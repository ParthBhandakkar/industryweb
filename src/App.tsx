import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SupplyChain from './components/SupplyChain';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <>
            <Dashboard />
            <SupplyChain />
          </>
        );
      case 'orders':
        return <Orders />;
      case 'inventory':
        return <Inventory />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <>
            <Dashboard />
            <SupplyChain />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="pt-16">{renderPage()}</main>
    </div>
  );
}

export default App;