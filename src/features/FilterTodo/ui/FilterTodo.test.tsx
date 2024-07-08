import { render, screen, fireEvent } from '@testing-library/react';
import { FilterTodo, FilterTodoProps } from './FilterTodo';
import { TaskType } from '@/entities/Task/model/types';

const defaultProps: FilterTodoProps = {
  isActiveItems: 5,
  valueActiveTab: TaskType.ALL,
  clearCompletedTasks: jest.fn(),
  onChangeType: jest.fn(),
};

describe('FilterTodo', () => {
  test('renders without crashing', () => {
    render(<FilterTodo {...defaultProps} />);
    expect(screen.getByText('5 items left')).toBeInTheDocument();
  });

  test('displays correct number of active items', () => {
    render(<FilterTodo {...defaultProps} isActiveItems={3} />);
    expect(screen.getByText('3 items left')).toBeInTheDocument();
  });

  test('displays tabs correctly', () => {
    render(<FilterTodo {...defaultProps} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  test('calls onChangeType when a tab is clicked', () => {
    const onChangeTypeMock = jest.fn();
    render(<FilterTodo {...defaultProps} onChangeType={onChangeTypeMock} />);
    const activeTab = screen.getByText('Active');
    fireEvent.click(activeTab);
    expect(onChangeTypeMock).toHaveBeenCalledWith(TaskType.ACTIVE);
  });

  test('calls clearCompletedTasks when clear button is clicked', () => {
    const clearCompletedTasksMock = jest.fn();
    render(<FilterTodo {...defaultProps} clearCompletedTasks={clearCompletedTasksMock} />);
    const clearButton = screen.getByText('Clear Completed');
    fireEvent.click(clearButton);
    expect(clearCompletedTasksMock).toHaveBeenCalledTimes(1);
  });
});
