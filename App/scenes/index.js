import React from 'react'
import { Scene, Actions } from 'react-native-router-flux'

import HomeScreen from '../components/Home'
import Cards from '../components/Cards'

const scenes = Actions.create(
  <Scene key="root">
      <Scene key="home" initial component={HomeScreen} hideNavBar />
      <Scene key="cards" panHandlers={null} direction={'vertical'} component={Cards} hideNavBar />
  </Scene>
)

export default scenes
