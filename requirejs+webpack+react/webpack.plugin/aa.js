module.exports = class AA {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.done.tap('afterPlugins', compilation => {
      console.log(compilation, this.options)
    })
  }
}