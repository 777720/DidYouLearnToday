/*
  完成一个 extractStr 函数，可以把一个字符串中所有的 : 到 . 的子串解析出来并且存放到一个数组当中，例如：

    extractStr('My name is:Jerry. My age is:12.') // => ['Jerry', '12']
  
    注意，: 和 . 之间不包含 : 和 .。也即是说，如果 ::abc..，则返回 ['abc']。
*/

const extractStr = (str) => {
  const result = []
  const targets = str.split(".")
  targets.length > 1 && targets.forEach((item, index) => {
    if (index + 1 === targets.length) {
      return
    }
    const position = item.lastIndexOf(":")
    if (position >= 0) {
      result.push(item.substring(position + 1))
    }
  })
  return result
}
console.log(extractStr('VKXKNY:AKsWRH.QsGXvwOoUETE:mUHopP.:ivZhFO.:GuGDzZ.:aixvml'));
console.log(extractStr('GmNBZNCPgonX:pvOEty'));
console.log(extractStr('uKbbpL.OJQELg:oMVwqa '));

