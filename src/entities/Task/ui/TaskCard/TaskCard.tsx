import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

import cls from './TaskCard.module.scss';
import { Task } from '../../model/types';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

interface TaskCardProps {
  className?: string;
  item: Task;
  onChangeCheckbox: (id: string, checked: boolean) => void;
}

export const TaskCard = memo((props: TaskCardProps) => {
  const { className, item, onChangeCheckbox } = props;

  const handleCheckboxChange = (checked: boolean) => {
    onChangeCheckbox(item.id, checked);
  };

  return (
    <div className={classNames(cls.TaskCard, {}, [className])}>
      <Checkbox onChange={handleCheckboxChange} checked={item.completed} />
      <div className={classNames('', { [cls.taskCompleted]: item.completed }, [])}>{item.value}</div>
    </div>
  );
});
