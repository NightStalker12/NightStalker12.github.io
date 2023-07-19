export function openService(element){
    $(".services_side_menu li").css({
      "background-color": "",
      "color": "",

    })
    
    var targetDiv = element.data("target");
    $(".services_content > div").addClass("hidden");
    $("#" + targetDiv).removeClass("hidden");
    element.css({
      "background-color": "#A92B26",
      "color": "white",
      "border-radius": "15px 0 0 15px"
        });
  }

  export function openServiceGet(element){

    $(".services_side_menu li").css({
        "background-color": "",
        "color": "",
  
      })

    var dataElement = $("[data-target ='" + element + "']");

    dataElement.css({
        "background-color": "#A92B26",
        "color": "white",
        "border-radius": "15px 0 0 15px"
          });   
    

    $(".services_content > div").addClass("hidden");
    $("#" + element).removeClass("hidden");


  }