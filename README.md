# Zork

This is a very basic implementation of the game Zork. Zork is one of the earliest interactive fiction computer games, with roots drawn from the original genre game, Colossal Cave Adventure.

## Getting Started

To get you started you can simply clone the zork repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

There are a  number of node.js tools to initialize and test the app. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone zork

Clone the zork repository using [git]:

```
git clone https://github.com/vpanjganj/zork.git
cd zork
```

If you just want to start a new project without the commit history then you can do:

```bash
git clone --depth=1 https://github.com/vpanjganj/zork.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

There is only one tools dependency in this project: The tools to help
you manage, build and test the application.

* Get the tools you depend upon via `npm`, the node package manager.


```
npm install
```
or

```
sudo npm install
```

You should find that you have one new
folder in your project.

* `node_modules` - contains the npm packages for the tools we need



## Testing

There are some basic Unit tests available for this project.


### Running Unit Tests

The tests are  written in
[Jasmine], which we run with the [Gulp Task Runner] and a tool called [Gulp
Jasmine Browser].


* the unit tests are found in the test folder and are named as `*.spec.js`.

The easiest way to run the unit tests is to use the supplied gulp script, the open the browser on
`http://localhost:8888/`:

```
gulp jasmine
```

This script will start the gulp task to execute the unit tests. Moreover, Gulp will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.

### Run the Application

The simplest way to start the app is running the pre-configured local server by:

```
npm start
```

It will open the browser on `http://localhost:8000/` make sure the port is not busy.

### Running the App

Zork comes  with a local development webserver.  It is a node.js
tool called [http-server].  You can start this webserver with `npm start` but make sure you have install
 all the dependencies and run the gulp command to make a build directory:

```
sudo npm install
gulp
npm start
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```
