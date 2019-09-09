        // build scene
		//ADD max-width: 100%; TO HTML,BODY CSS TO STOP HORIZONTAL SCROLL
		var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            triggerHook: 0.9,
            offset: 50, // move trigger to center of element
            reverse: false // only do once
          })
          .setClassToggle("#reveal", "visible") // add class toggle
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);