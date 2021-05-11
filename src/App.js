import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Browse from './components/Browse'
import Battle from './components/Battle'

import PokemonContext from './context/context'
import usePokemons from './hooks/usePokemons'

import TopModal from './components/TopModal'
import WiningDev from './components/WiningDev'

import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/loader.scss'

function App () {
  const {
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
    computerSelectedPoke,
    setComputerSelectedPoke
  } = usePokemons()
  return (
    <PokemonContext.Provider value={{
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
      computerSelectedPoke,
      setComputerSelectedPoke
    }}
    >
      <Router>
        <div className='App'>
          <TopModal />
          <WiningDev />

          <Header />
          <div>
            <Switch>
              <Route exact path='/'>
                <Browse />
              </Route>
              <Route exact path='/battle' component={Battle} />
            </Switch>
          </div>
        </div>
      </Router>
    </PokemonContext.Provider>
  )
}

export default App
