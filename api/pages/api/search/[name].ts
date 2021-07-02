import Fuse from 'fuse.js'
import type { NextApiRequest, NextApiResponse } from 'next'

import uigradients from '../../../public/json/all.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(400).send({
      code: 400,
      status: 'Bad Request',
      error: 'Only POST requests allowed'
    })
    return
  }

  const query = <string>req.query.name

  const data = new Fuse(uigradients, {
    keys: ['name'],
    includeScore: true,
    shouldSort: true
  })

  const gradientHits = data.search(query)


  const results: any = [];

  gradientHits.forEach(g => {
    const obj = {
      name: g.item.name,
      colors: g.item.colors,
      slug: g.item.slug,
      hues: g.item.hues,
      score: g.score
    }

    results.push(obj)
  })

  res.status(200).json(results)
}
