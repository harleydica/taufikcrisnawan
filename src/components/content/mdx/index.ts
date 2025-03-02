import { UnderlineLink } from '@/UI/links'

import { Blockquote } from './Blockquote'
import { Code } from './Code'
import { ContentImage } from './ContentImage'
import { HeadingFour, HeadingThree, HeadingTwo } from './Headings'
import { Pre } from './Pre'
import Table from './Table'

import { MDXRemoteProps } from 'next-mdx-remote'
import Callout from './Callout'
import Tree from './Tree'
import Kbd from './Kbd'

const MDXComponents = {
  pre: Pre,
  img: ContentImage,
  code: Code,
  blockquote: Blockquote,
  a: UnderlineLink,
  ContentImage,
  Callout,
  Table,
  Tree,
  Kbd,
  h2: HeadingTwo,
  h3: HeadingThree,
  h4: HeadingFour
} as MDXRemoteProps['components']

export { MDXComponents, Pre, Code, Blockquote, ContentImage }
