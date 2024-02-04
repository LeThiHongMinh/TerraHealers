// Dashboard.js
import React from 'react';
import './index.css';
import BarChartComponent from './BarChart';
import MedicationComponent from './Medication';
import MedicationSection from './Summary';
import DisposalTrackerSection from './Disposal';
import ExpiringMedicationSection from './Expiration';

const Dashboard = () => {
  return (
    <div className="main">
      <h1>Dashboard</h1>
      <div className="firstRow">
        <MedicationSection />
      </div>
      <div className="secondRow">
        <div className="barChartContainer">
          <h2>Carbon Emissions</h2>
          <BarChartComponent />
        </div>
        <div className="expiringMedicationContainer">
          <h2>Expiring Medication</h2>
          <ExpiringMedicationSection />
        </div>
      </div>
      <div className="third-row">
        <div className='pie'>
        <MedicationComponent />
        </div>
        <div className='pie'>
        <DisposalTrackerSection />  
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
