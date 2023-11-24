/**
 * Class Timer
 */

function Timer() {
    this.elapsed_time = new Date();
  
    this.update = function() {
      var now = new Date();
      var elapsed_time =
        new Date(now.getTime()-this.elapsed_time.getTime()).getMilliseconds()/1000;
      this.elapsed_time = now;
      return elapsed_time;
    }
  }
  
  
  
  
  $(function() {
    if($('.nyan').length) {
      Number.prototype.mod = function(n) {
        return ((this%n)+n)%n;
      };
      var Nyan = function() {
        var that = this;
        var canvas = $('.nyan');
        var ctx = canvas[0].getContext("2d");
  
        this.canvas = canvas;
        this.timer = new Timer();
        this.symbols = ['x','+','*','-', '@','#','o',':','.','/',')','('];
        this.current_symbol = 0;
        this.nyan_time = 0;
  
        this.init = function() {
          R = '#f00';
          O = '#fe9321';
          Y = '#fdfe35';
          G = '#41fe2d';
          B = '#289bfc';
          V = '#6a3cfb';
          C = '#ceffff';
          P = '#fc999a';
          N = '#999';
          J = '#fd9bfd';
          T = '#fdcb9c';
          M = '#fc3699';
          K = '#000';
          W = '#fff';
          W = '#036';
  
          this.nyancat = [
                R,R,R,R,R,W,W,W,W,W,W,W,W,R,R,R,R,R,R,R,R,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,
            R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,W,W,W,W,W,W,W,W,
            R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,K,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,K,W,W,W,W,W,W,W,
            O,O,O,O,O,R,R,R,R,R,R,R,R,O,O,O,O,O,O,O,O,R,R,K,T,T,T,J,J,J,J,J,J,J,J,J,J,J,J,J,T,T,T,K,W,W,W,W,W,W,
            O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,K,T,T,J,J,J,J,J,J,M,J,J,M,J,J,J,J,J,T,T,K,W,W,W,W,W,W,
            O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,K,T,J,J,M,J,J,J,J,J,J,J,J,J,J,J,J,J,J,T,K,W,W,W,W,W,W,
            Y,Y,Y,Y,Y,O,O,O,O,O,O,O,O,Y,Y,Y,Y,Y,Y,Y,Y,O,O,K,T,J,J,J,J,J,J,J,J,J,J,J,K,K,J,M,J,J,T,K,W,W,K,K,W,W,
            Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,K,T,J,J,J,J,J,J,J,J,J,J,K,N,N,K,J,J,J,T,K,W,K,N,N,K,W,
            Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,K,T,J,J,J,J,J,J,M,J,J,J,K,N,N,N,K,J,J,T,K,K,N,N,N,K,W,
            G,G,G,G,G,Y,Y,Y,Y,Y,Y,Y,Y,G,G,G,G,G,G,G,G,Y,Y,K,T,J,J,J,J,J,J,J,J,J,J,K,N,N,N,N,K,K,K,K,N,N,N,N,K,W,
            G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,K,T,J,J,J,M,J,J,J,J,J,J,K,N,N,N,N,N,N,N,N,N,N,N,N,K,W,
            G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,K,K,K,T,J,J,J,J,J,J,J,M,J,K,N,N,N,N,N,N,N,N,N,N,N,N,N,N,K,
            B,B,B,B,B,G,G,G,G,G,G,G,G,B,B,B,B,B,B,K,K,N,N,K,T,J,M,J,J,J,J,J,J,J,K,N,N,N,C,K,N,N,N,N,N,C,K,N,N,K,
            B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,K,N,N,N,N,K,T,J,J,J,J,J,J,J,J,J,K,N,N,N,K,K,N,N,N,K,N,K,K,N,N,K,
            B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,K,N,N,K,K,K,K,T,J,J,J,J,J,M,J,J,J,K,N,P,P,N,N,N,N,N,N,N,N,N,P,P,K,
            V,V,V,V,V,B,B,B,B,B,B,B,B,V,V,V,V,K,N,N,K,B,B,K,T,T,J,M,J,J,J,J,J,J,K,N,P,P,N,K,N,N,K,N,N,K,N,P,P,K,
            V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,K,K,V,V,V,K,T,T,T,J,J,J,J,J,J,J,J,K,N,N,N,K,K,K,K,K,K,K,N,N,K,W,
            V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,K,K,T,T,T,T,T,T,T,T,T,T,T,K,N,N,N,N,N,N,N,N,N,N,K,W,W,
            W,W,W,W,W,V,V,V,V,V,V,V,V,W,W,W,W,W,W,W,W,V,K,N,N,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,W,W,W,
            W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,K,N,N,K,W,K,N,N,K,W,W,W,W,W,W,K,N,N,K,W,K,N,N,K,W,W,W,W,
            W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,K,K,K,W,W,W,K,K,K,W,W,W,W,W,W,W,K,K,K,W,W,K,K,K,W,W,W,W
          ];
        };
  
        //methods
        this.start = function() {
          this.init();
          this.game_loop_id = setInterval(this.loop, 1000/30);
        };
  
        this.draw = function() {
          that.clear('#036');
          offset = 0;
          for(var i=0;i<21;i++){
            for(var j=0;j<50;j++){
              color = j + i+ 49*offset;
              ctx.font = '14px "Courier"';
              ctx.fillStyle=that.nyancat[color];
              ctx.fillText(that.symbols[that.current_symbol], 120 + 10*j, 100 + 10 * i);
            }
            offset += 1;
          }
        };
  
        this.update = function(dt) {
          that.nyan_time += dt;
          if(that.nyan_time > 0.1) {
            that.nyan_time = 0;
            that.current_symbol = (that.current_symbol + 1) % that.symbols.length;
          }
        };
  
        this.clear = function(color) {
          ctx.clearRect(0, 0, canvas.width(), canvas.height());
          if(color !== null) {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width(), canvas.height());
          }
        };
  
        this.loop = function() {
          var dt = that.timer.update();
          that.update(dt);
          that.draw();
        };
  
        function getCursorPosition(e) {
          var x;
          var y;
          if (e.pageX !== undefined && e.pageY !== undefined) {
            x = e.pageX;
            y = e.pageY;
          }
          else {
            x = e.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
          }
          x -= that.canvas[0].offsetLeft;
          y -= that.canvas[0].offsetTop;
  
          return {posx: x, posy: y};
        }
      };
  
      var nyan = new Nyan();
      nyan.start();
    }
  });