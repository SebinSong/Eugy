/*
  node js script that generates a json file of all eugy images and the info
*/

const fs = require('fs')

const capitalizeProductName = (v) => {
  const words = v.split('_').map(s => `${s[0].toUpperCase()}${s.slice(1)}`)
  
  return words.join(' ')
}

fs.readdir(
  './src/assets/images/eugy/',
  (err, fileNames) => {
    const itemList = []

    fileNames.forEach((filename, index) => {
      const [_, productNameWithExt] = filename.split(/\d+_/)
      const [productName, ext] = productNameWithExt.split('.')

      const obj = {
        name: capitalizeProductName(productName),
        id: productName,
        price: '19.00',
        imgName: filename
      }

      itemList.push(obj)
    })

    fs.writeFile(
      './src/components/shared/view-data/eugy_data.js',
      JSON.stringify(itemList, null, 2),
      (err) => {
        if (err) {
          console.log('error occurred during file-writing!')
          
          return
        }

        console.log('success!')
      }
    )
  }
)