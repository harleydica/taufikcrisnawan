import { BsFolder, BsFileEarmark } from 'react-icons/bs'
import React from 'react'

type Node = {
  name: string
  children?: Node[]
}

type TreeProps = {
  data: Node[]
}

type InnerType = {
  data: Node[]
  level: number
}

const Tree = (props: TreeProps) => {
  return (
    <div className='rounded-lg border border-accent-2 border-gray-900 dark:border-gray-50 p-4 mb-8'>
      <Inner {...props} level={0} />
    </div>
  )
}

const Inner = (props: InnerType) => {
  const { data, level } = props

  return (
    <>
      {data.map((node) => {
        return (
          <React.Fragment key={node.name}>
            <div className='relative flex items-center gap-2'>
              {Array.from(Array(level)).map((_, i) => (
                <div
                  key={i}
                  className='absolute h-full w-px -translate-x-1/2 bg-accent-2'
                  style={{
                    left: `calc(${i * 20}px + 22px / 2)`,
                  }}
                />
              ))}
              <div
                style={{
                  paddingLeft: level * 20,
                }}
              >
                {!node.children ? (
                  <BsFileEarmark size={22} />
                ) : (
                  <BsFolder size={22} />
                )}
              </div>
              <div>{node.name}</div>
            </div>

            {node.children ? (
              <Inner data={node.children} level={level + 1} />
            ) : null}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Tree
