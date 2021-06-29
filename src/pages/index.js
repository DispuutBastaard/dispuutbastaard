import * as React from "react"

import Card from "../components/card"

import logo from "../images/logo.svg"
import rvo from "../images/rvo.pdf"
import leden from "../data/leden.json"

const IndexPage = () => {
  return (
    <main class="h-full bg-gray-200 dark:bg-black">
      <title>Dispuut Bastaard</title>
      <div class="bg-gray-800 dark:bg-black dark:border-b-2 border-karmijnrood items-center flex flex-col w-full h-32 mb-32">
        <img src={logo} alt="Logo" class="h-64"></img>
      </div>
      <div class="h-full bg-gray-200 dark:bg-black flex flex-col items-center">
        <div class="max-w-5xl">

          <Card title="Dispuut Bastaard">
            <p>
              Bourgondisch dispuut Bastaard is een dispuut van Studievereniging Sticky, en heeft goed eten en drinken hoog in het vaandel staan. Het doel van Bastaard is het verhogen van de kwaliteit van leven van de student en het bevorderen van de Bourgondische levensstijl.
            </p>
            <p>
              Bastaard komt minstens eenmaal per maand bijeen voor een dispuutsavond, meestal met een uitgebreide maaltijd.
              Daarnaast houden wij open avonden, organiseren we activiteiten voor het dispuut en eenmaal per jaar een activiteit voor Studievereniging Sticky.
            </p>
          </Card>

          <Card title="Leden">
            Dispuut Bastaard telt op dit moment 14 leden:
            <ul class="list-disc ml-4">
              {leden.map((lid) => {
                return <li>{lid}</li>
              })}
            </ul>
          </Card>

          <Card title="Lid worden">
            Je kunt alleen lid worden van Dispuut Bastaard als je lid bent van Studievereniging Sticky.
            Als je interesse hebt om lid te worden van Bastaard, geef dit dan aan bij het bestuur.
            Wij nodigen je dan uit voor een open avond om je beter te leren kennen, en indien deze kennismaking goed bevalt, voor een besloten dispuutsavond.
            Hierna zal er per unanieme stemming besloten worden tot toetreding.
          </Card>

          <Card title="Contact">
            Je kunt het bestuur van Bastaard bereiken op <a href="mailto:bastaard@svsticky.nl">bastaard@svsticky.nl</a>
          </Card>

          <Card title="Reglement van Orde">
            Ons Reglement van Orde is gedeponeerd bij <a href="https://svsticky.nl">Studievereniging Sticky</a>.<br></br>
            U kunt deze ook <a href={rvo}>hier</a> downloaden.
          </Card>

        </div>
      </div>
      <footer class="bg-gray-800 dark:bg-black dark:border-t-2 border-karmijnrood bottom-0 w-full flex flex-row h-16 items-center">
        <span class="text-white text-center w-full">
          © Dispuut Bastaard - {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  )
}

export default IndexPage
