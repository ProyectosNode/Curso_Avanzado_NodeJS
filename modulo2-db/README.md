# modulo2-db

## Usage

``` js
const setupDatabase = require('modulo2-db')

setupDabase(config).then(db => {
  const { Agent, Metric } = db

}).catch(err => console.error(err))
```