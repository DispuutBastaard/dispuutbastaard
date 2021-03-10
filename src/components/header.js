import * as React from "react"
import logo from "../images/logo.svg"

const Header = () => {
  return (
    <div class="bg-gray-800 items-center flex flex-col w-full h-32 mb-16">
      <img src={logo} alt="Logo" class="h-48"></img>
    </div>
  )
}

export default Header
