import React, { useEffect, useState } from 'react';
import moment from 'moment';

const GymSchedule = () => {
  const [progressBars, setProgressBars] = useState([
    { id: 'progress-bar-6to12', start: '06:00', end: '12:00', progress: 0, color:'bg-primary', label: 'Yoga Sessions'},
    { id: 'progress-bar-12to2', start: '12:00', end: '13:30', progress: 0, color: 'bg-secondary', label: 'Lunch Break' },
    { id: 'progress-bar-2to3', start: '13:30', end: '15:30', progress: 0, color: 'bg-info', label: 'Running and Cardio Sessions'},
    { id: 'progress-bar-3to6', start: '15:30', end: '18:00', progress: 0, color: 'bg-warning', label: 'Yoga Sessions'},
    { id: 'progress-bar-6to8', start: '18:00', end: '19:00', progress: 0, color: 'bg-danger', label: 'Zumba Sessions' },
    { id: 'progress-bar-8to10', start: '19:00', end: '21:00', progress: 0, color: 'bg-success', label: 'Cardio and Plank Sessions' },
    { id: 'progress-bar-10to6', start: '21:00', end:'06:00', progress:0, color:'bg-dark', label: 'Gym is Closed' },
  ]);

  useEffect(() => {
    const updateProgressBar = () => {
      const now = moment();
      

      const updatedProgressBars = progressBars.map((bar) => {
        const start = moment(bar.start, 'HH:mm');
        const end = moment(bar.end, 'HH:mm');

        if (now.isBetween(start, end)) {
          const totalMinutes = end.diff(start, 'minutes');
          const elapsedMinutes = now.diff(start, 'minutes');
          const progress = (elapsedMinutes / totalMinutes) * 100;
          return { ...bar, progress };
        } else {
          return { ...bar, progress: 0 };
        }
      });

      setProgressBars(updatedProgressBars);
    };

    const interval = setInterval(updateProgressBar, 60000);

    updateProgressBar();

    return () => clearInterval(interval);
  }, );
  

  // Function to get the current active session id
  const getCurrentSessionId = () => {
    const now = moment();
    for (const bar of progressBars) {
      const start = moment(bar.start, 'HH:mm');
      const end = moment(bar.end, 'HH:mm');
      if (now.isBetween(start, end)) {
        return bar.id;
      }
    }
    return null;
  };

  const [currentSessionId, setCurrentSessionId] = useState(getCurrentSessionId());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentId = getCurrentSessionId();
      setCurrentSessionId(currentId);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  },);

  const weekdays = moment.weekdaysShort();

  return (
    <div className="container mt-5">
      <h2 className='text-center mb-4'>Live Gym Schedule</h2>
      <div className='position-relative'>
        <div className="progress" style={{ height: '35px' }}>
          {progressBars.map((bar) => (
            <div
              key={bar.id}
              className={`progress-bar progress-bar-striped progress-bar-animated ${bar.color}`}
              role="progressbar"
              aria-valuenow={bar.progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${bar.progress}%`}}
            >
              {bar.label}
            </div>
          ))}
        </div>
        <br />
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Timings</th>
              {weekdays.map((day) => (
                <th key={day} scope="col">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {progressBars.map((bar) => (
              <tr key={bar.id} className={bar.id === currentSessionId ? 'table-primary' : ''}>
                <th scope="row">{`${bar.start} to ${bar.end}`}</th>
                {weekdays.map((day, index) => (
                  <td key={`${bar.id}-${day}-${index}`}>{bar.label}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GymSchedule;