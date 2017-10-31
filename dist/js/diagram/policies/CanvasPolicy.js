class CanvasPolicy extends draw2d.policy.canvas.CanvasPolicy{
    constructor(){
        super();
    }

    onDrop(node, x, y, shift, ctrl){
        console.log("dropped");

    }

    onDoubleClick(the, x, y, shift, ctrl) {

        /*        let rect = new draw2d.shape.basic.Rectangle({width:150, height:100});
                rect.createPort("hybrid", new draw2d.layout.locator.InputPortLocator());
                rect.createPort("hybrid", new draw2d.layout.locator.OutputPortLocator());
                view.add(rect);*/
        console.log("Double Click");
        $("#applicationDialog").dialog("open");
    }
}