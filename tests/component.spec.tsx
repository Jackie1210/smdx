import { renderToString } from 'solid-js/web'
import { evaluate } from '@mdx-js/mdx'
import { useMDXComponents } from 'smdx'
import * as runtime from 'solid-js/h/jsx-runtime'

describe('test', () => {
  it('should work', async () => {
    const { default: Content } = await evaluate('# hi', {
      ...runtime,
      useMDXComponents
    })
    const html = renderToString(() => <Content />)

    expect(html).toContain('hi')
  })
})