# 🎯 Dart game - Angular testing exercices

![Dart gif](./docs/dart.gif)

## Goal

The goal of this coding dojo is to improve testing skills of your team with Angular with fun !

## Prerequisites

At least, team members should know about test doubles. It's a good idea to introduce, clearly and in a concise way, test doubles your team.

[Difference between stubs, mocks, fakes and spies](https://www.ankursheel.com/blog/difference-stubs-mocks-fakes-spies)

## Getting started

1. Go to project folder and install dependencies:

```sh
npm install
```

2. Verify that everything is OK by running the test

```sh
npm test
```

3. Launch development server, and open `localhost:4200` in your browser:

```sh
npm start
```

## Coding dojo

### 1️ - Component testing

#### `DartBoardComponent`

```text
it should have n target zones
it should have 20 numbers
it should have numbers from 1 to 20
it should have triple target zone
it should have double target zone
it should have one 50 and 25 target zones
```

### 2 - Component testing with a depencency

#### `DartScorePopupComponent`

```text
it should have default values on init
it should have 20 numbers around
it should show a score of n for 500ms
```

### 3 - Service testing

#### `DartBoardHitEventService`

```text
it should emit a score of n
```

### 4 - Bonus ✨

> Create a new component to show the score in real time
> Dart comes with a lot of game mode. Try coding the 501 one. Each hit will decrease the score. The winner will be the one who reaches 0.

Use this CSS for the score :

```css
.score {
  font-family: scoreboard;
  font-size: 3.25rem;
  color: white;
  user-select: none;
}
```

*Enjoy !*

This project was generated with [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket/)
version 11.0.0
