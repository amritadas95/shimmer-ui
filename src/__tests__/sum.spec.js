
import sum from "./sum";

test("sum top be excuteed",()=>{
  const result =sum(3,4)
  expect(result).toBe(7)
})