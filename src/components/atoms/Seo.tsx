import { NextSeo, NextSeoProps } from 'next-seo'

export interface CustomSeoProps extends NextSeoProps {
  template?: string
}

/**
 * It takes a NextSeoProps object and returns a `NextSeo components`
 * @returns A Next.js component.
 */
const Seo: React.FunctionComponent<CustomSeoProps> = ({ ...props }) => {
  const TITLE_TEMPLATE = `%s — Taufik Crisnawan S`
  return <NextSeo {...props} title={props.title} titleTemplate={TITLE_TEMPLATE} />
}

export default Seo
