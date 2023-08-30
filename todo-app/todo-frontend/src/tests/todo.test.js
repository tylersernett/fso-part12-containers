import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from '../Todos/Todo';

describe('Todo Component', () => {
  const mockTodo = {
    _id: '1',
    text: 'Test Todo',
    done: false,
  };
  
  const mockDeleteTodo = jest.fn();
  const mockCompleteTodo = jest.fn();

  it('renders todo correctly when not done', () => {
    render(<Todo todo={mockTodo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('This todo is not done')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Set as done')).toBeInTheDocument();
  });

  it('renders todo correctly when done', () => {
    render(<Todo todo={{ ...mockTodo, done: true }} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('This todo is done')).toBeInTheDocument();
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('calls deleteTodo when delete button is clicked', () => {
    render(<Todo todo={mockTodo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo);
  });

  it('calls completeTodo when complete button is clicked', () => {
    render(<Todo todo={mockTodo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />);

    const completeButton = screen.getByText('Set as done');
    fireEvent.click(completeButton);

    expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo);
  });
});