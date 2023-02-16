window.onload=function(){
//za pocetnata da se slidenuva
$(document).ready(function()
{
        $("#click").click(function()
        {
          $("#welcome1").slideToggle("slow");
        });
//selektor
        $('#sectionChooser').change(function(){
          var myID = $(this).val();
          $('.panel').each(function(){
              myID === $(this).attr('id') ? $(this).show() : $(this).hide();
          });
      });
    
      //lajkoj
      $(document).ready(function() {
        var clickCount = 0;
        $("#myText1").text("23");
        $("#myButton1").on("click", function() {
          clickCount++;
          if (clickCount == 1) {
            $("#myText1").text("24");
          } else if (clickCount == 2) {
            $("#myText1").text("23");
            clickCount = 0;
          }
        });
      });

      $(document).ready(function() {
        var clickCount = 0;
        $("#myText2").text("17");
        $("#myButton2").on("click", function() {
          clickCount++;
          if (clickCount == 1) {
            $("#myText2").text("18");
          } else if (clickCount == 2) {
            $("#myText2").text("17");
            clickCount = 0;
          }
        });
      });

      $(document).ready(function() {
        var clickCount = 0;
        $("#myText3").text("49");
        $("#myButton3").on("click", function() {
          clickCount++;
          if (clickCount == 1) {
            $("#myText3").text("50");
          } else if (clickCount == 2) {
            $("#myText3").text("49");
            clickCount = 0;
          }
        });
      });

      $(document).ready(function() {
        var clickCount = 0;
        $("#myText4").text("27");
        $("#myButton4").on("click", function() {
          clickCount++;
          if (clickCount == 1) {
            $("#myText4").text("28");
          } else if (clickCount == 2) {
            $("#myText4").text("27");
            clickCount = 0;
          }
        });
      });

      $(document).ready(function() {
        var clickCount = 0;
        $("#myText5").text("33");
        $("#myButton5").on("click", function() {
          clickCount++;
          if (clickCount == 1) {
            $("#myText5").text("34");
          } else if (clickCount == 2) {
            $("#myText5").text("33");
            clickCount = 0;
          }
        });
      });

      $(document).ready(function() {
        var clickCount = 0;
        $("#myText6").text("55");
        $("#myButton6").on("click", function() {
          clickCount++;
          if (clickCount == 1) {
            $("#myText6").text("56");
          } else if (clickCount == 2) {
            $("#myText6").text("55");
            clickCount = 0;
          }
        });
      });

//komentari

  var comments1 = [];
  $("#comment-form1").submit(function(event) {
    event.preventDefault(); 
    var newComment = $("#comment-input1").val();
    if (newComment !== "") {
      comments1.push(newComment);
      displayComments1();
      $("#comment-input1").val("");
    }
  });
function displayComments1() {
    $("#comments1").empty(); 
    for (var i = 0; i < comments1.length; i++) {
      $("#comments1").append("<p>" + comments1[i] + "</p>");
    }
  }

  var comments2 = [];
  $("#comment-form2").submit(function(event) {
    event.preventDefault(); 
    var newComment = $("#comment-input2").val();
    if (newComment !== "") {
      comments2.push(newComment);
      displayComments2();
      $("#comment-input2").val("");
    }
  });
function displayComments2() {
    $("#comments2").empty(); 
    for (var i = 0; i < comments2.length; i++) {
      $("#comments2").append("<p>" + comments2[i] + "</p>");
    }
  }

  var comments3 = [];
  $("#comment-form3").submit(function(event) {
    event.preventDefault(); 
    var newComment = $("#comment-input3").val();
    if (newComment !== "") {
      comments3.push(newComment);
      displayComments3();
      $("#comment-input3").val("");
    }
  });
function displayComments3() {
    $("#comments3").empty(); 
    for (var i = 0; i < comments3.length; i++) {
      $("#comments3").append("<p>" + comments3[i] + "</p>");
    }
  }

  var comments4 = [];
  $("#comment-form4").submit(function(event) {
    event.preventDefault(); 
    var newComment = $("#comment-input4").val();
    if (newComment !== "") {
      comments4.push(newComment);
      displayComments4();
      $("#comment-input4").val("");
    }
  });
function displayComments4() {
    $("#comments4").empty(); 
    for (var i = 0; i < comments4.length; i++) {
      $("#comments4").append("<p>" + comments4[i] + "</p>");
    }
  }

  var comments5 = [];
  $("#comment-form5").submit(function(event) {
    event.preventDefault(); 
    var newComment = $("#comment-input5").val();
    if (newComment !== "") {
      comments5.push(newComment);
      displayComments5();
      $("#comment-input5").val("");
    }
  });
function displayComments5() {
    $("#comments5").empty(); 
    for (var i = 0; i < comments5.length; i++) {
      $("#comments5").append("<p>" + comments5[i] + "</p>");
    }
  }

  var comments6 = [];
  $("#comment-form6").submit(function(event) {
    event.preventDefault(); 
    var newComment = $("#comment-input6").val();
    if (newComment !== "") {
      comments6.push(newComment);
      displayComments6();
      $("#comment-input6").val("");
    }
  });
function displayComments6() {
    $("#comments6").empty(); 
    for (var i = 0; i < comments6.length; i++) {
      $("#comments6").append("<p>" + comments6[i] + "</p>");
    }
  }
  

//dekoracii
$('#kopce1').css("background-color","burlywood");
$('#kopce2').css("background-color","burlywood");
$('#kopce3').css("background-color","burlywood");
$('#kopce4').css("background-color","burlywood");
$('#kopce5').css("background-color","burlywood");
$('#kopce6').css("background-color","burlywood");
$('#myButton1').css("background-color","burlywood");
$('#myButton2').css("background-color","burlywood");
$('#myButton3').css("background-color","burlywood");
$('#myButton4').css("background-color","burlywood");
$('#myButton5').css("background-color","burlywood");
$('#myButton6').css("background-color","burlywood");

$('#blogkocka').css('opacity', '0.6');


//za blogot
$(document).ready(function() {
  $("#submit-post").click(function(e) {
    e.preventDefault();
    var title = $("#title").val();
    var date = $("#date").val();
    var time = $("#time").val();
    var content = $("#content").val();
    var postHtml = "<div class='post'><h4>" + title + "</h4><p>" + content + "</p><p class='post-meta'>" + date + " во " + time + "</p></div>";
    $("#post-list").append(postHtml);
    $("#title").val('');
    $("#date").val('');
    $("#time").val('');
    $("#content").val('');
  });
});
$('#submit-post').css("background-color","burlywood");


// za anketata
$('#submit-form').css("background-color","burlywood");


  $('#submit-form').click(function() {
    var isFormValid = true;
    if (!$('#rate').val()) {
      isFormValid = false;
    }
    if (!$('#check1').is(':checked') && !$('#check2').is(':checked') && !$('#check3').is(':checked') && !$('#check4').is(':checked') && !$('#check5').is(':checked')) {
      isFormValid = false;
    }
    if (!$('#insert').val()) {
      isFormValid = false;
    }
    if (!$('#poseta1').is(':checked') && !$('#poseta2').is(':checked') && !$('#poseta3').is(':checked')) {
      isFormValid = false;
    }
    if (!isFormValid) {
      alert('Ве молам пополнете ја целосно анкетата.');
    }
    else alert('Успешно ја пополнивте анкетата, Благодарам.');
    
  });

  // za kontakt
  
    $('#myLink1').click(function() {
      window.location.href = 'https://www.instagram.com/trajkoska.kristina/';
    });
    $('#myLink2').click(function() {
      window.location.href = 'https://www.facebook.com/kristinna.trajkoska';
    });
    $('#myLink3').click(function() {
      window.location.href = 'mailto:kristina.trajkoskaa@gmail.com';
    });
 

    // za zapoznaj pak
    
      $('#containerr').css({
          'margin': '0 auto',
          'width': '50%',
          'background-color': 'rgba(222, 184, 135, 0.527)',
          'padding': '20px',
          'display': 'flex',
          'align-items': 'center',
          'flex-direction': 'column'


      });

    
    
  

     }); }
