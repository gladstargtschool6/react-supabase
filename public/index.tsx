
import { useRealtime } from 'react-supabase' const Todos = () => { const [result, reexecute] = useRealtime('todos') const { data, fetching, error } = result if (fetching) return <p>Loading...</p> if (error) return <p>Oh no... {error.message}</p> return ( <ul> {data.map((todo) => ( <li key={todo.id}>{todo.title}</li> ))} </ul> ) }
