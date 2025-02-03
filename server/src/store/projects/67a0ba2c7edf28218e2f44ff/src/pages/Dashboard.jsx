import React from 'react';
import AttendanceCard from '../components/AttendanceCard';

const Dashboard = () => {
    const students = [
        { id: 1, name: "John Doe", absences: 3, threshold: 5 },
        { id: 2, name: "Jane Smith", absences: 5, threshold: 5 },
        { id: 3, name: "Bob Johnson", absences: 2, threshold: 5 }
    ];

    return (
        <div data-curate-edit-id="4e3e3d73-8a4b-45ae-8b69-0bb9c6770e32" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map(student => (
                <AttendanceCard data-curate-edit-id="143a774b-34b1-412c-9d31-d9af3d32b10b" key={student.id} student={student} />
            ))}
        </div>
    );
};

export default Dashboard;