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

  const handleClose = () => setState({ showModal: false })

  const link = "<a href='https://www.jobup.ch/fr/emplois/detail/1876259' target='_blank' />Jobup.ch</a>"

  return (
    <>
      <Modal
        show={state.showModal}
        onHide={handleClose}
        // size='sm'
        autoFocus
      >
        <Modal.Header closeButton>
          <Modal.Title><h3>Obtenez un "pokemon" Légendaire !</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            Bonjour l'équipe QoQa!
          </h4>
          <div className='d-inline'>J'ai vu votre annonce sur </div>
          <div
            className='d-inline'
            dangerouslySetInnerHTML={{
              __html: link.replace(/href/g, "target='_blank' href")
            }}
          />
          <div className='mt-2'>Je vous propose donc un petit jeu afin d'acquérir  un pokemon légendaire : </div>
          <div className='font-weight-bold mt-2'>Une loutre développeuse !!!</div>
          <div className='mt-2'>Composez votre équipe de 3 à 5 pokemons et partez au combat</div>
          <div className='mt-2'>Faites un double-clic sur les pokemons pour voir leurs caractéristiques et évolutions</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Obtenir ma loutre
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
