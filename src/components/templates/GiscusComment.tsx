import useTheme from '@/hooks/useTheme'
import { isDev } from '@/libs/constants/environmentState'
import { twclsx } from '@/libs/twclsx'

import Giscus from '@giscus/react'
import { memo } from 'react'

const GiscusComment = () => {
  const { theme } = useTheme()

  if (isDev) return null

  return (
    <figure className={twclsx('mt-4 md:mt-8')}>
      <Giscus
        theme={theme}
        emitMetadata='0'
        inputPosition='top'
        repo='harleydica/taufikcrisnawan'
        repoId='509668607'
        category='General'
        categoryId='DIC_kwDOGh4ME84CPxWe'
        mapping='pathname'
        reactionsEnabled='0'
        loading='lazy'
      />
    </figure>
  )
}

export default memo(GiscusComment)
