// generic utility types

/// Partial utility type

interface userInfo {
  name: string;
  age: number;
  money: number;
}

function creatUser(name: string, age: number, money: number): userInfo {
  let user: Partial<userInfo> = {};
  user.name = "otter1";
  user.age = 11;
  user.money = 1121212;

  return user as userInfo;
}

/// Readonly utility type

const userList: Readonly<userInfo[]> = [
  // userInfo 타입의 요소로 이뤄진 배열을 Readonly로 선언 및 할당
  creatUser("otter1", 11, 111),
  creatUser("otter2", 12, 222),
];

userList.push(creatUser("otter3", 13, 333)); // !!! ERROR !!! 리스트에 새로운 user를 추가하려고 하면 ERROR
