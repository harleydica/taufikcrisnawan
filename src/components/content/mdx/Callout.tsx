import clsx from 'clsx'
import React from 'react'

import { WithChildren } from 'taufikcrisnawan'

const Icon = {
  default: '💡',
  error: '🚫',
  info: 'ℹ️',
  warning: '⚠️',
}

type CalloutType = keyof typeof Icon

const classes: Record<CalloutType, string> = {
  default: clsx(
    'border-orange-900 bg-orange-600 text-orange-50 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300'
  ),
  error: clsx(
    'border-red-900 bg-red-600 text-red-50 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200'
  ),
  info: clsx(
    'border-blue-900 bg-blue-600 text-blue-50 dark:border-blue-200/30 dark:bg-blue-900/30 dark:text-blue-200'
  ),
  warning: clsx(
    'border-yellow-900 bg-yellow-600 text-yellow-50 dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200'
  ),
}

type CalloutProps = {
  type?: CalloutType
  icon?: string
} & WithChildren

const Callout = (props: CalloutProps) => {
  const { children, type = 'default', icon = Icon[type] } = props

  return (
    <div
      className={clsx(
        'mt-6 flex items-center rounded-lg border py-2 pr-4',
        classes[type]
      )}
    >
      <div
        className={clsx('pl-3 pr-2', {
          ['font-emoji']: typeof icon === 'string',
        })}
      >
        {icon}
      </div>
      <div className='w-full min-w-0 leading-7 [&>p]:m-0'>{children}</div>
    </div>
  )
}

export default Callout
