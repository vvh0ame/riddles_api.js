from requests import get
	
class RiddlesAPI:
	def __init__(self) -> None:
		self.api = "https://riddles-api.vercel.app"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
		}

	def get_random_riddle(self) -> dict:
		return requests.get(
			f"{self.api}/random",
			headers=self.headers).json()
