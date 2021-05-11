import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Pokeball from '../images/pokeball_icon.png'

import { PokemonContext } from '../context/'

const TopModal = () => {
  const {
    state,
    setState
  } = useContext(PokemonContext)

  const handleClose = () => setState({ showWinModal: false })

  const LinkLC = "<a href='https://loic-chambost.dev/' target='_blank' />loic-chambost.dev</a>"
  const linkCV = "<a href='https://loic-chambost.dev/' target='_blank' />Mon Cv</a>"
  const linkLM = "<a href='https://loic-chambost.dev/' target='_blank' />Lettre de motivation</a>"

  return (
    <>
      <Modal
        show={state.showWinModal}
        onHide={handleClose}
        // size='sm'
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

export default TopModal
