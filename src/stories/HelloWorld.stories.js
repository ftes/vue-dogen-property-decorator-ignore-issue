/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import HelloWorld from '../components/HelloWorld.vue'

export default {
  component: HelloWorld,
  title: 'Hello World'
}

export const withText = () => ({
  components: { HelloWorld },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') }
})

export const withSomeEmoji = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="hey">'
})
