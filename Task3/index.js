let check, select;
            let celcius = document.getElementById("celcius")
            let farhenheit = document.getElementById("farhenheit")
            let kelvin = document.getElementById("kelvin")
            let result1, result2;
            document.getElementById("type").onchange = function () {
                check = this.value
                if (check == "degree") {
                    document.getElementById("hi").innerHTML = "Degree";
                    document.getElementById("selected1").innerHTML = "&#8451;"
                    document.getElementById("parasf").style.display = "none"
                }
                else if (check == "farhenheit") {
                    document.getElementById("hi").innerHTML = "Farhenheit";
                    document.getElementById("selected1").innerHTML = "&#8457;"
                    document.getElementById("parasf").style.display = "none"
                }
                else {
                    document.getElementById("hi").innerHTML = "Kelvin";
                    document.getElementById("selected1").innerHTML = "&#8490;"
                    document.getElementById("parasf").style.display = "none"
                }
            }
    
            //let select=document.getElementById("type")    
            //script for showing main result
            select = document.getElementById("type")
            const i = document.getElementById("selected")
            document.getElementById("btn").onclick = function () {
                document.getElementById("re").style.display = "inline-block"
                if (select.value == "degree") {
                    let k = i.value
                    result1 = (k * 1.8) + 32;
                    result2 = k + 273.15
                    document.getElementById("change1").style.display = "none"
                    document.getElementById("change2").style.display = "block"
                    document.getElementById("change3").style.display = "block"
                    farhenheit.innerHTML = `${result1}`
                    kelvin.innerHTML = `${result2}`
                }
                else if (select.value == "farhenheit") {
                    result1 = ((i.value - 32) * 5) / 9;
                    result2 = result1 + 273.15
                    document.getElementById("change1").style.display = "block"
                    document.getElementById("change2").style.display = "none"
                    document.getElementById("change3").style.display = "block"
                    celcius.innerHTML = `${result1}`
                    kelvin.innerHTML = `${result2}`
                }
                else {
                    result1 = i.value - 273.15
                    result2 = (1.8 * result1) + 32
                    document.getElementById("change1").style.display = "block"
                    document.getElementById("change2").style.display = "block"
                    document.getElementById("change3").style.display = "none"
                    celcius.innerHTML = `${result1}`
                    farhenheit.innerHTML = `${result2}`
                }
            }

            document.getElementById("clear").onclick=function(){
                document.getElementById("change1").style.display = "none"
                document.getElementById("change2").style.display = "none"
                document.getElementById("change3").style.display = "none"
                document.getElementById("re").style.display = "none"
                document.getElementById("selected").innerText=" "
            }