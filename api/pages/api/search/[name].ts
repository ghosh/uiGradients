import type { NextApiRequest, NextApiResponse } from 'next'

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
  res.status(200).json({
    'query': req.query.name
  })
}
