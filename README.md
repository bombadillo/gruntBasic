Grunt Basic
==========

Basic boilerplate/starter app with grunt tools for JS checking, LESS CSS compilation and others.

## Project Setup

1. Use the Node Packager Manager (NPM) install command within the root directory of _gruntBasic_. This will install all the dependencies and packages that will be needed for the app.

## Automated Tasks

There are automated tasks to carry out repetitive operations. The plugins carrying out these tasks are:

- **JSHint**: JavaScript error checking.
- **Concat**: Concatenating JavaScript files.
- **Uglify**: Obfuscating and minifying JavaScript files.
- **LESS**:   Compiling LESS CSS files.
- **CSSMin**: Concatenating and minifying JavaScript files.
- **Watch**:  Watching for file changes and carrying out operations based on the changed file.

### Running Tasks

You can run these tasks by using the `grunt` command followed by the task name e.g.

`grunt jshint`

### Watch Task

We use the watch task to check for changes to less files so that the LESS is compiled to CSS and saved to a new file. The watch task is not used in any of the defined task cases.

### Default Tasks Case

If you use the `grunt` command without specifying a task, grunt will use the default task. This is currently set to run all of the tasks listed above with the exception of the watch command.

### Development Tasks Case

When developing we really only want to see the changes to our code and to check for errors. 

The tasks used within this case are:

- JSHint
- Concat
- LESS
- CSSMin

We call the JSHint task for error/syntax checking, Concat to concatenate all our JavaScript into one file, LESS to compile our CSS and CSSMin to concatenate all our CSS into one file.

### Production Tasks Case

When getting our files ready for production we don't need to check for errors (as the development task case should have been run previous to this) we simply want to compile our files and concatenate our JavaScript and CSS.  

The tasks used within this case are:

- Concat
- Uglify
- LESS
- CSSMin

We use Concat to concatenate all our JavaScript into one file, LESS to compile our CSS and CSSMin to concatenate all our CSS into one file.

## License
MIT
