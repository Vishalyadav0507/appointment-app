// var form = document.getElementById('my-form')
// form.addEventListener('submit',onsubmit);
// function onsubmit(e){  
//     e.preventDefault()
//     var Name = document.getElementById('name').value;
//     var email =document.getElementById('email').value;
//     var phone =document.getElementById('phone').value;
//     const obj={
//         Name:Name,
//         email:email,
//         phone:phone,
//     }
//     localStorage.setItem(email,JSON.stringify(obj))
//     callingList(obj)
// }
// window.addEventListener("DOMContentLoaded", () => {
//     const localStorageObj = localStorage;
//     const localstoragekeys  = Object.keys(localStorageObj)

//     for(var i =0; i< localstoragekeys.length; i++){
//         const key = localstoragekeys[i]
//         const userDetailsString = localStorageObj[key];
//         const userDetailsObj = JSON.parse(userDetailsString);
//         callingList(userDetailsObj)
//     }
// })

// function callingList(user){
//     const perentNode=document.getElementById('show')
//     const childHTML =`<li id=${user.email}> ${user.Name} ${user.email} <button onclick= deleteUser('${user.email}')>delete User</button><button onclick= editUser('${user.email}','${user.Name}','${user.phone}')>edit</button> </li>`
//     perentNode.innerHTML = perentNode.innerHTML+childHTML;
// }
// function deleteUser(email){
//     localStorage.removeItem(email)
//     removeUserFromScreen(email)
// }
// function editUser(email,Name,phone){
//    document.getElementById('name').value=Name
//    document.getElementById('email').value=email
//    document.getElementById('phone').value=phone

//    deleteUser(email)
// }
// function removeUserFromScreen(email){
//     const parentNode=document.getElementById('show')
//     const childNodeToDeleted=document.getElementById(email)
//     parentNode.removeChild(childNodeToDeleted)
// }
class student{
    static count=0
    constructor(name,age,phoneNumber,boardMark){
        this.name=name
        this.age=age
        this.phoneNumber=phoneNumber
        this.boardMark=boardMark
        student.studentCount()
    }
    studentCount=()=>{
        return (this.count++)
    }
    checkEglibilty(){
        if(this.boardMark>=40){
            console.log(`${this.name} is egligible`)
        }
        else{
            console.log(`${this.name} you are not egligible`)
        }
    }
}

const vishal= new student("vishal",50,123,100)
const shailesh= new student("shailesh",20,123,40)
const piyush=new student("piyush",21,123,60)
const shashank= new student("shashank",20,123,39)
const arru=new student("arru",16,123,34)
vishal.checkEglibilty()
shailesh.checkEglibilty()
piyush.checkEglibilty()
shashank.checkEglibilty()
arru.checkEglibilty()
console.log(student.studentCount())


 
















