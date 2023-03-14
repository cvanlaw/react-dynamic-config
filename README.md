# react-dynamic-config

An example of how to dynamically inject and use config in a react app. To run the example:
1. Build the container image e.g. `docker build . -t react-dynamic-config`
2. Set a value for the config variable e.g. `export APP_MESSAGE='Hello, World!'`
3. Run the container image e.g. `docker run -e APP_MESSAGE --rm -p 8080:80 --name react-dynamic-config react-dynamic-config`

## How It Works

[src/Message.js] uses the `fetch` api to retrieve the contents of `config.json`. `config.json` is built at container start via
`jq`. The value of the message is set as an environment variable named `APP_MESSAGE` on the container so that an entrypoint
script can retrieve this value for placement in `config.json`.

## References

`Dockerfile` and `nginx.conf` from [awesome-compose](https://github.com/docker/awesome-compose/tree/master/react-nginx)