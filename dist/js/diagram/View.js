class View extends draw2d.Canvas {
    constructor(id, width, height) {
        console.log("Creating View");

        super(id, width, height);

        this.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());
        this.installEditPolicy(new draw2d.policy.connection.DragConnectionCreatePolicy({
            createConnection: function(sourcePort, targetPort){
                return new LabelledConnection();
            }
        }));
        this.installEditPolicy(new CanvasPolicy());
    }
}