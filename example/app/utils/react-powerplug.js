// Replaces react-powerplug which is not maintained
// TODO: Eventually remove entirely

import React, { useState } from "react"

export const State = ({
  initial,
  children,
}) => {
  const [state, setState] = useState(initial)
  return <>{children({ state, setState })}</>
}

export const Toggle = ({
  initial,
  children,
}) => {
  const [on, toggle] = useState(initial)
  return <>{children({ on, toggle })}</>
}
