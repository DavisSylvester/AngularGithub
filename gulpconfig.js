var LESS_MAIN_FILE = 'assets/less/main.less';
var LESS_CUSTOM_FILE = 'assets/less/custom.less';
var LESS_FILES = 'assets/less/**/*.less';
var JS_FILES = 'assets/js/**/*.js';
var MAIN_CSS_DIR = 'assets/css'
var HTML_FILES = '*.html';
var INDEX_HTML = 'index.html';
var APP_ROOT = './';

var baseDir = 'assets/js/'; 
var helpers = baseDir + '*Helpers*/*.js';
var models = baseDir + '**/*Model*/*.js';
var modules = baseDir + '**/app.js';
var routes = baseDir + '**/routes.config.js';
var controllers = baseDir + '**/*Controller.js';
var directives = baseDir + '**/Directive*/*.js';
var filters = baseDir + '**/Filter*/*.js';
var services = baseDir + '**/Service*/*.js';
var bal = baseDir + '**/BAL*/*.js';


var ALL_CUSTOM_ANGULAR_JS = [helpers, models, modules, routes, controllers, directives, filters, services, bal];



var All_LESS_Files = [LESS_FILES, HTML_FILES];

module.exports = {
    Files: {
        MAIN_LESS_FILE: LESS_MAIN_FILE,
        CUSTOM_LESS: LESS_CUSTOM_FILE,
        ALL_LESS_FILES: All_LESS_Files,
        MAIN_CSS_DIR: MAIN_CSS_DIR,
        ALL_HTML_FILES: HTML_FILES,
        ALL_CUSTOM_ANGULAR_JS: ALL_CUSTOM_ANGULAR_JS,
        APP_ROOT: APP_ROOT,
        INDEX_HTML: INDEX_HTML
    }
};