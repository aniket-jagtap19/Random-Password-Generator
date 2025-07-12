const charss = "0123456789abcdef" ;
        function clickme(){
           
            let txt = [] ;
            for(let i = 0 ; i < 6 ; i++){
                const rand2 = Math.floor(Math.random()*16);
                txt.push(`${charss[rand2]}`);
            }
            txt = txt.join("") ;
          //  console.log(txt);
            document.getElementById("h4").textContent=`#` + `${txt}`;
            document.getElementById("div").style.backgroundColor = `#` + `${txt}`;
                           }