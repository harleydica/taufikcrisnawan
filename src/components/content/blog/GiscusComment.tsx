import { useTheme } from '@/hooks'

import Giscus from '@giscus/react'
import { memo } from 'react'

export const GiscusComment = memo(() => {
  const { theme, systemTheme } = useTheme()

  const gcTheme = theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? 'dark' : 'light'

  return (
    <div className='mt-4 md:mt-8'>
      <Giscus
        lang='en'
        theme={gcTheme}
        emitMetadata='0'
        inputPosition='top'
        repo='harleydica/taufikcrisnawan'
        repoId='R_kgDOIp5zBA'
        category='General'
        categoryId='DIC_kwDOIp5zBM4CTMbn'
        mapping='pathname'
        reactionsEnabled='0'
        loading='lazy'
      />
    </div>
  )
})

GiscusComment.displayName = 'GiscusComment'
