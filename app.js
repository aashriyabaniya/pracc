


let cross = document.querySelector(".crossed");
let regi =document.querySelector(".login");

cross.addEventListener("click", ()=>{
    regi.remove();
});
let bbd=document.querySelector(".bbd");
let home =document.querySelector(".home");
let register =document.querySelector(".register");

register.addEventListener("click",()=>{
regi.style.display = "block";
 bbd.style.display ="none";
});

let reg = document.querySelector(".reg");
reg.addEventListener("click",()=>{
regi.style.display ="none";
alert(" Your data is registered in our db");
});


let rnd= document.querySelector(".rndm");
let url ="https://dog.ceo/api/breeds/image/random";
rnd.addEventListener("click",async()=>{
let link = await getPics();
let img = document.querySelector(".result");

img.setAttribute("src", link);
console.log(link);

});
async function getPics(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(error){
        console.log(error);
        return "/";
    }
}
