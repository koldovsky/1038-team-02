$(document).ready(function(){
    $('.faq-case-icon').click(function(){
        let temp = $(this).attr('id');
        temp = temp.slice(6);

        switch(temp) {
            case 'First':
                if($("#answerFirst").css('display') == 'block') {
                    $("#answerFirst").slideUp(100);
                    $("#iconFirst").removeClass("active");
                } else if($("#answerFirst").css('display') == 'none'){
                    $("#answerFirst").slideDown(100);
                    $("#iconFirst").addClass("active");
                }

                if($("#answerSecond").css('display') == 'block') {
                    $("#answerSecond").slideUp(100);
                    $("#iconSecond").removeClass("active");
                } else if($("#answerThird").css('display') == 'block') {
                    $("#answerThird").slideUp(100);
                    $("#iconThird").removeClass("active");
                } else if($("#answerFourth").css('display') == 'block') {
                    $("#answerFourth").slideUp(100);
                    $("#iconFourth").removeClass("active");
                }
                
                break;
            case 'Second':
                if($("#answerSecond").css('display') == 'block') {
                    $("#answerSecond").slideUp(100);
                    $("#iconSecond").removeClass("active");
                } else if($("#answerSecond").css('display') == 'none'){
                    $("#answerSecond").slideDown(100);
                    $("#iconSecond").addClass("active");
                }

                if($("#answerFirst").css('display') == 'block') {
                    $("#answerFirst").slideUp(100);
                    $("#iconFirst").removeClass("active");
                } else if($("#answerThird").css('display') == 'block') {
                    $("#answerThird").slideUp(100);
                    $("#iconThird").removeClass("active");
                } else if($("#answerFourth").css('display') == 'block') {
                    $("#answerFourth").slideUp(100);
                    $("#iconFourth").removeClass("active");
                }
                
                break;
            case 'Third':
                if($("#answerThird").css('display') == 'block') {
                    $("#answerThird").slideUp(100);
                    $("#iconThird").removeClass("active");
                } else if($("#answerThird").css('display') == 'none'){
                    $("#answerThird").slideDown(100);
                    $("#iconThird").addClass("active");
                }


                if($("#answerFirst").css('display') == 'block') {
                    $("#answerFirst").slideUp(100);
                    $("#iconFirst").removeClass("active");
                } else if($("#answerSecond").css('display') == 'block') {
                    $("#answerSecond").slideUp(100);
                    $("#iconSecond").removeClass("active");
                } else if($("#answerFourth").css('display') == 'block') {
                    $("#answerFourth").slideUp(100);
                    $("#iconFourth").removeClass("active");
                }
                
                break;
            case 'Fourth':
                if($("#answerFourth").css('display') == 'block') {
                    $("#answerFourth").slideUp(100);
                    $("#iconFourth").removeClass("active");
                } else if($("#answerFourth").css('display') == 'none'){
                    $("#answerFourth").slideDown(100);
                    $("#iconFourth").addClass("active");
                }

                if($("#answerFirst").css('display') == 'block') {
                    $("#answerFirst").slideUp(100);
                    $("#iconFirst").removeClass("active");
                } else if($("#answerSecond").css('display') == 'block') {
                    $("#answerSecond").slideUp(100);
                    $("#iconSecond").removeClass("active");
                } else if($("#answerThird").css('display') == 'block') {
                    $("#answerThird").slideUp(100);
                    $("#iconThird").removeClass("active");
                }
                
                break;
        }
    })
  });