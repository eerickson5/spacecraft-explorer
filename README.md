# spacecraft-explorer
Displays and filters information and photos about deployed spacecraft using data from The Space Devs.

## Features

Users can search for any spacecraft deployed into space and filter results for if that craft is still in space or if it is still in use.  Data is fetched from [The Space Devs Launch Library API](https://ll.thespacedevs.com/2.2.0/spacecraft/).

## Limitations & Resolution

The Space Devs Launch Library API only allows for 15 API requests per hour.  To allow users to experience the app's features, there is an option to search an internal db.json instead of the full API, which has a few entries copied from The Space Devs.  

## Testing
This web app is available to test at https://eerickson5.github.io/spacecraft-explorer/.  However, since this version is standalone, it can only send requests to the Launch Library API and cannot use the db.json.

To test this web app locally, clone the repo and run the following in console.

```zshell
npm install -g json-server
cd spacecraft-explorer
json-server --watch db.json
```

For more information on db.json, see https://github.com/typicode/json-server.

## License

[MIT](https://choosealicense.com/licenses/mit/)