import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

import cls from './TaskList.module.scss';
import { Task } from '../../model/types';
import { TaskCard } from '../TaskCard/TaskCard';

interface TaskListProps {
  className?: string;
  taskItems: Task[];
  onChangeCheckbox: (id: string, checked: boolean) => void;
}

export const TaskList = memo((props: TaskListProps) => {
  const { className, taskItems, onChangeCheckbox } = props;

  return (
    <div className={classNames(cls.TaskList, {}, [className])}>
      {taskItems.map((item) => (
        <TaskCard item={item} key={item.id} onChangeCheckbox={onChangeCheckbox} />
      ))}
    </div>
  );
});
