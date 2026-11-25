# Ember Warning Label

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/pranatakripto95/ember-warning-label/rank.svg)](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/pranatakripto95/ember-warning-label/reward.svg)](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

The funniest single-line safety warning label that should come printed on every human being — an entry for the [Warning Label for Humans: One Line, Big Laugh](https://make.fun/competitions/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) bounty on make.fun.

## The label

> WARNING: Contents may settle during shipping. Human is 90% water and 10% unread messages from 2019.

Real printed-label boilerplate as the setup, the composition joke as the body, and the laugh landing in the last three words.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that one line to `/output/entry.txt`, then reads it back and verifies it is byte-identical, a single line of 1–160 characters.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
