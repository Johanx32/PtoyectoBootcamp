import React from 'react';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

interface Todos {
    title: string;
}

export default async function page() {
    const todos: Todos[] = await getData();

    return(
        <>
            <div>Page</div>
            {todos.map(todo => <p>{todo.title}</p>)}
        </>
    );
}