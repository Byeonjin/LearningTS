enum BookType {
  총류, // 0으로 자동 할당
  문학 = 800,
  역사 = 900,
}
enum Position {
  사서 = 1,
  이용자, // 2로 자동 할당
  SUPERADMIN = "SUPER",
}

const user1 = {
  name: "jack",
  favBookType: BookType.문학,
  pos: Position.사서,
};

function doesUserLikeLiterautre(user: object) {
  if (user.favBookType === 800) {
    console.log(user.name, "문학을 좋아합니다.");
  } else {
    console.log(user.name, "문학을 좋아하지 않습니다.");
  }
}

function getPosCode(user: object) {
  console.log(user.pos);
}

doesUserLikeLiterautre(user1); // => 문학을 좋아합니다.
getPosCode(user1); // => 1
