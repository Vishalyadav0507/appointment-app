class student{
    static count=0
    constructor(name,age,phoneNumber,boardMark){
        this.name=name
        this.age=age
        this.phoneNumber=phoneNumber
        this.boardMark=boardMark
        student.studentCount()
    }
    static studentCount(){
        return (student.count++)
    }
    checkEglibilty(){
        if(this.boardMark>=40){
            console.log(`${this.name} is egligible`)
        }
        else{
            console.log(`${this.name} you are not egligible`)
        }
    }
    setPlacementAge(minage){
        return (minmarks)=>{
            if (this.age>minage && this.boardMark>minmarks){
                console.log(`${this.name} you are ready for placement`)
            }
            else{
                console.log(`${this.name} is not ready for placement`)
            }
        }
    
    }
}

const vishal= new student("vishal",50,123,100)
const shailesh= new student("shailesh",20,123,40)
const piyush= new student("piyush",21,123,60)
const shashank= new student("shashank",20,123,39)
const arru= new student("arru",16,123,34)
vishal.checkEglibilty()
shailesh.checkEglibilty()
piyush.checkEglibilty()
shashank.checkEglibilty()
arru.checkEglibilty()
console.log(student.studentCount())
vishal.setPlacementAge(18)(40)
shailesh.setPlacementAge(18)(40)
piyush.setPlacementAge(18)(40)
shashank.setPlacementAge(18)(40)
arru.setPlacementAge(18)(40)
