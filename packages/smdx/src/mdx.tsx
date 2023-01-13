import { createComponent, createContext, ParentComponent, useContext } from 'solid-js'
import type { MDXComponents } from 'mdx/types'

export const MDXContext = createContext<MDXComponents>({})

export const useMDXComponents = () => {
  const conetxt = useContext(MDXContext)

  return conetxt
}

interface Props {
  components: MDXComponents
}

export const MDXProvider: ParentComponent<Props> = props => {
  const conetxt = useMDXComponents()

  return createComponent(
    MDXContext.Provider,
    {
      get value() {
        return conetxt
      },
      get children() {
        return props.children
      }
    },
  )
}

export function Foo() {
  return (
    <div>foo</div>
  )
}
