import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from '../Todos/Todo';

describe('Todo Component', () => {
  const mockTodo = {
    _id: '1',
    text: 'Test Todo',
    done: false,
  };
  
  const mockOnClickDelete = jest.fn();
  const mockOnClickComplete = jest.fn();

  it('renders todo correctly when not done', () => {
    render(<Todo todo={mockTodo} onClickDelete={mockOnClickDelete} onClickComplete={mockOnClickComplete} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('This todo is not done')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Set as done')).toBeInTheDocument();
  });

  it('renders todo correctly when done', () => {
    render(<Todo todo={{ ...mockTodo, done: true }} onClickDelete={mockOnClickDelete} onClickComplete={mockOnClickComplete} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('This todo is done')).toBeInTheDocument();
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('calls onClickDelete when delete button is clicked', () => {
    render(<Todo todo={mockTodo} onClickDelete={mockOnClickDelete} onClickComplete={mockOnClickComplete} />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockOnClickDelete).toHaveBeenCalledWith(mockTodo);
  });

  it('calls onClickComplete when complete button is clicked', () => {
    render(<Todo todo={mockTodo} onClickDelete={mockOnClickDelete} onClickComplete={mockOnClickComplete} />);

    const completeButton = screen.getByText('Set as done');
    fireEvent.click(completeButton);

    expect(mockOnClickComplete).toHaveBeenCalledWith(mockTodo);
  });
});