import * as React from "react"

const Card = props => {
  return (
    <div class="bg-white w-full p-12 rounded-xl my-8 shadow-xl">
    <h1>{props.title}</h1>
    {props.children}
    </div>
  )
}

export default Card
