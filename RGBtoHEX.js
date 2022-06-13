// rgb(43,89,115)
// #2b5973
function convertColor(color) {
  let isHex = /^#/.test(color)
  if (isHex) {
    return toRgb(color)
  } else {
    return toHex(color)
  }

  function toRgb(str) {
    let arr = []
    for (let i = 1; i < str.length; i += 2) {
      arr.push(parseInt(str[i] + str[i + 1], 16))
    }
    return "rgb(" + arr.join(",") + ")"
  }

  function toHex(str) {
    let arr = str.split(",")
    arr[0] = arr[0].slice(4, arr[0].length)
    const resultArr = arr.map((val) => parseInt(val, 10).toString(16))
    return "#" + resultArr.join("")
  }
}
convertColor("rgb(43,89,115)")
convertColor("#2b5973")

function toRgb(str) {
  let arr = []
  for (let i = 1; i < str.length; i += 2) {
    arr.push(parseInt(str[i] + str[i + 1], 16))
  }
  return "rgb(" + arr.join(",") + ")"
}

function toRgb(str) {
  let arr = []
  for (let i = 1; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1])
  }
  const resultArr = arr.map((val) => parseInt(val, 16))
  return "rgb(" + resultArr.join(",") + ")"
}
//hello
