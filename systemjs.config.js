System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        'app' : 'app',
        'path': 'node_modules/path',
        'rxjs': 'node_modules/rxjs',        
        '@angular'                         : 'node_modules/@angular',
        'ng2-pagination'                    : 'node_modules/ng2-pagination'
    },
    packages: {
        'app'                              : {main: 'main.ts', defaultExtension: 'ts'},
        'path'                             : {main: 'path.js'},
        'rxjs'                             : {main: 'index.js'},        
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'},
        'ng2-pagination'                   : {main: 'index.js'}
    }
});
