---
title: Gladstar Gifted and Talented School
---

# Home Based School Programme

`Facilitating Functional [Education] For The Next Innovators, Entrepreneurs and Leaders.(https://www.gladstar.sch.ng).

## Features

- Scheduled and Flexible Class. 
- Free Counseling Chat.
- Opportunity for peer-peer discussion.
- Robust monitoring and evaluation.

## Community

Feel free to join the [discussions on Discord](https://discord.gg/MKCxutYd)!
import { useRealtime } from 'react-supabase'

const Todos = () => {
  const [result, reexecute] = useRealtime('todos')

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
