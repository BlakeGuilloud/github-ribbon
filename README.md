## github-ribbon

```bash
$ yarn add gh-ribbon
```

```javascript
import React from 'react';
import Ribbon from 'gh-ribbon';

const App = () => (
  <div>
    <Ribbon link="http://github.com/blakeguilloud" color="red" alt="Fork me!" position="right" />
    Some things and some stuff
  </div>
);

export default App;
```

## Props
### color
  - red (default)
  - green
  - darkblue
  - orange
  - white
  - gray / grey


### position
  - left (default)
  - right

### link
  - URL to the project's Github repo (default - http://github.com)

### alt
  - alt tag for when things don't go as planned (default - "fork me on github")

