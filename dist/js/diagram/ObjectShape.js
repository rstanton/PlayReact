class ObjectShape extends draw2d.shape.basic.Rectangle{

    constructor(attr) {
        super(attr);

        this.width = 150;
        this.height = 75;

        var label = new draw2d.shape.basic.Label({text:attr.name}).installEditor(new draw2d.ui.LabelInplaceEditor());
        this.add(label, new draw2d.layout.locator.BottomLocator());


        var inputLocator  = new draw2d.layout.locator.InputPortLocator();
        var outputLocator = new draw2d.layout.locator.OutputPortLocator();

        this.createPort("hybrid",inputLocator);
        this.createPort("hybrid",inputLocator);
        this.createPort("hybrid",outputLocator);
        this.createPort("hybrid",outputLocator);
    }

    //This will save the application object to the database
    save(){
    }
}