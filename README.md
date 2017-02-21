# pc-slider
 
 - 使用`jquery`实现的轮播图
```html
<!--  轮播动画开始  -->
<div id="slider">
    <div class="sliderWidth">
        <div class="child" style="background-color: #2ca193;">1</div>
        <div class="child" style="background-color: #ffff00;">2</div>
        <div class="child" style="background-color: #362b36;">3</div>
    </div>
    <!-- 触发器 -->
    <div id="slider-img"></div>

    <!-- 上下翻页切换按钮 -->
    <div id="btn_prev"></div>
    <div id="btn_next"></div>
</div>
<!--  轮播动画结束  -->
```
```javascript
    //调用方法
	$("#slider").slide({
		sliderWidth: $(".sliderWidth"),
		child: $(".child"),
		btnPrev:$("#btn_prev"),
		btnNext:$("#btn_next"),
		item:0,
		timer:3000
	})
```