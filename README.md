There is an issue with `nyc` when using `ava` and `babel-register`.

It seems to only pop up when you have both destructuring and binary expressions as part of the same varabile declaration.

Example code:

```
var {a} = true && {}
```

## Test

`npm test`

## Error

```
/Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/report/html.js:276
                startCol = meta.start.column;
                               ^

TypeError: Cannot read property 'start' of undefined
    at /Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/report/html.js:276:32
    at Array.forEach (native)
    at annotateBranches (/Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/report/html.js:255:30)
    at HtmlReport.Report.mix.writeDetailPage (/Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/report/html.js:426:9)
    at /Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/report/html.js:489:26
    at SyncFileWriter.extend.writeFile (/Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/util/file-writer.js:57:9)
    at FileWriter.extend.writeFile (/Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/util/file-writer.js:147:23)
    at /Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/report/html.js:488:24
    at Array.forEach (native)
    at HtmlReport.Report.mix.writeFiles (/Users/jamuferguson/dev/web/node_modules/nyc/node_modules/istanbul/lib/report/html.js:482:23)
```
