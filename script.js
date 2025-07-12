function genfun(){

        const q = document.getElementById("ucase").checked ;
        const w = document.getElementById("lcase").checked ;
        const e = document.getElementById("ncase").checked ;
        const r = document.getElementById("scase").checked ;
        const length1 = document.getElementById("lencase") ;

        const LowerCase = "abcdefghijklmnopqrstuvwxyz" ;
        const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const Number = "0123456789" ;
        const Symbol = "!@#$%^&*()";
      
       let allowchars = "" ;
       let Password ="" ;
       allowchars += q ? UpperCase : "" ;
       allowchars += w ? LowerCase : "" ;
       allowchars += e ? Number : "" ;
       allowchars += r ? Symbol : "" ;

        for(let i =0; i<length1.value ; i++ ){
           let randomNum = Math.floor(Math.random()*(allowchars.length));
            Password += allowchars[randomNum] ;
        }
        if( q==false && w==false && e==false && r==false ){
            document.getElementById("result").textContent="Please Select A ChecBox" ;
        }

       
       if( q==false && w==false && e==false && r==false ){
            document.getElementById("result").textContent="Please Select A CheckBox !!!" ;
        }
        else{
            document.getElementById("result").textContent=` ${Password}` ;
        }
    }