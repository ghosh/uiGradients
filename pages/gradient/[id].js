import React from 'react'
import { useRouter } from 'next/router'

const Gradient = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Gradient: {id}</p>
}

export default Gradient
