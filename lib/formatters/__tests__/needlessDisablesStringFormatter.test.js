"use strict"

const chalk = require("chalk")
const needlessDisablesStringFormatter = require("../needlessDisablesStringFormatter")
const stripIndent = require("common-tags").stripIndent

describe("needlessDisablesStringFormatter", () => {
  it("formatter stringified", () => {
    const actual = chalk.stripColor(needlessDisablesStringFormatter([ {
      source: "foo",
      ranges: [ { start: 1, end: 3 }, { start: 7 } ],
    }, {
      source: "bar",
      ranges: [ { start: 19, end: 33 }, { start: 99, end: 102 } ],
    }, {
      sourc: "baz",
      ranges: [],
    } ]))

    let expected = stripIndent`
      foo
      start: 1, end: 3
      start: 7

      bar
      start: 19, end: 33
      start: 99, end: 102`
    expected = `\n${expected}\n`

    expect(actual).toBe(expected)
  })
})
