
//-------------------BREWERIES API PROJECT--------------------

// let beerapi="https://api.openbrewerydb.org/v1/breweries" //direct search
// let beerapi = "https://api.openbrewerydb.org/v1";//wrong api to chech catch
let beerapi = "https://api.openbrewerydb.org/v1/breweries?by_country="; //final api search by country


let beerbtn = document.querySelector(".beerbtn");
let beerinput = document.querySelector(".beerinput");
let ulist = document.querySelector(".beer_ulist");
let clear = document.querySelector(".clear");

//clear input
clear.addEventListener("click", () => {
    console.log("clear btn clicked");
    beerinput.value = "";
    ulist.innerHTML="";
});

let beercountry;
console.log("top beercountry=", beercountry);

beerbtn.addEventListener("click", async () => {
    ulist.innerHTML = "";
    beercountry = beerinput.value;
    //call api return answer list of colleges in country
    // console.log("inside btn listsner beercountry=", beercountry);

    let finalbeer = await getbeerstores();
    // console.log("final answer before for loop=", finalbeer);

    
    if(finalbeer.error){
        //returned object //final beer =object
        //has 2 property error and ,message
        let li=document.createElement("li");
        li.innerText=finalbeer.message;
        ulist.append(li);
        console.log("finalbeer error",finalbeer.error);
    }//if user does not enter any input 
    else if(beercountry==""){
        let li = document.createElement("li");
        li.innerText = "Please enter a valid country";
        ulist.append(li)

    }else if(finalbeer.length == 0) {
        //no stores found means empty array
        //show message no stores found ,its not error catch section
        //its try block only ->api ran successfully
        let li = document.createElement("li");
        li.innerText = "No stores Found for this country";
        ulist.append(li)

    }
    else {
        for (each of finalbeer) {
            console.log(each.name);
            let storename = each.name;
            let newli = document.createElement("li");
            newli.innerText = storename;
            ulist.append(newli);

            // ulist.append(each.name);
            // console.log(each);
            // console.log("name=",each.name);
            // console.log("country=",each.country);
            // console.log("state=",each.state);
            console.log("-------------------------")

        }

    }

});

async function getbeerstores() {
    try {
        console.log("inside getbeerstores function  beercountry=", beercountry);
        let answer = await axios.get(beerapi + beercountry);
        //   console.log(answer.data);
        let beerlist = answer.data;
        return beerlist;
    } catch (err) {
        // console.log("the error:", err);
        return {
            error:err,
            message:"something went wrong"

        };
    }
}

