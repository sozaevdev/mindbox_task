import { render, screen } from '@testing-library/react';

import { TaskList } from './TaskList';
import { Task } from '../../model/types';

const mockTasks: Task[] = [
  { id: '1', value: 'Task 1', completed: false },
  { id: '2', value: 'Task 2', completed: true },
];

describe('TaskList', () => {
  test('renders without crashing', () => {
    render(<TaskList taskItems={mockTasks} onChangeCheckbox={jest.fn()} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('displays all tasks', () => {
    render(<TaskList taskItems={mockTasks} onChangeCheckbox={jest.fn()} />);
    expect(screen.getAllByRole('checkbox')).toHaveLength(mockTasks.length);
  });

  test('applies custom className', () => {
    const { container } = render(<TaskList taskItems={mockTasks} onChangeCheckbox={jest.fn()} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
