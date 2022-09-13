import { mxUtils } from "mxgraph-js";
function BoxShape()
{
    mxCylinder.call(this);
};
mxUtils.extend(BoxShape, mxCylinder);
BoxShape.prototype.extrude = 10;
BoxShape.prototype.redrawPath = function(path, x, y, w, h, isForeground)
{
    var dy = this.extrude * this.scale;
    var dx = this.extrude * this.scale;
    if (isForeground)
    {
        path.moveTo(0, dy);
        path.lineTo(w - dx, dy);
        path.lineTo(w, 0);
        path.moveTo(w - dx, dy);
        path.lineTo(w - dx, h);
    }
    else
    {
        path.moveTo(0, dy);
        path.lineTo(dx, 0);
        path.lineTo(w, 0);
        path.lineTo(w, h - dy);
        path.lineTo(w - dx, h);
        path.lineTo(0, h);
        path.lineTo(0, dy);
        path.lineTo(dx, 0);
        path.close();
    }
};
addVertex('a.png', 320, 100, 'shape=box');
var addVertex = function(icon, w, h, style)
{
    var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
    vertex.setVertex(true);

    var funct = function(graph, evt, cell)
    {
        graph.stopEditing(false);
        var pt = graph.getPointForEvent(evt);
        var vertex = graph.getModel().cloneCell(prototype);
        vertex.geometry.x = pt.x;
        vertex.geometry.y = pt.y;       
        graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
    }

    // Creates the image which is used as the drag icon (preview)
    var img = toolbar.addMode(null, image, funct);
    mxUtils.makeDraggable(img, graph, funct);
};