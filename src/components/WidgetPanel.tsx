
import React from 'react';
import ClockWidget from './widgets/ClockWidget';
import EmailForm from './widgets/EmailForm';
import FantasyMap from './widgets/FantasyMap';

const WidgetPanel: React.FC = () => {
  return (
    <div className="w-full lg:w-3/4 mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClockWidget />
        <FantasyMap />
      </div>
      <EmailForm />
    </div>
  );
};

export default WidgetPanel;
