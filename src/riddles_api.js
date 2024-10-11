class RiddlesApi {
	constructor() {
		this.api = "https://riddles-api.vercel.app"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
		}
	}

	async getRandomRiddle() {
		const response = await fetch(
			`${this.api}/random`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
 }

module.exports = {RiddlesApi}
