import React from 'react'
import { shallow } from 'enzyme'

import UsersList from '../UsersList'

const users = [
    {
      'active': true,
      'email': 'kenessajr@gmail.com',
      'id': 1,
      'username': 'kenessajr'
    },
    {
      'active': true,
      'email': 'kenessa@kenessa.io',
      'id': 2,
      'username': 'kenessa'
    }
  ]

test('UsersList render properly', () => {
  const wrapper = shallow(<UsersList users={users}/>)
  const element = wrapper.find('h4')
  expect(element.length).toBe(2)
  expect(element.get(0).props.children).toBe('kenessajr')
})
