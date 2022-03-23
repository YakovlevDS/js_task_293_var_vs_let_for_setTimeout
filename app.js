// Solution 1



const launchAll = (launchMissile) => {
    for (let i = 0; i < 5; i++) { setTimeout(() => { launchMissile(i);
            console.log(`$i`) }, i * 1000) }
}

// const launchAll = (launchMissile) => 
//   Array(5).fill()
//   .forEach((_,i)=>setTimeout(launchMissile, i * 1000, i));


//   function launchAll(launchMissile) {
//     for (var i = 0; i < 5; i++) {
//       setTimeout(launchMissile.bind(null, i), i * 1000);
//     }
//   }



console.log(launchAll(0));