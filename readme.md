# notthedom/logged

## Issues

When you pass multiple and/or non-primitive arguments the styling performs a toString operation them.

Current hack: check if args contain non-primitives and console.dir those values instead. Downside is that each arg gets printed on a new line...
