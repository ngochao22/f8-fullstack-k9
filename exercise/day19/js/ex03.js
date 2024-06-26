
  var m = ["một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

  var a = ["ngàn", "trăm", null, null];
  var num = 1243;
  var ns = String(num);
  
  var b = ns
    .split("")
    .map((so, i) => {
      var c = a[4 - ns.length + i];
      var d = c ?  `${c}` : "";
  
      var cc = m[so - 1];
  
      if (ns.length > 1 && so === "1" && i === ns.length - 1) {
        cc = "mốt";
      }
  
      return cc + d;
    })
    .join(" ");
  console.log(b);