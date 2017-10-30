class LabelledConnection extends draw2d.Connection{
    constructor(attr){
            super(attr);

            this.add(new draw2d.shape.icon.ZoomIn({width:30, height:30}),new draw2d.layout.locator.ManhattanMidpointLocator());

            this.attr({
                router:new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
                outlineStroke:1,
                outlineColor:"#303030",
                stroke:2,
                color:"#00a8f0",
                radius:4
            });
    }
}