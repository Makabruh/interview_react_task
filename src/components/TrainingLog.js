// This component takes the inputs from the user for an instance of training

import { useState } from 'react';

const TrainingLog = ({onSubmit}) => {

    // States handling the data input by the user
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [totalTime, setTotalTime] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    const [learnedDescription, setLearnedDescription] = useState('');

    // Function to handle submission of form
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            date,
            startTime,
            endTime,
            totalTime,
            activityDescription,
            learnedDescription
        };
        onSubmit(data);
    };


    return (
        <>
            <h3>Training Log</h3>

            <form>
            
                {/* Date of training input - the date that the training has taken place */}
                <label>
                    Date of Training:
                </label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <br />

                {/* Start time of training input - the time that the training began */}
                <label>
                    Time Training Started:
                </label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />

                <br />

                {/* End time of training input - the time that the training ended */}
                <label>
                    Time Training Ended:
                </label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />

                <br />

                {/* End time of training input - the time that the training ended */}
                <label>
                    Total Training Duration (hh:mm) :
                </label>
                <input
                    type="text"
                    value={totalTime}
                    onChange={(e) => setTotalTime(e.target.value)}
                    placeholder="hh:mm"
                    pattern="^([0-9]{1,2}):([0-5][0-9])$"
                />

                <br />

                {/* Activity description input - the description of the activity taken place */}
                <label>
                    Training Activity:
                </label>
                <textarea
                    value={activityDescription}
                    onChange={(e) => setActivityDescription(e.target.value)}
                />

                <br />

                {/* Notable things learned description input - the description of anything particularly interesting to the learner */}
                <label>
                    Notable Things Learned:
                </label>
                <textarea
                    value={learnedDescription}
                    onChange={(e) => setLearnedDescription(e.target.value)}
                />

                <br />

                <button onClick={handleSubmit}>Submit Training Details</button>

            </form>
            


        </>
    )
}

export default TrainingLog;

