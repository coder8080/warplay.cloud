# Warplaycloud

Github pages: [link](https://coder8080.github.io/warplay.cloud/)

Fun website for cloud gaming company. Created to improve my css skills and
based on [this](https://www.figma.com/file/6rZ2mZiOVinWUpqP9hpTDn/Warplaycloud?node-id=2%3A2)
Figma project.

# Start

## Requirements

To run this project on your PC, you need:

- Working terminal (konsole, powershell, gnome-terminal, etc.)
- Git command line tool: [download](https://git-scm.com/downloads)
- Node.js > 16.0.0: [download](https://nodejs.org/en/download/)
- Npm > 7.10.0 (usually installs with node.js)

Or, to run with docker:

- Docker-daemon > 20.0.0
- Docker-cli > 20.0.0

This is a React project generated with _create-react-app_, so steps to run it
are very common:

At first, you need to clone this repo (if you haven't done it yet):

```bash
git clone https://github.com/coder8080/warplay.cloud.git
cd warplay.cloud
```

Then install required dependences with the following command:

```bash
npm i
```

## Development mode

Actually start the development server:

```bash
npm start
```

This command will also open browser window.

## Production mode

There are two ways to run the production build.

### Docker

This project is available as a docker container. Download and run with commands:

```bash
docker pull coder8080/warplaycloud
docker run -p 3000:3000 coder8080/warplaycloud
```

Download may take some time, please be patient.

### Create your own build

Create a production build:

```bash
npm run build
```

After this command, you will get all built and minified files in `build`
directory in the root project folder. They are your production build. You
can serve them with `nginx`, `serve`, or with any other instrument for
serving files on some port.

Here are commands that you need to run if you want to use serve:

```
npm install -g serve
serve -s build
```

In your terminal you will see the link to the site.

# Troubleshoot

Issues page: [link](https://github.com/coder8080/warplay.cloud/issues)
