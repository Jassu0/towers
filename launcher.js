class Launcher {
    constructor (bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.sling = Constraint.create (options);
        World.add (world, this.sling);
        this.pointB = pointB;
    }
    fly() {
        this.sling.bodyA = null;
    }
    attach(b) {
        this.sling.bodyA = b;
    }
    display() {
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
             strokeWeight (3);
             line (pointA.x, pointA.y, pointB.x, pointB.y);
             pop ();
        }

    }
}