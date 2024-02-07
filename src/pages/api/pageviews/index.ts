import { UMAMI, getToken } from '@/services'
import { NextApiRequest, NextApiResponse } from 'next'
import { PageView, PageViewResponse } from 'taufikcrisnawan'

let token: null | string | false = null
const allowedMethod = ['GET']

export default async function handler(req: NextApiRequest, res: NextApiResponse<PageViewResponse>) {
  if (req.method && !allowedMethod.includes(req.method)) {
    return res.status(405).send({ message: 'Method not allowed.', view: null })
  }

  if (!req.query.slug) return res.status(400).send({ message: 'query parameter is required', view: null })

  if (!token && token !== false) {
    const newToken = await getToken()
    if (!newToken) {
      token = false
    } else {
      token = newToken
    }
  }

  if (token === false) return res.status(500).send({ message: 'Cannot get token', view: null })

  let view = 0

  const slug = req.query.slug
  const end_date = new Date()
  // please change to your data website id
  const websitesId = 'b31d4821-5128-4314-aafc-2d2d39d2c193'
  // please change to your first deploy umami app
  const firtsDeployedAppAtMs = 1671469200000

  const config = { headers: { Authorization: 'Bearer ' + token } }

  const blogURL = `/api/websites/${websitesId}/stats?startAt=${firtsDeployedAppAtMs}&endAt=${end_date.getTime()}&url=/blog/${slug.toString()}`

  const settles = await Promise.allSettled([UMAMI.get<PageView>(blogURL, config)])

  settles.forEach((settle) => {
    if (settle.status === 'fulfilled') {
      const prop = settle.value
      view += prop.data.pageviews.value
    }
  })

  return res.status(200).json({ message: 'Retrieved succesfully', view })
}
