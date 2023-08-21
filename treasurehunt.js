//   const treasure = () => {
//     return alert("Here is the Treasure!")
// }
    var randomTre = Math.floor(Math.random()*8)
    var randomBomb = Math.floor(Math.random()*9)

  const treasure = (number) => {
    if(number === "0")
    {
      document.getElementById("0").innerHTML = "&#x1f332"
    } else if(number === "1"){
      document.getElementById("1").innerHTML = "&#x1f308"
    } else if(number === "2"){
      document.getElementById("2").innerHTML = "&#x1f332"
    }else if(number === "3"){
        document.getElementById("3").innerHTML = "&#x1f308"
      }else if(number === "4"){
        document.getElementById("4").innerHTML = "&#x1f308"
      }else if(number === "5"){
        document.getElementById("5").innerHTML = "&#x1f332"
      }else if(number === "6"){
        document.getElementById("6").innerHTML = "&#x2620"
      }else if(number === "7"){
        document.getElementById("7").innerHTML = "&#x2620"
      }else if(number === "8"){
        document.getElementById("8").innerHTML = "🏴‍☠️"
  }
}
