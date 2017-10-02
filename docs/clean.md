# Clean

The clean module is responsible for running `dotnet clean` or essentially calling the compiler. You can get more help by running `dotnet clean --help`

```js
let {clean} = require('gulp-dotnet-cli');

```


## Options

The [build model](/lib/models/BuildModel.js) contains the actual model we validate against


#### output 

* type: `string`

> Output directory in which to place built artifacts

#### framework

* type: `string`

> Target framework to build for. The target framework has to be specified in the project file.

#### runtime

* type: `string`

> Target runtime to build for. The default is to build a portable application.

#### configuration 

* type: `string`

> Configuration to use for building the project. Default for most projects is  "Debug"

#### verbosity 

* type: `string`

**valid values:** 'quiet', 'minimal', 'normal', 'detailed', 'diagnostic'

> sets the console verbosity

#### version 

* type: `string`

> Sets the $(Version) property in msbuild


#### msbuildArgs

* type: `Array<string>`

> Any extra options that should be passed to MSBuild. See dotnet msbuild -h for available options

#### echo

* type: `bool`

* default: false

> Logs the command we run to the console