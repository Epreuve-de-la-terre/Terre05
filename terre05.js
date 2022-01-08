#! node

const num = process.argv[2]
let res = num % 2

if (isNaN(res)) {
  console.log("Tu ne me la mettras pas à l'envers")
} else if (res === 0) {
  console.log("pair")
} else {
  console.log("impair")
}
