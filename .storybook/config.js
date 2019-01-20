import { configure } from '@storybook/react'

import { map } from 'ramda'

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories () {
  map(filename => req(filename), req.keys())
}

configure(loadStories, module)
