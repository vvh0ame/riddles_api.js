# riddles_api.js
Web-API for [riddles-api.vercel.app](https://riddles-api.vercel.app)website which is an api that returns a riddle each time a call is made

## Example
```JavaScript
async function main() {
	const { RiddlesApi } = require("./riddles_api.js")
	const riddlesApi = new RiddlesApi()
	const randomRiddle = await riddlesApi.getRandomRiddle()
	console.log(randomRiddle)
}

main()
```
