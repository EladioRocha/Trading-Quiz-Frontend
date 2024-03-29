import React from 'react'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import { Button } from 'react-onsenui'
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp'
import Confetti from 'react-confetti'

const QuizResult = props => {
  const cookies = new Cookies(),
    text = {
      congrats: {
        es: 'Felicidades',
        en: 'Congrats'
      },
      buttonShare: {
        es: 'Compartir resultados',
        en: 'Share result'
      },
      buttonHome: {
        es: 'Ir al inicio',
        en: 'Go to home'
      }
    }

  return (
    <main className="w-100 h-100 bg-blue-dark">
      <Confetti />
      <section className="h-33">
        <div className="w-100 center-xy h-100">
          <img className="round-50" src="https://picsum.photos/200/300" height="100px" width="100px"></img>
        </div>
      </section>
      <section className="h-33 center-xy">
        <div className="w-85 h-100">
          <ons-row>
            <h3 className="txt-center w-100 rubik-regular txt-white m-0 p-0 py-5px">{text.congrats[cookies.get('iso')]}!</h3>
          </ons-row>
          <ons-row>
            <p className="txt-center w-100 rubik-regular txt-gray fs-15px m-0 p-0">{props.params.message}</p>
          </ons-row>
        </div>
      </section>
      <section className="h-33 center-xy">
        <div className="w-85 h-100">
          <div className="w-100 center-x">
            <Button className="round-30px center-xy bg-none border-1px" modifier="large--cta">
              <MonetizationOnSharpIcon className="mr-10px" />{text.buttonShare[cookies.get('iso')]}
            </Button>
          </div>
          <div className="w-100 center-x mt-10px">
            <Link className="w-100" to={"/Home"}>
              <Button className="hover-btn round-30px bg-success" modifier="large--cta">{text.buttonHome[cookies.get('iso')]}</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default QuizResult;
