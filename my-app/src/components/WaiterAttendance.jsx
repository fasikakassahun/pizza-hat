import React, { useState } from 'react';

const WaiterAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { waiterName: 'kirubel mamo', date: '2024-09-01', startTime: '9:00 AM', endTime: '5:00 PM', status: 'Present' },
    { waiterName: 'fikerta mulugeta', date: '2024-09-02', startTime: '10:00 AM', endTime: '6:00 PM', status: 'Absent' }
  ]);

  const [newAttendance, setNewAttendance] = useState({
    waiterName: '',
    date: '',
    startTime: '',
    endTime: '',
    status: ''
  });

  const [isAdded, setIsAdded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAttendance((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addAttendance = () => {
    if (newAttendance.waiterName && newAttendance.date && newAttendance.startTime && newAttendance.endTime && newAttendance.status) {
      setAttendanceData((prev) => [...prev, newAttendance]);
      setNewAttendance({ waiterName: '', date: '', startTime: '', endTime: '', status: '' });

      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Waiter Attendance</h2>

      {/* Zoomed Attendance Table */}
      <div style={{ zoom: 1.6 }}> {/* Applying zoom here */}
        <table className="min-w-full border-collapse mb-5">
          <thead>
            <tr>
              <th className="border p-2 text-left bg-red-500 text-white">Waiter Name</th>
              <th className="border p-2 text-left bg-red-500 text-white">Date</th>
              <th className="border p-2 text-left bg-red-500 text-white">Start Time</th>
              <th className="border p-2 text-left bg-red-500 text-white">End Time</th>
              <th className="border p-2 text-left bg-red-500 text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="border p-2">{row.waiterName}</td>
                <td className="border p-2">{row.date}</td>
                <td className="border p-2">{row.startTime}</td>
                <td className="border p-2">{row.endTime}</td>
                <td className="border p-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form to Add New Attendance */}
      <h3 className="text-xl font-semibold mb-3">Add New Attendance</h3>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <input
          type="text"
          name="waiterName"
          value={newAttendance.waiterName}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          placeholder="Waiter Name"
        />
        <input
          type="date"
          name="date"
          value={newAttendance.date}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          placeholder="Date"
        />
        <input
          type="time"
          name="startTime"
          value={newAttendance.startTime}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          placeholder="Start Time"
        />
        <input
          type="time"
          name="endTime"
          value={newAttendance.endTime}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
          placeholder="End Time"
        />
        <select
          name="status"
          value={newAttendance.status}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Status</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      {/* Add Attendance Button */}
      <button
        onClick={addAttendance}
        disabled={!newAttendance.waiterName || !newAttendance.date || !newAttendance.startTime || !newAttendance.endTime || !newAttendance.status}
        className={`px-4 py-2 rounded font-semibold ${
          newAttendance.waiterName && newAttendance.date && newAttendance.startTime && newAttendance.endTime && newAttendance.status
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Add Attendance
      </button>

      {/* Success Message */}
      {isAdded && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Attendance record added successfully!
        </div>
      )}
    </div>
  );
};

export default WaiterAttendance;
