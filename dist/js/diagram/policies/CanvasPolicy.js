class CanvasPolicy extends draw2d.policy.canvas.CanvasPolicy{
    constructor(){
        super();
    }

    onDoubleClick(the, x, y, shift, ctrl){
        console.log("Double Click "+the);

        let rect = new draw2d.shape.basic.Rectangle();
        rect.createPort("hybrid", new draw2d.layout.locator.InputPortLocator());
        rect.createPort("hybrid", new draw2d.layout.locator.OutputPortLocator());

        view.add(rect);
    }
}