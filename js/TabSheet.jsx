class TabSheet extends React.Component{
    render(){
        return <div>
            <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><a href="#diagrams" aria-controls="diagrams" role="tab" data-toggle="tab">Diagrams</a></li>
                <li role="presentation"><a href="#applications" aria-controls="applications" role="tab" data-toggle="tab">Applications</a></li>
                <li role="presentation"><a href="#interfaces" aria-controls="interfaces" role="tab" data-toggle="tab">Interfaces</a></li>
            </ul>

            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="diagrams"><DiagramLister/></div>
                <div role="tabpanel" className="tab-pane" id="applications"><ApplicationLister/></div>
                <div role="tabpanel" className="tab-pane" id="interfaces"><InterfaceLister/></div>
            </div>
        </div>
    }
}