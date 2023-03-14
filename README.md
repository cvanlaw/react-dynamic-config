# react-dynamic-config

An example of how to dynamically inject and use config in a react app. To run the example:
1. Build the container image e.g. `docker build . -t react-dynamic-config`
2. Set a value for the config variable e.g. `export APP_MESSAGE='Hello, World!'`
3. Run the container image e.g. `docker run -e APP_MESSAGE --rm -p 8080:80 --name react-dynamic-config react-dynamic-config`