# arenax-game-api

![Node.js Package](https://github.com/ArkadiumInc/arenax-game-api/workflows/Node.js%20Package/badge.svg)

Game API NPM Package

# Publishing NPM Package
This project uses [semantic-release](https://github.com/semantic-release/semantic-release).
Commit using the following message format to trigger CI:

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |

