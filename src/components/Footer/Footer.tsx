import React from 'react';
import { FilterType } from '../../types/FilterTyper';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  filterBy: FilterType;
  todosCounter: number;
  handleSetFilter: (filter: FilterType) => void;
  todos: Todo[];
  handleDeleteCompletedTodos: () => void;

};

const Footer: React.FC<Props> = React.memo(
  ({ filterBy, todosCounter, handleSetFilter, todos, handleDeleteCompletedTodos}) => {

    return (
      <footer className="todoapp__footer" data-cy="Footer">
        <span className="todo-count" data-cy="TodosCounter">
          {todosCounter} {todosCounter === 1 ? 'item left' : 'items left'}
        </span>
        {/* Active link should have the 'selected' class */}
        <nav className="filter" data-cy="Filter">
          <a
            href="#/"
            className={cn("filter__link", {
              "selected": filterBy === FilterType.all,
            })}
            data-cy="FilterLinkAll"
            onClick={() => handleSetFilter(FilterType.all)}
          >
            All
          </a>

          <a
            href="#/active"
            className={cn("filter__link", {
              "selected": filterBy === FilterType.active,
            })}
            data-cy="FilterLinkActive"
            onClick={() => handleSetFilter(FilterType.active)}
          >
            Active
          </a>

          <a
            href="#/completed"
            className={cn("filter__link", {
              "selected": filterBy === FilterType.completed,
            })}
            data-cy="FilterLinkCompleted"
            onClick={() => handleSetFilter(FilterType.completed)}
          >
            Completed
          </a>
        </nav>
        {/* this button should be disabled if there are no completed todos */}
        <button
          type="button"
          className="todoapp__clear-completed"
          data-cy="ClearCompletedButton"
          disabled={!todos.some((todo) => todo.completed)}
          onClick={handleDeleteCompletedTodos}
        >
          Clear completed
        </button>
      </footer>
    );
  },
);

Footer.displayName = 'Footer';
export default Footer;
