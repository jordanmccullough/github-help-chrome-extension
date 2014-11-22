# Google Chrome Help.GitHub.com extension

## What is it

Provides in-the-browser interactive mouse-over tooltips and links driven by [Help.GitHub.com](https://help.github.com) for new GitHub.com users.

![Google Chrome Help.GitHub.com extension preview](docs/preview-usage.gif)

## How does it work

Selectors, whether `id`, individual `class`, or attribute based are all that's needed to identify an element on a GitHub.com page. The [`data/help-map.json`](https://github.com/jordanmccullough/github-help-chrome-extension/blob/master/data/help-map.json) provides the easy-to-edit mapping of elements to [help.github.com](https://help.github.com) article URLs. Everything else is handled with just a little [bit of javascript](https://github.com/jordanmccullough/github-help-chrome-extension/blob/master/activate.js).

## Installation

1. Launch [Google Chrome](www.google.com/chrome)
2. Browse to [`chrome://extensions`](chrome://extensions)
3. Enable [Developer mode](https://developer.chrome.com/extensions/getstarted#unpacked)
4. Drag repo folder into Extensions page
5. Start using it
