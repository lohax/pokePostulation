import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_INFO } from '../graphql/getPokemons'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const usePokemons = () => {
  const myFirst = 151

  const { data, loading, error } = useQuery(GET_POKEMON_INFO, {
    variables: { first: myFirst }
  })

  const [allPokeFound, setallPokeFound] = useState([])

  const [state, setState] = useState({
    isPaneOpen: false,
    showModal: true,
    showWinModal: false,
    runConfetti: false
  })

  const [selectedPoke, setSelectedPoke] = useState([])
  const [multiSelectedPoke, setMultiSelectedPoke] = useState([])

  const computerSelectedPoke = [{
    id: 'legendaryOtter',
    number: '152',
    name: 'Loutre développeuse',
    classification: 'Loutre développeuse légendaire',
    types: [
      'Water', 'Développeur FrontEnd', 'Développeur ultra Motivé'
    ],
    resistant: [
      ['Fire', 'Grass', 'Ice']
    ],
    weaknesses: [
      ['Water', 'Ground', 'Rock']
    ],
    fleeRate: 0.06,
    maxCP: 2021,
    maxHP: 1984,
    image: '../images/loutreDev.png',
    evolutions: null,
    attacks: {
      fast: [
        {
          name: 'CV',
          type: 'background',
          damage: 5
        },
        {
          name: 'Auto-dérision',
          type: 'humour',
          damage: '10'
        }
      ],
      special: [
        {
          name: 'lettre de motivation',
          type: 'motivation',
          damage: '15'
        },
        {
          name: 'App de motivation',
          type: 'motivation humour',
          damage: '20'
        }
      ]
    }
  }]

  function notify (typ) {
    toast.error(
      typ === 'max' ? 'You have reach the maximum of 5 pokemons' : 'You haven\'t reach the minimun of 3 pokemons'
      , {
        toastId: 'maxpoke',
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
  }

  const handleClick = (pokemon, el) => {
    if (!multiSelectedPoke.includes(pokemon)) {
      if (multiSelectedPoke.length <= 4) {
        setMultiSelectedPoke(multiSelectedPoke => [...multiSelectedPoke, pokemon])
      } else {
        notify('max')
      }
    } else {
      const index = multiSelectedPoke.indexOf(pokemon)
      const array = [...multiSelectedPoke]
      if (index > -1) {
        array.splice(index, 1)
        setMultiSelectedPoke(multiSelectedPoke => array)
      }
    }
  }

  const handleDblClick = (pokemon) => {
    setSelectedPoke(pokemon)
    setState({ isPaneOpen: true })
  }

  const handleSearch = (filtered, searchFilter) => {
    setallPokeFound(allPokeFound => [])
    filtered.map((key, index) => (
      setallPokeFound(allPokeFound => [...allPokeFound, key.item])
    ))

    const lstpokeName = []
    filtered.map((key, index) => (
      lstpokeName.push(key.item.name)
    ))

    // list of div container. If id equal to search fadeIn else out
    const lstdiv = Array.from(document.querySelector('#lstpokeContainer').childNodes)
    for (let i = 0; i < lstdiv.length; ++i) {
      const pokeDiv = lstdiv[i]
      if (typeof pokeDiv.id !== 'undefined') {
        if (searchFilter === '') {
          document.getElementById(pokeDiv.id).className = 'animated animatedFadein'
        } else {
          if (!lstpokeName.includes(pokeDiv.id)) {
            document.getElementById(pokeDiv.id).className = 'animated animatedFadeOut'
          } else {
            document.getElementById(pokeDiv.id).className = 'animated animatedFadein'
          }
        }
      }
    }
  }

  return {
    data,
    loading,
    error,
    allPokeFound,
    state,
    setState,
    selectedPoke,
    setSelectedPoke,
    multiSelectedPoke,
    setMultiSelectedPoke,
    handleClick,
    handleDblClick,
    handleSearch,
    computerSelectedPoke
  }
}

export default usePokemons
