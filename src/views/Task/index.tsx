import {TaskInterface} from "../../interfaces";
import './task.scss';

export const Task = ({text, id, answer}: TaskInterface) => {

    return (
        <div className='task'>
            <div className='task__question'>
                №{id}: {text}
            </div>
            <pre className='task__answer'>
                {answer}
            </pre>
        </div>
    )
}