// This component provides the layout for the interview task and acts as the parent component to all subsequent children

import {useState} from 'react';
import TrainingLog from './TrainingLog';
import TrainingDisplay from './TrainingDisplay';

const TaskComponentLayout = () => {

    const [placeholderDB, setPlaceholderDB] = useState({});

    const handleTrainingLogSubmit = (data) => {
        setPlaceholderDB(data);
        console.log(placeholderDB)
    }


    return (
        <section>
            <TrainingLog onSubmit={handleTrainingLogSubmit}/>
            <TrainingDisplay placeholderDB={placeholderDB}/>
        </section>
    )
}

export default TaskComponentLayout;

