module.exports = function(canvas,windowX,windowY){
    var bbox = canvas.getBoundingClientRect();
    return {
        x:windowX-bbox.left * (canvas.width/bbox.width),
        y:windowY-bbox.top * (canvas.height/bbox.height)
    }
}