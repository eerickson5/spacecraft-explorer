# spacecraft-explorer
Displays and filters information and photos about deployed spacecraft using data from The Space Devs.

## Features

Users can search for any spacecraft deployed into space and filter results for if that craft is still in space or if it is still in use.  Data is fetched from The Space Devs Launch Library API.

## Issues & Resolution

The Space Devs Launch Library API only allows for 15 API requests per hour.  To allow users to experience the app's features, there is an option to search an internal db.json instead of the full API, which has a few entries copied from The Space Devs.

## License

[MIT](https://choosealicense.com/licenses/mit/)