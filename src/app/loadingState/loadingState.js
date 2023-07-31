import React from 'react'

export default async function LoadingState(params) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <div>Time Taking Element</div>
}