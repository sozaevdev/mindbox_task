import { render, screen } from '@testing-library/react';
import { Text, TextTheme, TextAlign, TextSize } from './Text';

describe('Text component', () => {
  test('renders with default props', () => {
    render(<Text />);
    expect(screen.getByTestId('text')).toBeInTheDocument();
  });

  test('renders with title', () => {
    render(<Text title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders with text', () => {
    render(<Text text="Test Text" />);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  test('renders with title and text', () => {
    render(<Text title="Test Title" text="Test Text" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  test('applies theme class', () => {
    const { container } = render(<Text theme={TextTheme.PRIMARY} />);
    expect(container.firstChild).toHaveClass('primary');
  });

  test('applies align class', () => {
    const { container } = render(<Text align={TextAlign.CENTER} />);
    expect(container.firstChild).toHaveClass('center');
  });

  test('applies size class and correct header tag for size S', () => {
    const { container } = render(<Text size={TextSize.S} title="Small Title" />);
    expect(container.querySelector('h3')).toBeInTheDocument();
    expect(container.querySelector('h3')).toHaveClass('title');
    expect(container.firstChild).toHaveClass('size_s');
  });

  test('applies size class and correct header tag for size M', () => {
    const { container } = render(<Text size={TextSize.M} title="Medium Title" />);
    expect(container.querySelector('h2')).toBeInTheDocument();
    expect(container.querySelector('h2')).toHaveClass('title');
    expect(container.firstChild).toHaveClass('size_m');
  });

  test('applies size class and correct header tag for size L', () => {
    const { container } = render(<Text size={TextSize.L} title="Large Title" />);
    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveClass('title');
    expect(container.firstChild).toHaveClass('size_l');
  });

  test('applies custom class', () => {
    const { container } = render(<Text className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
