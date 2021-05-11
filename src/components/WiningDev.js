import React, { useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Pokeball from '../images/pokeball_icon.png'
import loutreDev from '../images/loutreDev.png'
import cv from '../assets/CV_loic_chambost.pdf'
import motiv from '../assets/Motivation_loic_chambost.pdf'

import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

import { PokemonContext } from '../context/'

import '../sass/confetti.scss'

const WiningDev = () => {
  const { width, height } = useWindowSize()
  const {
    state,
    setState
  } = useContext(PokemonContext)

  useEffect(() => {
    setState({ runConfetti: false })
  }, [])

  const handleClose = () => setState({ showWinModal: false })

  const LinkLC = "<a href='https://loic-chambost.dev/' target='_blank' />loic-chambost.dev</a>"
  const linkCV = `<a href=${cv} target='_blank' />Mon Cv</a>`
  const linkLM = `<a href=${motiv} target='_blank' />Lettre de motivation</a>`

  return (
    <>
      <div className='confetti-overlay'>
        <Confetti
          run={state.runConfetti}
          width={width}
          height={height}
          tweenDuration={1000}
          numberOfPieces={150}
          recycle={false}
          confettiSource={{
            x: width / 2,
            y: height / 3
          }}
        />
      </div>

      <Modal
        show={state.showWinModal}
        onHide={handleClose}
        backdrop='static'
        autoFocus
      >

        <Modal.Header closeButton>
          <Modal.Title><h3>Vous remportez un "pokemon" Légendaire !</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4>
            Bravo l'équipe QoQa!
          </h4>
          <div className='font-weight-bold mt-4'>
            Vous remportez ce fabuleux pokemon !!!
            <img
              className='align-top ml-3 '
              style={{ width: '220px' }}
              src={loutreDev}
              alt='loutreDev'
              fluid
            />
          </div>
          <div className='mt-4'>
            Pour plus d'informations concernant ses caractéristiques, rendez-vous sur :
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: LinkLC.replace(/href/g, "target='_blank' href")
            }}
          />
          <div className='mt-2'>Vous trouverez ici le détail de l'attaque <b>CV</b> : </div>
          <div
            dangerouslySetInnerHTML={{
              __html: linkCV.replace(/href/g, "target='_blank' href")
            }}
          />
          <div className=' mt-2'>Et la, le detail de l'attaque <b>lettre de motivation</b> :</div>
          <div
            dangerouslySetInnerHTML={{
              __html: linkLM.replace(/href/g, "target='_blank' href")
            }}
          />

          <div className='mt-4'>Merci d'avoir pris le temps de jouer ! </div>
          <div className='mt-2'>J'espère à très vite ! </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Fermer
            <img
              className='align-top ml-3 '
              style={{ width: '22px' }}
              src={Pokeball}
              alt='pokeball'
              fluid
            />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WiningDev
