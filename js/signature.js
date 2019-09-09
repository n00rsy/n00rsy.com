function pathPrepare($el) {
            var lineLength = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLength);
            $el.css("stroke-dashoffset", lineLength);
          }

          var $word = $("path#word");



          // prepare SVG
          pathPrepare($word);


          // init controller
          var controller = new ScrollMagic.Controller();

          // build tween
          var tween = new TimelineMax()
            .add(TweenMax.to($word, 1, {
              strokeDashoffset: 0,
              ease: Linear.easeNone
            })) // draw word for 0.9

            .add(TweenMax.to("path", 0.5, {
              stroke: "#FFFFFF"
            }), 0); // change color during the whole thing
          //		.add(TweenMax.to("path", 0.5, {stroke: "#FFFFFF", ease:Linear.easeNone}), 0);			// change color during the whole thing

          // build scene
          var scene = new ScrollMagic.Scene({
              triggerElement: "#trigger1",
              duration: 150,
              tweenChanges: true
            })
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);