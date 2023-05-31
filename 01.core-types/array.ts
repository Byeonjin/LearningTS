const names = ["aaaa", "bbbb", "dddd"];

for (const name of names) {
  console.log(name.toUpperCase());
  //console.log(name.map()); // !!! ERROR(name을 TS에서는 string type inference하는데 map 메서드는 string 타입의 메서드가 아니기 때문이다.) !!!
}
