import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo, AddTodoProps } from './AddTodo';

const defaultProps: AddTodoProps = {
  addTodoTask: jest.fn(),
  openTaskList: jest.fn(),
  isOpenTasks: false,
  'data-testId': 'btn-open-todo',
};

describe('AddTodo', () => {
  test('renders without crashing', () => {
    render(<AddTodo {...defaultProps} />);
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
  });

  test('calls openTaskList when button is clicked', () => {
    render(<AddTodo {...defaultProps} />);
    fireEvent.click(screen.getByTestId('btn-open-todo'));
    expect(defaultProps.openTaskList).toHaveBeenCalled();
  });

  test('calls addTodoTask and clears input on Enter key press', () => {
    render(<AddTodo {...defaultProps} />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(defaultProps.addTodoTask).toHaveBeenCalledWith('New Task');
    expect(input).toHaveValue('');
  });

  test('updates input value correctly', () => {
    render(<AddTodo {...defaultProps} />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Another Task' } });
    expect(input).toHaveValue('Another Task');
  });
});
