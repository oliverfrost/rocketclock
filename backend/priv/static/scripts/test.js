var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
        // ctx.fillStyle = "#cccccc";
        // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        drawPieSlice(
            this.ctx,
            this.canvas.width/2,
            this.canvas.height/2,
            Math.min(this.canvas.width/2,this.canvas.height/2),
            0,
            360,
            "#333333"
        );
        var total_value = 12
        var color_index = 0;
 
        var start_angle = Math.PI/2;

        var events = this.options.data.length
        for (index in this.options.data){
            var booking = this.options.data[index];
            var from = new Date(booking.from * 1000);
            var to = new Date(booking.to * 1000);
            var hours = to.getHours() - from.getHours();
            console.log(from.toUTCString() + "" + to.toUTCString());
            var slice_angle = 2 * Math.PI * hours / total_value;
            start_angle = (Math.PI/2) + (2 * Math.PI * (from.getHours() - 7) / total_value);
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            // start_angle += slice_angle;
            color_index++;
        }
 
        //drawing a white circle over the chart
        //to create the doughnut chart
        if (this.options.doughnutHoleSize){
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                this.options.doughnutHoleSize * Math.min(this.canvas.width/2,this.canvas.height/2),
                0,
                2 * Math.PI,
                "#000000"
            );
        }
 
    }
}

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

var bookings = [{"company":"Sharpfin","from":1541758500,"to":1541761200},{"company":"Sharpfin","from":1541768400,"to":1541772000},{"company":"Entercash","from":1541775600,"to":1541782800}];
var myVinyls = {
    "Classical music": 10,
    "Alternative rock": 14,
    "Pop": 2,
    "Jazz": 12
};

var myDougnutChart = new Piechart(
    {
        canvas:myCanvas,
        data:bookings,
        colors:["#57d9ff", "#fde23e"],
        doughnutHoleSize:0.8
    }
);

myDougnutChart.draw();
