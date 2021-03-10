import * as React from "react"

import Card from "../components/card"

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

          <Card title="Dispuut Bastaard">
            Bourgondisch dispuut Bastaard is een dispuut van Studievereniging Sticky, en heeft goed eten en drinken hoog in het vaandel staan. Het doel van Bastaard is het verhogen van de kwaliteit van leven van de student en het bevorderen van de Bourgondische levensstijl.
          </Card>

          <Card title="Leden">
            Dispuut Bastaard telt op dit moment 14 leden:
            <ul class="list-disc ml-4">
              {leden.map((lid) => {
                return <li>{lid}</li>
              })}
            </ul>
          </Card>

          <Card title="Reglement van Orde">
            Ons Reglement van Orde is gedeponeerd bij <a href="https://svsticky.nl">Studievereniging Sticky</a>.<br></br>
            U kunt deze ook <a href={rvo}>hier</a> downloaden.
          </Card>

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
