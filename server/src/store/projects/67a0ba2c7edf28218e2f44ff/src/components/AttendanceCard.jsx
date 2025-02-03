import React from 'react';

const AttendanceCard = ({ student }) => {
    return (
        <div data-curate-edit-id="5e7de3a1-c079-4f9f-8d33-65c528291519" className="card bg-base-100 shadow-xl">
            <div data-curate-edit-id="3b34c676-297c-453e-a2a8-85f58decf372" className="card-body">
                <div data-curate-edit-id="c078a6fe-9d1e-42c4-8a8d-5cd73d9156f8" className="flex justify-between items-center">
                    <h2 data-curate-edit-id="02861ea4-5f12-420f-a776-b4315d3537b7" className="card-title">{student.name}</h2>
                    {student.absences >= student.threshold && 
                        <span data-curate-edit-id="002bffe3-ff43-4901-9a1c-5ef4204ba873" className="alert-badge">Alert!</span>
                    }
                </div>
                <p data-curate-edit-id="409b2ec5-a16e-4b38-8348-9a51867c6e05">Absences: {student.absences}/{student.threshold}</p>
                <progress data-curate-edit-id="2c75befa-24dc-4d4d-8a2d-6641132086d8" 
                    className="progress progress-error" 
                    value={student.absences} 
                    max={student.threshold}
                ></progress>
                <div data-curate-edit-id="755834be-e388-473d-b2bd-1160133654ad" className="card-actions justify-end">
                    <button data-curate-edit-id="bcc04bda-8c56-4c75-9658-b2d9ee55285a" className="btn btn-primary">Mark Absent</button>
                </div>
            </div>
        </div>
    );
};

export default AttendanceCard;