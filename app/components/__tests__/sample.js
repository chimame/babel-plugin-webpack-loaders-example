import sample from '../sample'

describe('toMatchSnapshot example', () => {
  test('render sample', () => {
    expect(sample()).toMatchSnapshot()
  })
})
