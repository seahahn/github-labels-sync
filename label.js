const githubLabelSync = require("github-label-sync");
const fs = require("fs");

const token = fs.readFileSync("./token.txt", "utf8");
const repo = fs.readFileSync("./repo.txt", "utf8");
const data = fs.readFileSync("./labels.json", "utf8");

console.log("token", token);
console.log("repo", repo);
console.log("data", typeof data, JSON.parse(data));

githubLabelSync({
  accessToken: token,
  repo: repo,
  // ! 이미 라벨이 적용된 repo에 있는 라벨을 확인하고 싶다면 labels: []로 변경 후 dryRun: true로 실행할 것
  labels: JSON.parse(data),
  dryRun: false,
}).then((diff) => {
  console.log(diff);
});
