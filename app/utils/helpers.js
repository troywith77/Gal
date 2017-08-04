exports.extractBkjs = function (data) {
  return data.items.map(item => {
    const temp = {}
    data.fields.forEach((field, idx) => {
      temp[field] = item[idx]
    })
    return temp
  })
}