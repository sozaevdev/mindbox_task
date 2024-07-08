import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo, useState } from 'react';

import cls from './Todo.module.scss';

import { Text, TextAlign } from '@/shared/ui/Text';
import { AddTodo } from '@/features/addTodo';
import { FilterTodo } from '@/features/FilterTodo';
import { Task, TaskList, TaskType } from '@/entities/Task';

import { v4 as uuidv4 } from 'uuid';

interface TodoPrpos {
  className?: string;
}

export const Todo = memo(({ className }: TodoPrpos) => {
  const [isOpenTasks, setIsOpenTasks] = useState(true);

  const [activeTab, setActiveTab] = useState(TaskType.ALL);

  const [taskItems, setTasksItems] = useState<Task[]>([
    { id: '1', value: 'Тестовое задания', completed: false },
    { id: '2', value: 'Прекрасный код', completed: true },
    { id: '3', value: 'Покрытие тестами', completed: false },
  ]);

  const openTaskList = useCallback(() => {
    setIsOpenTasks((prev) => !prev);
  }, []);

  const addTodoTask = useCallback((value: string) => {
    setTasksItems((prevTasks) => [...prevTasks, { id: uuidv4(), value, completed: false }]);
  }, []);

  const onChangeCheckbox = useCallback((id: string, checked: boolean) => {
    setTasksItems((tasks) => tasks.map((task) => (task.id === id ? { ...task, completed: checked } : task)));
  }, []);

  const isActiveItems = useMemo(() => {
    return taskItems.filter((task) => !task.completed).length;
  }, [taskItems]);

  const clearCompletedTasks = useCallback(() => {
    const notCompletedTasks = taskItems.filter((task) => !task.completed);
    setTasksItems(notCompletedTasks);
  }, [taskItems]);

  const onChangeType = useCallback(
    (value: TaskType) => {
      if (activeTab !== value) {
        setActiveTab(value);
      }
    },
    [activeTab, setActiveTab],
  );

  const filterTasksItems = useCallback(
    (activeTab: TaskType) => {
      switch (activeTab) {
        case TaskType.COMPLETED:
          return taskItems.filter((task) => task.completed);
        case TaskType.ACTIVE:
          return taskItems.filter((task) => !task.completed);
        case TaskType.ALL:
        default:
          return taskItems;
      }
    },
    [taskItems],
  );

  const filteredTaskItems = useMemo(() => filterTasksItems(activeTab), [filterTasksItems, activeTab]);

  return (
    <div className={classNames(cls.Todo, {}, [className])}>
      <Text title="todos" align={TextAlign.CENTER} />

      <AddTodo data-testId="btn-open-todo" isOpenTasks={isOpenTasks} openTaskList={openTaskList} addTodoTask={addTodoTask} />

      {isOpenTasks && (
        <div data-testid="todo-tasks" className={cls.wrapperTodoTasks}>
          <TaskList taskItems={filteredTaskItems} onChangeCheckbox={onChangeCheckbox} className={classNames(cls.TaskListWrapper, {}, [])} />

          <FilterTodo isActiveItems={isActiveItems} clearCompletedTasks={clearCompletedTasks} onChangeType={onChangeType} valueActiveTab={activeTab} />
        </div>
      )}
    </div>
  );
});
