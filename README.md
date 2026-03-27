<p align="center">
  <img src="https://www.dropbox.com/s/h6vdbd2ar3c8mw6/logo.png?dl=0&raw=1" width="240" />
</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/made%20with-love-E760A4.svg" alt="Made with love">
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  </a>
  <a href="https://github.com/ghosh/uiGradients/graphs/contributors" target="_blank">
    <img src="https://img.shields.io/github/contributors/ghosh/uigradients.svg" alt="Contributors">
  </a>
  <a href="https://api.travis-ci.org/ghosh/uiGradients" target="_blank">
    <img src="https://api.travis-ci.org/ghosh/uiGradients.svg" alt="Build Status">
  </a>
</p>

<p align="center">
<a href="https://www.producthunt.com/posts/uigradients?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-uigradients" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=316898&theme=dark" alt="uiGradients - Beautiful colour gradients for design and code | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
  </p>

<p align="center">
uiGradients is a community contributed collection of beautiful multi-color gradients
</p>

---

&nbsp;

## About
This is an effort to give back to the community, by the community. Hopefully this will help you draw inspiration and serve as a resource for picking gradients for your own projects.

&nbsp;

## Contributing
Adding a gradient to the library is super simple. All the gradients are loaded and rendered from a single `gradients.json` file in the root.

To add your gradient, fork this repository, add your gradient colors in the HEX format along with a name to the end of the json file and submit a pull request. Don't forget the commas!

```
[
    {
        …
    },
    {
      "name": "Career",
      "colors": ["#cb202d", "#dc1e28", "#3366cc"]
    }
]
```

*NOTE* - Please keep gradient submissions and bug fixes in separate PRs.

&nbsp;

### Improvements and Bugs
Please feel free to open a new issue [here](https://github.com/Ghosh/uiGradients/issues) with your suggestions or any bugs which you may have come across.

&nbsp;

## Data
While there is no official api, all the gradients are present in the `gradients.json` file. The code below is an example of fetching the data via a CURL request
```
curl -i https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json
```

&nbsp;

## Built with uiGradients
A few open source projects built with uiGradients
- [UIColor-uiGradientsAdditions](https://github.com/kaiinui/UIColor-uiGradientsAdditions) - uiGradients for iOS
- [NilColorKit](https://github.com/NilStack/NilColorKit) - uiGradients made for swift
- [uigradients](https://github.com/JSBros/uigradients) - Styled components for uiGradients
- [uigradients-scss](https://github.com/subinsebastian/uigradients-scss) - uiGradients ported to scss
- [helper-uigradient](https://github.com/helpers/helper-uigradient) - Handlebar helper for uiGradients
- [Uigradients iOS Viewer](https://github.com/thexande/uiGradients-Viewer-iOS) - Open source iOS app for viewing gradients
- [Potion](http://numberpicture.com/build) - React components for declaratively composing animated, interactive visualizations
- [Randient](https://github.com/uias/Randient) - Randomised, radient gradients for iOS.
- [RandomGradient](https://github.com/Gabriel-Denys/RandomGradient) - Radomised gradients via json api

&nbsp;

## License

[MIT](https://github.com/ghosh/uiGradients/blob/master/LICENSE.md)

&nbsp;

<p align="center">✌️</p>
<p align="center">
<sub><sup>A little project by <a href="https://twitter.com/_ighosh">@i_ghosh</a></sup></sub>
</p>
