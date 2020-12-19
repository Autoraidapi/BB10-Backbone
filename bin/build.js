{
    "appDir" : "../www",
    "mainConfigFile" : "../www/assets.js",
    "dir" : "../www-built",
    "optimize" : "uglify2",
    "optimizeAllPluginResources" : true,
    "generateSourceMaps" : true,
    "optimizeCss": "standard.keepLines.keepWhitespace",
    // List the modules that will be optimized.
    "modules" : [
        {
            // module names are relative to baseUrl
            "name": "assets"
        }
    ]
}
