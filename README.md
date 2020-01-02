# custom-hooks-template

> 

[![NPM](https://img.shields.io/npm/v/custom-hooks-template.svg)](https://www.npmjs.com/package/custom-hooks-template) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-hooks-template
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'custom-hooks-template'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [hppRC](https://github.com/hppRC)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
