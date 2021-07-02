// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import gradients from '../../public/json/all.json'

interface Gradient {
  name: string,
  colors: string[],
  slug: string,
  hues: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Gradient[]>
) {
  res.status(200).json(gradients)
}
