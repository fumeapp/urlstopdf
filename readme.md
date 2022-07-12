urlstopdf
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/urlstopdf.svg)](https://npmjs.org/package/urlstopdf)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/urlstopdf.svg)](https://npmjs.org/package/urlstopdf)
[![License](https://img.shields.io/npm/l/urlstopdf.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g urlstopdf
$ urlstopdf COMMAND
running command...
$ urlstopdf (--version)
urlstopdf/0.0.0 darwin-arm64 node-v16.13.1
$ urlstopdf --help [COMMAND]
USAGE
  $ urlstopdf COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`urlstopdf gen URL COUNT`](#urlstopdf-gen-url-count)
* [`urlstopdf help [COMMAND]`](#urlstopdf-help-command)
* [`urlstopdf plugins`](#urlstopdf-plugins)
* [`urlstopdf plugins:install PLUGIN...`](#urlstopdf-pluginsinstall-plugin)
* [`urlstopdf plugins:inspect PLUGIN...`](#urlstopdf-pluginsinspect-plugin)
* [`urlstopdf plugins:install PLUGIN...`](#urlstopdf-pluginsinstall-plugin-1)
* [`urlstopdf plugins:link PLUGIN`](#urlstopdf-pluginslink-plugin)
* [`urlstopdf plugins:uninstall PLUGIN...`](#urlstopdf-pluginsuninstall-plugin)
* [`urlstopdf plugins:uninstall PLUGIN...`](#urlstopdf-pluginsuninstall-plugin-1)
* [`urlstopdf plugins:uninstall PLUGIN...`](#urlstopdf-pluginsuninstall-plugin-2)
* [`urlstopdf plugins update`](#urlstopdf-plugins-update)

## `urlstopdf gen URL COUNT`

Generate a PDF

```
USAGE
  $ urlstopdf gen [URL] [COUNT]

ARGUMENTS
  URL    URL to screenshot
  COUNT  Amount of images to generate

DESCRIPTION
  Generate a PDF

EXAMPLES
  $ urlstopdf gen https://google.com/ 16
```

_See code: [dist/commands/gen/index.ts](https://github.com/fumeapp/urlstopdf/blob/v0.0.0/dist/commands/gen/index.ts)_

## `urlstopdf help [COMMAND]`

Display help for urlstopdf.

```
USAGE
  $ urlstopdf help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for urlstopdf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `urlstopdf plugins`

List installed plugins.

```
USAGE
  $ urlstopdf plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ urlstopdf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `urlstopdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ urlstopdf plugins:install PLUGIN...

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
  $ urlstopdf plugins add

EXAMPLES
  $ urlstopdf plugins:install myplugin 

  $ urlstopdf plugins:install https://github.com/someuser/someplugin

  $ urlstopdf plugins:install someuser/someplugin
```

## `urlstopdf plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ urlstopdf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ urlstopdf plugins:inspect myplugin
```

## `urlstopdf plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ urlstopdf plugins:install PLUGIN...

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
  $ urlstopdf plugins add

EXAMPLES
  $ urlstopdf plugins:install myplugin 

  $ urlstopdf plugins:install https://github.com/someuser/someplugin

  $ urlstopdf plugins:install someuser/someplugin
```

## `urlstopdf plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ urlstopdf plugins:link PLUGIN

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
  $ urlstopdf plugins:link myplugin
```

## `urlstopdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ urlstopdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ urlstopdf plugins unlink
  $ urlstopdf plugins remove
```

## `urlstopdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ urlstopdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ urlstopdf plugins unlink
  $ urlstopdf plugins remove
```

## `urlstopdf plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ urlstopdf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ urlstopdf plugins unlink
  $ urlstopdf plugins remove
```

## `urlstopdf plugins update`

Update installed plugins.

```
USAGE
  $ urlstopdf plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
