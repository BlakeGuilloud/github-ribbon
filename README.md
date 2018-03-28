## github-ribbon

W.I.P

```javascript
import React from 'react';
import Ribbon from 'github-ribbon';

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
  - red
  - green
  - darkblue
  - orange
  - white
  - gray / grey


### position
  - left
  - right

### link
  - URL to the project's Github repo

### alt
  - alt tag for when things don't go as planned
