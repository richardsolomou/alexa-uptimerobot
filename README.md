# alexa-uptimerobot

## Getting started

Install StdLib CLI tools:

```bash
$ npm install lib.cli -g
```

## Setup environment

Create a file named `env.json` and copy in your [uptimerobot.com](https://uptimerobot.com/dashboard#mySettings) API key:

```
{
  "dev": {
    "uptimerobot_key": "UPTIMEROBOT_API_KEY"
  },
  "release": {
    "uptimerobot_key": "UPTIMEROBOT_API_KEY"
  }
}
```

## Deploy skill

Create an [StdLib](http://stdlib.com/) account and modify the `stdlib` object in `package.json` to match your username. Then, deploy the development version:

```bash
$ lib up dev
```

## Create skill

Sign in to the [Alexa Skills Kit](https://developer.amazon.com/edw/home.html#/skills/list) and add a new skill named `Uptime Robot` with the following custom interaction model:

### Intent schema

```
{
  "intents": [
    {
      "intent": "CheckStatusIntent",
      "slots": [
        {
          "name": "monitor",
          "type": "MONITOR"
        }
      ]
    },
    {
      "intent": "AMAZON.StopIntent"
    }
  ]
}
```

### Custom slot types

Create a custom slot type called `MONITOR` with your Uptime Robot monitor names:
```
blog
website
```

### Sample utterances

```
CheckStatusIntent what is the status of {monitor}
CheckStatusIntent get the status of {monitor}
CheckStatusIntent check the status of {monitor}
CheckStatusIntent is {monitor} up
CheckStatusIntent is {monitor} down
CheckStatusIntent is {monitor} running
```

### Configuration

Point the HTTPS endpoint to your StdLib account's instance of `alexa-uptimerobot` (e.g. `https://stdlib_username.stdlib.com/alexa-uptimerobot@dev`).

## Testing the skill

Test skill locally

```bash
$ lib .
```

```bash
$ lib . CheckStatusIntent --monitor Blog
```
