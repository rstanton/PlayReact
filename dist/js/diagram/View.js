/**
 * Heart of the application!
 */
class View extends draw2d.Canvas {
    constructor(id, width, height) {
        console.log("Creating View");

        super(id, width, height);

        this.setConnectionPolicy = this.setConnectionPolicy.bind(this);
        this.setEditPolicy = this.setEditPolicy.bind(this);
        this.setDropListener = this.setDropListener.bind(this);

        this.setEditPolicy();
        this.setDropListener();
        this.setConnectionPolicy();

    }

    setEditPolicy(){
        this.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());

        this.installEditPolicy(new draw2d.policy.connection.DragConnectionCreatePolicy({
            createConnection: function(sourcePort, targetPort){
                console.log("Showing Interfaces");
                $("#interfaceDialog").dialog({
                    show:true
                });
                return new LabelledConnection();
            }
        }));
        this.installEditPolicy(new CanvasPolicy());
    }

    setDropListener(){
        $("#"+"container").droppable({
            drop: function (event, ui) {

                let object = new ObjectShape({
                    name:ui.draggable.data("title"),
                    x:ui.position.left,
                    y:ui.position.top
                });

                this.add(object);
            }.bind(this)
        });
    }

    setConnectionPolicy(){
        var routerToUse =new draw2d.layout.connection.InteractiveManhattanConnectionRouter();

        this.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
            createConnection: function(){
                var connection = new draw2d.Connection({
                    stroke:3,
                    outlineStroke:1,
                    outlineColor:"#303030",
                    color:"91B93E",
                    router:routerToUse
                });

                connection.on("dblclick", function(em){
                    console.log("Line Double Clicked");
                });

                return connection;
            }
        }));
    }

    save(){

    }
}