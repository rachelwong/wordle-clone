# Wordle Clone

```bash
npm install
npm start
```

Or visit: <https://silver-melba-96d29e.netlify.app/>

## Functionalities

* Tracks both correct, incorrectly-positioned but correct letters
* Can allow for any number of turns (currently set to 6)

## Known issues

* Doesn't check whether the current attempt is an actual word inside the wordbank (`words.json`)
* Restart game doesn't yet trigger a new `wordSolution` to be re-generated. I want to avoid force-reloading the entire react app.
* UI bit cluncky - not listening to keyboard input and rely on 'Submit' button to log attempt.
