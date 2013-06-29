module.exports = function(canvas,windowX,windowY){
    var bbox = canvas.getBoundingClientRect(),
        w_scale = canvas.width/bbox.width,
        h_scale = canvas.height/bbox.height;
        
    return {
        x:windowX * w_scale - bbox.left * w_scale,
        y:windowY * h_scale -bbox.top * h_scale
    }
}