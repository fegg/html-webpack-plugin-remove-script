var colors = require('colors');

function HtmlScriptPluginRemove() {}

HtmlScriptPluginRemove.prototype.apply = function(compiler) {
    var reg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/img;

    compiler.plugin('compile', function(params) {
        console.log(colors.underline.green('HTML Script Plugin Remove 编译开始...'));
    });

    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlData, cb) {
            htmlData.html = htmlData.html.replace(reg, '');
            cb();
        });
    });

    compiler.plugin('emit', function(compilation, cb) {
        console.log(colors.underline.green('HTML Script Plugin Remove 编译完成...'));
        cb();
    });
};

module.exports = HtmlScriptPluginRemove;
