# react-fileicons - [![npm](https://img.shields.io/npm/v/react-fileicons.svg?color=%2345bf17&style=popout)](https://www.npmjs.com/package/react-fileicons) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons?ref=badge_shield)

react-fileicons is a simple and intuitive react component for visualizing file icons.

## Demo

You can reach the Storybook [here](https://tomxpcvx.wtf/react-fileicons/).

## Usage

First you should import the needed files.

```javascript
import FileIcon, { ColorScheme, IconStyle } from "react-fileicons";
```

After that you can use the FileIcon component.
To change the color of the component, you can use the built-in color list `ColorScheme`.

```javascript
<FileIcon
    extension="doc"
    colorScheme={ ColorScheme.red }
    iconStyle={ IconStyle.normal }
    size={ 100 }
/>
```

Alternatively, you can use your own color configurations. However, these must be in the following format.

```javascript
<FileIcon
    extension="doc"
    colorScheme={{ primary: "#1E88E5", secondary: "#1976D2" }}
    iconStyle={ IconStyle.normal }
    size={ 100 }
/>
```

The following options can be used to access different designs:

```text
<FileIcon
    extension="doc"                 # only the first 5 characters are displayed
    background="#fff"               # use to pass your background color to the component
    colorScheme={ ColorScheme.red } # must be in the above format
    iconStyle={ IconStyle.normal }  # normal / gradient / outline
    size={ 100 }                    # variable size property
    fontSize={ 100 }                # optional, use to change font size independent size property
/>
```

## Migrate from v1 to v2

To migrate from v1 to v2, some props have to be changed.
The props ``smallest``, ``small``, ``medium`` have been removed and the size of the icons can now be variably adjusted via the prop ``size``. The props ``linearGradient`` and ``outline`` have also been removed and the prop ``iconStyle`` is now available. This can be used with the ``IconStyle`` class as shown above. If you want to customize the fontSize use ``fontSize`` property. Now also 5 characters are displayed instead of only 4 characters as before.

```javascript
// v1
<FileIcon
    extension="doc"
    colorScheme={ ColorScheme.red }
    gradient
    medium
/>

// v2
<FileIcon
    extension="doc"
    colorScheme={ ColorScheme.red }
    iconStyle={ IconStyle.gradient }
    size={ 100 }
/>
```

## Known issues

Bugs can be found [here](https://github.com/tomxpcvx/react-fileicons/labels/bug).

## Changelog

Changelog can be found [here](https://github.com/tomxpcvx/react-fileicons/wiki/Changelog).

## Contribute

### Pull Requests

If you make any changes or improvements to this project, please make a pull request to merge your changes with the upstream.

## Thanks to ❤

-   React
-   Storybook
-   styled components
-   Material UI Colors

## License

react-fileicons is licensed under the MIT license. Please see [LICENSE.md](https://github.com/tomxpcvx/react-fileicons/blob/master/LICENSE.md) for more info.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons?ref=badge_large)