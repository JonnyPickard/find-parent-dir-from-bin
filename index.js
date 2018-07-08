const path = require('path');
const absDirPath = path.dirname(process.argv[1]);

const stepUpToNodeModulesParentDir = currAbsDirPath => {
  if (!currAbsDirPath || currAbsDirPath === path.sep) {
    console.error('app root path not found');
    return null;
  }

  const parentAbsDirPath = path.dirname(currAbsDirPath);

  if (path.basename(currAbsDirPath) === 'node_modules') {
    return parentAbsDirPath;
  } else {
    return stepUpToNodeModulesParentDir(parentAbsDirPath);
  }
};

module.exports = () => stepUpToNodeModulesParentDir(absDirPath);
