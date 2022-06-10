import { useState } from 'react';
import { data } from '../../data';
import { Task } from '../Task';
import { Pagination } from '../../components/Pagination';
import { appConstants } from '../../consts';
import { TaskInterface } from '../../interfaces';
import './tasks.scss';

export const Tasks = () => {
  const questions = data.tasks;
  const { pageSize } = appConstants;
  const { pageChangingValue } = appConstants;
  const [currentPage, setCurrentPage] = useState(appConstants.currentPage);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentQuestionsOnThePage = questions.slice(indexOfFirstItem, indexOfLastItem);

  const handleClickIncrease = () => {
    setCurrentPage((prevState) => prevState + pageChangingValue);
  };
  const handleClickDecrease = () => {
    setCurrentPage((prevState) => prevState - pageChangingValue);
  };

  return (
    <section className="tasks">
      <h1 className="tasks__header">Tasks</h1>
      {currentQuestionsOnThePage.map((task: TaskInterface) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          answer={task.answer}
        />
      ))}
      <Pagination
        handleClickDecrease={handleClickDecrease}
        handleClickIncrease={handleClickIncrease}
        currentPage={currentPage}
        indexOfLastItem={indexOfLastItem}
        questions={questions}
      />
    </section>
  );
};
