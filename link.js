class Link {
    constructor(bodya,bodyb){
        var lastLink = bodya.body.length-2
        this.link = Constraint.create({
            bodyA : bodya.body.bodies[lastLink], 
            bodyB : bodyb,
            pointA : {x:0,y:0},
            pointB : {x:0,y:0},
            length : -10,
            stiffness : 0.1

        })
        World.add(world,this.link)

    }




}