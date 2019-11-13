 // container = document.getElementById("main");

 //    var text = new Blotter.Text("繼續往下滑 / Scroll Down", {
 //        family: "serif",
 //        size: 100,
 //        fill: "blue",
 //        paddingLeft: 80,
 //        paddingRight: 80,
 //        paddingTop: 80,
 //        paddingBottom: 80
 //    })

 //    var material = new Blotter.ChannelSplitMaterial();
 //    material.uniforms.uOffset.value = 0.05;
 //    material.uniforms.uRotation.value = 50;
 //    material.uniforms.uApplyBlur.value = 0;
 //    material.uniforms.uAnimateNoise.value = 0.3;

 //    var blotter = new Blotter(material, {
 //        texts: text
 //    })

 //    var scope = blotter.forText(text);

 //    scope.appendTo(container);

 //    // Add mousemove effect

 //    document.onmousemove = moveIt;
 //    function moveIt(event) {
 //        material.uniforms.uRotation.value = (event.clientY * 0.1);
 //        material.uniforms.uOffset.value = (event.clientY * 0.0001);
 //    }



//liquid effect

    // container = document.getElementById("main");

    // const text = new Blotter.Text("ABOUT ME", {
    //     family: "serif",
    //     size: 100,
    //     fill: "blue"

    // });

    // let material = new Blotter.LiquidDistortMaterial();

    // material.uniforms.uSpeed.value = 0.3;
    // material.uniforms.uVolatility.value = 0.05;
    // material.uniforms.uSeed.value = 0.9;

    // let blotter = new Blotter(material, {
    //     texts: text
    // });

    // let scope = blotter.forText(text);

    // scope.appendTo(container);


//dot effect
    container = document.getElementById("main");

    var text = new Blotter.Text("About Me", {
        family: "serif",
        size: 150,
        fill: "blue",
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 80,
        paddingBottom: 80
    });

    var material = new Blotter.FliesMaterial();
    material.uniforms.uPointCellWidth.value = 0.01;
    material.uniforms.uPointRadius.value = 0.7;
    material.uniforms.uSpeed.value = 3;

    var blotter = new Blotter(material, {
        texts: text
    });

    var scope = blotter.forText(text);
    scope.appendTo(container);