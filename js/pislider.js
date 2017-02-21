(function ($) {
    $.fn.slide = function (options) {
        var isStar = false;
        var slideWidth = $(this).width();//组件的宽度
        var slideHeight = $(this).height();//组件的高度
        options.sliderWidth.append(options.child.eq(0).clone(true));
        options.child=$(".child");
        var length = options.child.length;//组件的length
        var an;

        if (this) {
            isStar = true;
            slideStyle();
            nextAnimate();
            options.btnPrev.on("click", prev);//
            options.btnNext.on("click", next);//
        } else {
            return;
        }

        function slideStyle() {
            options.child.css({
                "width": slideWidth,
                "height": slideHeight,
                "float": "left"
            }).fadeIn(200);
            options.sliderWidth.css({
                "position": "absolute",
                "top": 0,
                "left": 0,
                "width": slideWidth * length,
                "height": slideHeight
            })
        }

        function nextAnimate() {
            an = setInterval(isNextAn, options.timer)
        }

        function clearSet() {
            clearInterval(an)
        }

        function prev() {
            if (isStar) {
                isStar = false;
            } else {
                return;
            }
            clearSet();
            options.item--;
            if (options.item < 0) {
                options.sliderWidth.css("left", -(slideWidth * (length - 1)));
                options.item = length - 1;
                if (options.item == length - 1) {
                    options.item--;
                    options.sliderWidth.animate({
                        left: -(slideWidth * options.item)
                    }, 500);
                    isStar = true;
                }
            } else {
                optionsAn()
            }
            nextAnimate()
        }

        function next() {
            if (isStar) {
                isStar = false;
            } else {
                return;
            }
            clearSet();
            options.item++;
            if (options.item > length - 1) {
                options.item = 0;
                optionsAn()
            } else {
                optionsAn()
            }
            nextAnimate()
        }


        function isNextAn() {
            options.item++;
            if (options.item < length - 1 && options.item >= 0) {
                optionsAn();
            } else if (options.item < 0) {
                options.item = 0;
                options.sliderWidth.animate({
                    left: 0
                }, 500)
            } else if (options.item > length - 1) {
                options.item = 0;
                optionsAn()
            } else {
                optionsAn()
            }
        }

        function optionsAn() {
            options.sliderWidth.animate({
                left: -(slideWidth * options.item)
            }, 500, function () {
                if (options.item >= length - 1) {
                    options.sliderWidth.css("left", 0);
                    options.item = 0;
                }
                isStar = true;
            })
        }
    }
})(jQuery);