// This component displays the placeholderDB data to the user in a readable manner

const TrainingDisplay = ({ placeholderDB }) => {

    return (
        <>
            <h4>Logged Training:</h4>

            {/* Loop through each item in the placeholderDB and display the value to the user */}
            {Object.keys(placeholderDB).length > 0 ? (
                <div>
                    <p><strong>Date:</strong> {placeholderDB.date}</p>
                    <p><strong>Start Time:</strong> {placeholderDB.startTime}</p>
                    <p><strong>End Time:</strong> {placeholderDB.endTime}</p>
                    <p><strong>Total Duration:</strong> {placeholderDB.totalTime}</p>
                    <p><strong>Training Activity:</strong> {placeholderDB.activityDescription}</p>
                    <p><strong>Notable Things Learned:</strong> {placeholderDB.learnedDescription}</p>
                </div>
            ) : (
                <p>No training has taken place</p>
            )}
        </>
    );
};

export default TrainingDisplay;