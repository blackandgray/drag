(function($){
    $.fn.drag = function(cb) {
        var x = 0,
            y = 0;
        this.css('position', 'absolute');
        this.on('mousedown', function(e){
            var _this = $(this);
            x = e.clientX - parseFloat(_this.css('left'));
            y = e.clientY - parseFloat(_this.css('top'));

            cb.down && cb.down(_this);

            $(document).on('mousemove', function(e){
                _this.css({
                    'left': e.clientX - x,
                    'top': e.clientY - y
                });
                var obj = {};
                obj.e = e;
                obj.ele = _this;
                obj.left = parseFloat(_this.css('left'));
                obj.top = parseFloat(_this.css('top'));
                obj.box = _this.parent('.container');

                cb.move && cb.move(obj);
                cb.range && range(obj);

            });

            $(document).on('mouseup', function(e){
                $(document).off('mousemove');
                $(document).off('mouseup');

                cb.up && cb.up(_this);
            });
        });
        
        function range(obj) {
            if(obj.left > obj.box.width() - obj.ele.width()) {
                obj.ele.css('left', obj.box.width() - obj.ele.width());
            }
            if(obj.left < 0) {
                obj.ele.css('left', 0);
            }
            if(obj.top > obj.box.height() - obj.ele.height()) {
                obj.ele.css('top', obj.box.height() - obj.ele.height());
            }
            if(obj.top < 0) {
                obj.ele.css('top', 0);
            }
        }
    }
})(jQuery);