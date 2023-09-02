# @nephelaiio/logger

> Custom log utilities built on top of Winston for Node.js.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Initialization](#initialization)
  - [Logging](#logging)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Issues](#issues)

## Installation

Install the package using npm:

```bash
npm install @nephelaiio/logger
```

## Usage

### Initialization

First, initialize the logger by specifying the logging level and optionally some initial messages.

```typescript
import { init } from '@nephelaiio/logger';

init(level, 'info');
```

### Logging

You can log messages at different levels using the utility methods.

```typescript
import { debug, info, warn, error } from '@nephelaiio/logger';

debug('This is a debug message.');
info('This is an informational message.');
warn('This is a warning.');
error('This is an error.');
```

## API

- `init(level: LogLevels, messages?: Messages, transports?: Transport[])`: Initialize logger.
- `setInfo(msgs?: Messages)`: Set logging level to 'info'.
- `setVerbose(msgs?: Messages)`: Set logging level to 'debug'.
- `setWarn(msgs?: Messages)`: Set logging level to 'warn'.
- `setQuiet(msgs?: Messages)`: Set logging level to 'error'.
- `debug(message: string)`: Log a debug message.
- `info(message: string)`: Log an informational message.
- `warn(message: string)`: Log a warning message.
- `error(message: string)`: Log an error message.

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Issues

Please feel free to submit issues and enhancement requests [here](https://github.com/nephelaiio/node-logger/issues).
