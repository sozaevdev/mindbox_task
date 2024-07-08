import { useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button/Button';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { TaskType } from '@/entities/Task';

import cls from './FilterTodo.module.scss';

export interface FilterTodoProps {
  className?: string;
  isActiveItems: number;
  valueActiveTab: string;
  clearCompletedTasks: () => void;
  onChangeType: (type: TaskType) => void;
}

export const FilterTodo = (props: FilterTodoProps) => {
  const { className, isActiveItems, clearCompletedTasks, valueActiveTab, onChangeType } = props;

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as TaskType);
    },
    [onChangeType],
  );

  const TodoTabs = useMemo<TabItem[]>(
    () => [
      { value: TaskType.ALL, content: 'All' },
      { value: TaskType.ACTIVE, content: 'Active' },
      { value: TaskType.COMPLETED, content: 'Completed' },
    ],
    [],
  );

  return (
    <div className={classNames(cls.FilterTodo, {}, [className])}>
      <HStack justify="between">
        <Text text={`${isActiveItems} items left`} size={TextSize.S} />
        <HStack justify="between" className={cls.filterButtonWrapper}>
          <Tabs tabs={TodoTabs} value={valueActiveTab} onTabClick={onTabClick} />
        </HStack>
        <Button theme="clear" onClick={clearCompletedTasks}>
          Clear Completed
        </Button>
      </HStack>
    </div>
  );
};
