let data= new Date()
console.log(data);
console.log(data.toLocaleString()); // 4/6/2026, 7:48:58 pm gives ouput
console.log(data.toDateString()); // 2026-06-04T14:21:37.157Z
console.log(data.toJSON()); // 2026-06-04T14:21:37.157Z
console.log(data.toLocaleDateString()); // 4/6/2026
console.log(data.getMilliseconds());// gives value of time in milliseconds


let NewDate =new Date(2026,1,4);
console.log(NewDate);
console.log(NewDate.toLocaleString());
console.log(NewDate.getMilliseconds());
let time=new Date(2023,3,12);
console.log(time.getMilliseconds());
console.log(data.getMilliseconds());
// now we can compare both the time in questions like quizes etc


