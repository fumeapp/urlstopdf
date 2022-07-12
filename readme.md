oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g urltopdf
$ urltopdf COMMAND
running command...
$ urltopdf (--version)
urltopdf/0.0.0 darwin-arm64 node-v16.13.1
$ urltopdf --help [COMMAND]
USAGE
  $ urltopdf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`urltopdf hello PERSON`](#urltopdf-hello-person)
* [`urltopdf hello world`](#urltopdf-hello-world)
* [`urltopdf help [COMMAND]`](#urltopdf-help-command)
* [`urltopdf plugins`](#urltopdf-plugins)
* [`urltopdf plugins:install PLUGIN...`](#urltopdf-pluginsinstall-plugin)
* [`urltopdf plugins:inspect PLUGIN...`](#urltopdf-pluginsinspect-plugin)
* [`urltopdf plugins:install PLUGIN...`](#urltopdf-pluginsinstall-plugin-1)
* [`urltopdf plugins:link PLUGIN`](#urltopdf-pluginslink-plugin)
* [`urltopdf plugins:uninstall PLUGIN...`](#urltopdf-pluginsuninstall-plugin)
* [`urltopdf plugins:uninstall PLUGIN...`](#urltopdf-pluginsuninstall-plugin-1)
* [`urltopdf plugins:uninstall PLUGIN...`](#urltopdf-pluginsuninstall-plugin-2)
* [`urltopdf plugins update`](#urltopdf-plugins-update)

## `urltopdf hello PERSON`

Say hello

```
USAGE
  $ urltopdf hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/fumeapp/urltopdf/blob/v0.0.0/dist/commands/hello/index.ts)_

## `urltopdf hello world`

Say hello world

```
USAGE
  $ urltopdf hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `urltopdf help [COMMAND]`

Display help for urltopdf.

```
USAGE
  $ urltopdf help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for urltopdf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `urltopdf plugins`

List installed plugins.

```
USAGE
  $ urltopdf plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ urltopdf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `urltopdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ urltopdf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ urltopdf plugins add

EXAMPLES
  $ urltopdf plugins:install myplugin 

  $ urltopdf plugins:install https://github.com/someuser/someplugin

  $ urltopdf plugins:install someuser/someplugin
```

## `urltopdf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ urltopdf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ urltopdf plugins:inspect myplugin
```

## `urltopdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ urltopdf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ urltopdf plugins add

EXAMPLES
  $ urltopdf plugins:install myplugin 

  $ urltopdf plugins:install https://github.com/someuser/someplugin

  $ urltopdf plugins:install someuser/someplugin
```

## `urltopdf plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ urltopdf plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ urltopdf plugins:link myplugin
```

## `urltopdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ urltopdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ urltopdf plugins unlink
  $ urltopdf plugins remove
```

## `urltopdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ urltopdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ urltopdf plugins unlink
  $ urltopdf plugins remove
```

## `urltopdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ urltopdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ urltopdf plugins unlink
  $ urltopdf plugins remove
```

## `urltopdf plugins update`

Update installed plugins.

```
USAGE
  $ urltopdf plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
