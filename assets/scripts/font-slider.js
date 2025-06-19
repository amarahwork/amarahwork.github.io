$(function(){

//    let slider = $("#text-weight");
//    let output = $(".weight");
//    
//    output.innerHTML = slider.value;
//    
//    slider.oninput = function() {
//        output.innerHTML = this.value;
//    }

    $("#font-weight").on('input', function(e){
        
        let weight = $(e.target).val();
        
        $("#weight-output").text(weight);
        
         $("#demo-text").css("--text-weight", this.value);

    });
//    var slider = document.getElementById("font-weight");
//    var output = document.getElementById("weight-output");
//    output.innerHTML = slider.value;
//
//    slider.oninput = function() {
//      output.innerHTML = this.value;
//    }

});

//Based on "Variable Font Slider" by Danielle Romo via Codepen
//https://codepen.io/dromo77   
//    const container = document.querySelector(".demo-text");
//    const sliders = document.querySelectorAll(".slider");
//    const sliderValues = document.querySelectorAll(".output");
//    const buttons = document.querySelectorAll(".button");
//    
//    // Display property values
//    for (let i = 0; i < sliders.length; i++) {
//        sliderValues[i].innerHTML = sliders[i].value;
//    }
//    // Update text property and displayed property value for each slider
//    sliders.forEach(slider => {
//        const sliderIndex = slider.getAttribute("data-index");
//        const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
//        slider.oninput = function() {
//            container.style.setProperty(`--${this.id}`, this.value);
//            output.innerHTML = this.value;
//        };
//    });