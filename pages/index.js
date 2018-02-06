import React from 'react'
import { reduxPage } from '../store'

import Canvas from '../containers/Canvas'

const Home = (props) => <Canvas url={props.url} />

export default reduxPage(Home)
