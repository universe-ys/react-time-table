import { atom } from "recoil";

export const timeTableState = atom({
  key: "timeTableState",
  default: {
    mon: [{start: 9, end: 11, name:"교양", color:"#ddd", id:1}],
    tue: [{start: 10, end: 13, name:"수학", color:"#aaa", id:2}],
    wed: [{start: 15, end: 19, name:"영어", color:"#ccc", id:3}],
    thu: [{start: 18, end: 20, name:"물리", color:"#eee", id:4}],
    fri: [{start: 11, end: 13, name:"물리", color:"orange", id:5}]
  }
})