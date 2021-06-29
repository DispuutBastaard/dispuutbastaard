import * as React from "react"

const Card = props => {
  return (
    <div class="bg-white dark:bg-black dark:border-2 border-karmijnrood w-full p-12 rounded-xl my-8 shadow-xl dark:text-white">
    <h1>{props.title}</h1>
    {props.children}
    </div>
  )
}

export default Card
