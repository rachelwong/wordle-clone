# Wordle Clone

To start

```bash
npm install
npm start
```

Or visit: <https://silver-melba-96d29e.netlify.app/>

*Not a pretty-looking app, just an exercise to try out react x typescript and figure out mechanics of the game.*

## Functionalities

* Tracks both correct, incorrectly-positioned but correct letters
* Can allow for any number of turns (currently set to 6)

## Known issues

* Doesn't check whether the current attempt is an actual word inside the wordbank (`words.json`)
* Restart game doesn't yet trigger a new `wordSolution` to be re-generated. I want to avoid force-reloading the entire react app. Don't really know how to trigger `useMemo` to re-run. Did play around use `useCallback` and `useEffect`
* UI bit cluncky - not listening to keyboard input and rely on 'Submit' button to log attempt.
