import Todo from './Todo';
import './todolist.css';

function TodoList({todos, completeTodo, deleteTodo}) {

    const listTodos = todos.map((todo) => {
            return <Todo key = {todo.id} todo={todo} completeTodo = {completeTodo} deleteTodo = {deleteTodo} />
            });

    return (
        <>
           <ul>{listTodos}</ul>
        </>
    )

}

export default TodoList;