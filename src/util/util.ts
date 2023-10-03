export interface timeData{ 
  time: string,
  name: string | number,
  [propsName:string]:string|number
}
export function sortByTime<T extends timeData>(arr: T[]): T[] { 
  let _arr: T[] = [];
  _arr = arr.sort((a: T, b: T) => { 
    //any
    // return <any>new Date(a.time) - <any>new Date(b.time)
    //断言

    // 处理成 正确的类型
    return new Date(a.time).getTime() - new Date(b.time).getDate()
  })
  return _arr
}