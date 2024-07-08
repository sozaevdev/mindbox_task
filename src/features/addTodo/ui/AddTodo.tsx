import { classNames } from '@/shared/lib/classNames/classNames';

import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { useState } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button/Button';

import cls from './AddTodo.module.scss';

import ArrowIcon from '@/shared/assets/icons/arrow.svg';

export interface AddTodoProps {
  className?: string;
  isOpenTasks: boolean;
  addTodoTask: (text: string) => void;
  openTaskList: () => void;
  'data-testId'?: string;
}

export const AddTodo = (props: AddTodoProps) => {
  const { className, isOpenTasks, openTaskList, addTodoTask, 'data-testId': dataTestId } = props;

  const [taskValue, setTaskValue] = useState('');

  const onChangeTaskValue = (value: string) => {
    setTaskValue(value);
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      addTodoTask(taskValue);
      setTaskValue('');
    }
  };

  return (
    <VStack className={classNames(cls.AddTodo, {}, [className])}>
      <div className={cls.inputWrapper}>
        <Button data-testId={dataTestId} theme="clear" onClick={openTaskList} className={cls.iconWrapper}>
          <Icon Svg={ArrowIcon} width={15} height={20} className={classNames(cls.iconArrow, { [cls.activeiconArrow]: isOpenTasks })} />
        </Button>

        <Input onKeyDown={onKeyPressHandler} placeholder="What needs to be done?" value={taskValue} onChange={onChangeTaskValue} />
      </div>
    </VStack>
  );
};
