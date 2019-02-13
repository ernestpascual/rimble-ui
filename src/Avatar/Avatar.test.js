import Avatar from './'
import ThemeProvider from '../ThemeProvider'
import theme from '../theme'

describe('Avatar component sanity', () => {
  it('has name', () => {
    expect(Avatar.displayName).toBe('Avatar')
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Avatar />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
