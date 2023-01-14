# riddles_api.py
Web-API for [riddles-api.vercel.app](https://riddles-api.vercel.app)website which is an api that returns a riddle each time a call is made

## Example
```python
import riddles_api
riddles_api = riddles_api.RiddlesAPI()
random_riddle = riddles_api.get_random_riddle()
print(random_riddle)
```
