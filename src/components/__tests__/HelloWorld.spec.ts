import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Title from '../WebAppTitle.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Title, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
