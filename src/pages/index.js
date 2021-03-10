import * as React from "react"
import logo from "../images/logo.svg"
import rvo from "../images/rvo.pdf"
import leden from "../data/leden.json"

const IndexPage = () => {
  return (
    <main class="h-full bg-gray-200">
      <title>Dispuut Bastaard</title>
      <div class="bg-gray-800 items-center flex flex-col w-full h-32 mb-32">
        <img src={logo} alt="Logo" class="h-64"></img>
      </div>
      <div class="h-full bg-gray-200 flex flex-col items-center">
        <div class="max-w-5xl">


          <div class="bg-white w-full p-12 rounded-xl my-8 shadow-xl">
            <h1 class="text-2xl mb-4">Dispuut Bastaard</h1>
            Bourgondisch dispuut Bastaard is een dispuut van Studievereniging Sticky, en heeft goed eten en drinken hoog in het vaandel staan.
            Het doel van Bastaard is het verhogen van de kwaliteit van leven van de student en het bevorderen van de Bourgondische levensstijl.
          </div>

          <div class="bg-white w-full p-12 rounded-xl my-8 shadow-xl">
            <h1 class="text-2xl mb-4">Leden</h1>
            Dispuut Bastaard telt op dit moment 14 leden:
            <ul class="list-disc ml-4">
              {leden.map((lid) => {
                return <li>{lid}</li>
              })}
            </ul>
          </div>

          <div class="bg-white w-full p-12 rounded-xl my-8 shadow-xl">
            <h1 class="text-2xl mb-4">Reglement van Orde</h1>
              Ons Reglement van Orde is gedeponeerd bij <a class="text-blue-400" href="https://svsticky.nl">Stickyvereniging Sticky</a>.<br></br>
              U kunt deze ook <a class="text-blue-400" href={rvo}>hier</a> downloaden.
          </div>

        </div>
      </div>
      <footer class="bg-gray-800 bottom-0 w-full flex flex-row h-16 items-center">
        <span class="text-white text-center w-full">
          © Dispuut Bastaard - {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  )
}

export default IndexPage
