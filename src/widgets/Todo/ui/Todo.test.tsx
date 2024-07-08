import { fireEvent, render, screen } from '@testing-library/react';
import { Todo } from './Todo';

describe('Todo', () => {
  test('renders Todo component', () => {
    render(<Todo />);
    expect(screen.getByText('todos')).toBeInTheDocument();
  });

  test('initially renders with tasks visible', () => {
    render(<Todo />);
    expect(screen.getByTestId('todo-tasks')).toBeInTheDocument();
  });

  test('toggles Todo tasks visibility', () => {
    render(<Todo />);

    const toggleBtn = screen.getByTestId('btn-open-todo');
    expect(screen.getByTestId('todo-tasks')).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    expect(screen.queryByTestId('todo-tasks')).not.toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('todo-tasks')).toBeInTheDocument();
  });
});
