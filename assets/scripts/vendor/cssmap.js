(function($){
    $.fn.cssMap = function(map){
        var $element = this;
        $.each(map, function(property, value){
            if (value instanceof Array) {
                for(var i=0, len=value.length; i<len; i++) {
                    $element.css(property, value[i]);
                }
            } else {
                $element.css(property, value);
            }
        });
        return this;
    }
})(jQuery);
