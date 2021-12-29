# hover-align

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/9a75ddd0fabb8d5eaf30/maintainability)](https://codeclimate.com/github/johnmartel/hover-align/maintainability)
[![codecov](https://codecov.io/gh/johnmartel/hover-align/branch/master/graph/badge.svg)](https://codecov.io/gh/johnmartel/hover-align)
[![downloads by semver](https://img.shields.io/github/downloads/johnmartel/hover-align/latest/total)](https://github.com/johnmartel/hover-align/releases/latest)
[![GitHub all releases](https://img.shields.io/github/downloads/johnmartel/hover-align/total?label=total%20downloads)](https://github.com/johnmartel/hover-align/releases)

Simple FoundryVTT module that displays character (both PC/NPC) alignment on hovering a token.

It will display the alignment for all tokens to the GM and only for player-owned tokens to players.

This module uses the Core functionality used to display the token tooltip without interfering with it.

![sample](doc/sample.gif)

## Installation

You could either:

1. Navigate to the Foundry Setup screen and click on the Modules tab
1. Click Install Module and look for HoverAlign

or:

1. Start FVTT and browse to the Game Modules tab in the Configuration and Setup menu
1. Select the Install Module button and enter the following URL: https://raw.githubusercontent.com/johnmartel/hover-align/master/module.json
1. Click Install and wait for installation to complete

## Development

First, have a look at Foundy's [introduction to module development](https://foundryvtt.com/article/module-development/).
I suggest also looking at the [Languages and Localization](https://foundryvtt.com/article/localization/) article.

Then, it's pretty standard JS development:

- Install [nvm](https://github.com/nvm-sh/nvm#install--update-script)
- Develop using a working version of node: `nvm use`
- Install dependencies: `npm install`
- Lint your code: `npm run lint`
- Test your code: `npm test`
