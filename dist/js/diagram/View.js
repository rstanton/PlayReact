/**
 * Heart of the application!
 */
class View extends draw2d.Canvas {
    constructor(id, width, height) {
        console.log("Creating View");

        super(id, width, height);

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


    onDrop(droppedNode, x, y, shift, ctrl){
        console.log("Canvas dropper");

    }


    save(){

    }
}