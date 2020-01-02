import React from 'react'

import { useMyHook } from 'custom-hooks-template'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
