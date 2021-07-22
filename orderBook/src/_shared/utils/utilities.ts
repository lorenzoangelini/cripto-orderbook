import { Level } from "../../orderBook";

export function getTotalFromTupleString(arr:[string, string][]): Level[] {
    let size: number = 0
          const resultAsks: Level[] = arr.map(item => {
            size += parseFloat(item[1])
          return { price: parseFloat(item[0]), size: parseFloat(item[1]), total: size }
      });
  
      return resultAsks.filter((item) => {return item.size > 0});
  
  }


  export function getTotalFromTuple(arr:number[][]): Level[] {
    let size: number = 0
          const resultAsks: Level[] = arr.map(item => {
            size += item[1]
          return { price: item[0], size: item[1], total: size }
      });
  
      return resultAsks;
  
  }
  
  
  export function getTotalFromArray(arr:Level[]): Level[] {
    let size: number = 0
      const resultAsks: Level[] = arr.map(item => {
        size += item.size
      return { price: item.price, size: item.size, total: size }
  });
      return resultAsks;
  
  }
  
  
  export function composeLevels(selector:Level[], tuple:number[][]): Level[] | undefined {
    
    if(selector.length > 0 && tuple){
      let levelClone = selector;
      tuple.map(item => {
        const [price,size] = item;
        const index = selector.findIndex((level) => level.price === price);
        if(index != -1){
          if(size!= 0){
            levelClone[index].size = size;
          }else{
            levelClone.splice(index, 1)
          }
        }else{
          if(size > 0){
            levelClone.push({ price: price, size: size, total: 0 })
          }
         
        }
    })
    levelClone.sort((a,b) => { return a.price - b.price})
    const resultAsks = getTotalFromArray(levelClone)
    return resultAsks;
    }
    else{
      return selector;
    }
  
  }
  