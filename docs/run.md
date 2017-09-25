# Run

The run module is responsible for running `dotnet run` or essentially calling the compiler. You can get more help by running `dotnet run --help`

```js
let {run} = require('gulp-dotnet-cli');

```


## Options

The [run model](/lib/models/RunModel.js) contains the actual model we validate against


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

#### launchProfile

* type: `string`

> The name of the launch profile (if any) to use when launching the application.

#### noLaunchProfile

* type: `string`

> Do not attempt to use launchSettings.json to configure the application.

#### noBuild

* type: `string`

> Skip building the project prior to running. By default, the project will be built.

#### noRestore

* type: `string`

> Does not do an implicit restore when executing the command.

#### noDependencies

* type: `string`

> Set this flag to ignore project to project references and only restore the root project.

#### force

* type: `string`

> Set this flag to force all dependencies to be resolved even if the last restore was successful. This is equivalent to deleting project.assets.json.
    
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