import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('adds a new expense to the beginning of the list', () => {
  const { container } = render(<App />);

  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: '2025' }
  });
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'Coffee' }
  });
  fireEvent.change(screen.getByRole('spinbutton'), {
    target: { value: '12.50' }
  });
  fireEvent.change(container.querySelector('input[type="date"]'), {
    target: { value: '2025-02-01' }
  });
  fireEvent.click(screen.getByRole('button', { name: /add expense/i }));

  const expenseTitles = Array.from(
    container.querySelectorAll('.expense-item h2'),
    (heading) => heading.textContent
  );

  expect(expenseTitles[0]).toBe('Coffee');
  expect(screen.getByText('12.5')).toBeDefined();
  expect(expenseTitles).toHaveLength(2);
});

test('shows only expenses from the selected year', () => {
  const { container } = render(<App />);

  const getExpenseTitles = () => Array.from(
    container.querySelectorAll('.expense-item h2'),
    (heading) => heading.textContent
  );

  expect(getExpenseTitles()).toEqual(['New Book']);

  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: '2026' }
  });

  expect(getExpenseTitles()).toEqual(['Old Book', 'Old Book', 'Old Book']);
});
