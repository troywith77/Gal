const files = require.context('.', true, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  if (key === './all.js') return;
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key);
});

export default modules