London Guide
======================

This is an example application that demonstrates how to work with data queried from different data sources.
It is an online guide for london that is generated from three different data sources:
- wikivoyage (parsing HTML)
- DBPedia (doing SPARQL queries)
- Geonames (using their HTTP API returning RDF)

Live Demo
---------
You can try it out online at
http://london-guide.s3-website-us-east-1.amazonaws.com/

Development Setup
-----------------

- install nodejs : http://nodejs.org/download/
- install git: http://git-scm.com/downloads/
- add the path to the git.exe (C:\Program Files (x86)\Git\bin\) to the PATH system variable
- install yeoman: https://github.com/yeoman/yeoman/wiki/Getting-Started

```
npm install -g yo
npm install -g grunt grunt-cli bower
```

- clone the repository

Import Queries
-------

The backend is located in the /queries directory.
Create an account on http://28.io and install the 28.io command line tool

```
$ npm install 28 -g
```

Create a project with a mongoDB of your choice on 28.io. Inside the /queries directory you can then use the CLI to deploy this project:

```
$ 28 login <your email>
```

```
$ 28 upload <projectname>
```

Configure Datasources
-------
On the 28.io platform perform these steps:

Add a SPARQL datasource for DBPedia to the project:

- Datasource Name: DBPedia
- Datasource URL: http://dbpedia.org/sparql
- Authorization Method: None

To prepare the database execute these private queries in order:
- private/01_init.jq to create collections
- private/02_load_content.jq to fetch the data (may take up to an hour) 
- private/03_create_index.jq to create the search index 

Frontend Installation
---------------------

- in the repository directory, execute the install commands for serverside components (npm) and clientside components (bower)

```
npm install
bower install
```

- In app/scripts/app.js, line 11 adjust the API_URL to your needs.

```
.constant('API_URL', 'http://yourprojectname.28.io/v1')  
```

- start the development server

```
grunt server
```

This should open a new browser on localhost:9000.
The port can be customized in Gruntfile.js, if that port is not available.
