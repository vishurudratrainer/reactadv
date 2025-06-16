
class Person{
    constructor(id,name="Ravi"){
        this.id=id
        this.name=name
    }

    display(){
        console.log("id",this.id,"name",this.name)
    }
}

p1=new Person(1,"Raj")
p1.display()

p2=new Person(2)
p2.display()