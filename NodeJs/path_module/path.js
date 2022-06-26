const path = require ('path');

// console.log(path.dirname('D:/test_project/test_node/path_module/path.js'));
// console.log(path.basename('D:/test_project/test_node/path_module/path.js'))
// console.log(path.extname('D:/test_project/test_node/path_module/path.js'))
console.log((path.parse('D:/test_project/test_node/path_module/path.js').name))
