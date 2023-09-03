let fullName = prompt("Adınız Nedir?")
if(fullName==""){
    fullName="Mehmet Duran Kaya"
}else{
    fullName
}
let myName = document.querySelector('#myName')
myName.innerHTML= fullName

let selectSection=prompt("web development patikasının hangi bölümündesiniz")
if(selectSection==""){
    selectSection="Javascript"
}else{
    selectSection
}
let section=document.querySelector('#section')
section.innerHTML=selectSection

let selectWhich=prompt("Kaçıncı Ödeviniz")
if(selectWhich==""){
    selectWhich="1."
}else{
    selectWhich
}

let which=document.querySelector('#which')
which.innerHTML=selectWhich
