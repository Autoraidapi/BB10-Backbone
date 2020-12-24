self.requestFileSystemSync = self.requestFileSystemSync || self.webkitRequestFileSystemSync;

importScripts('./r.js');

var paths = [];

var fs = null;

self.addEventListener('message', function (event) {
    
    var data = event.data;
    var out, buildText;

    if ('type' in data && 'size' in data) {
      fs = requestFileSystemSync(data.type, data.size);
    }

    switch(data.cmd){

        case 'read' : 
            paths = [];
            getAllFileEntries(fs.root.createReader(), fs.root.name);
            self.postMessage({entries: paths});
        break;

        case 'run' : 
            requirejs.optimize({
                baseUrl: '.',
                paths: {},
                include: [],
                out: function (text) {
                    out = text;
                }
            },
            function (buildText) {
                self.postMessage(JSON.stringify({
                    out: out,
                    buildText: buildText
                }, null, '  '));
            });
        break;

        default :
    }

});

function getAllFileEntries(dirReader, name) {

    var entries = dirReader.readEntries();

    for (var i = 0, entry; entry = entries[i]; ++i) {
        if (entry.isDirectory) {
            //paths.push('root' + entry.fullPath + '/.');//.substring(1));
            paths.push((entry.fullPath + '/.').substring(1));
            getAllFileEntries(entry.createReader(), entry.name);
        } else {
            //paths.push('root' + entry.fullPath);//.substring(1));
            paths.push(entry.fullPath.substring(1));
        }
    }
}

function createFile(rootDirEntry, path) {
    return rootDirEntry.getFile(path, {
        create: true
    });
}

function createDir(rootDirEntry, folders) {
    if (folders.length) {
        var dirEntry = rootDirEntry.getDirectory(folders[0], {
            create: true
        });

        // Recursively add the new subfolder if we still have a subfolder to create.
        createDir(dirEntry, folders.slice(1));
    }
}