$(document).ready(function(){
    $('.faq-case-icon').click(function(){
        let temp = $(this).attr('id');
        temp = temp.slice(6);

        switch(temp) {
            case 'First':
                $("#answerFirst").slideToggle(100);

                if($("#answerSecond").css('display') == 'block') {
                    $("#answerSecond").slideUp(100);
                } else if($("#answerThird").css('display') == 'block') {
                    $("#answerThird").slideUp(100);
                } else if($("#answerFourth").css('display') == 'block') {
                    $("#answerFourth").slideUp(100);
                }
                
                break;
            case 'Second':
                $("#answerSecond").slideToggle(100);

                if($("#answerFirst").css('display') == 'block') {
                    $("#answerFirst").slideUp(100);
                } else if($("#answerThird").css('display') == 'block') {
                    $("#answerThird").slideUp(100);
                } else if($("#answerFourth").css('display') == 'block') {
                    $("#answerFourth").slideUp(100);
                }
                
                break;
            case 'Third':
                $("#answerThird").slideToggle(100);

                if($("#answerFirst").css('display') == 'block') {
                    $("#answerFirst").slideUp(100);
                } else if($("#answerSecond").css('display') == 'block') {
                    $("#answerSecond").slideUp(100);
                } else if($("#answerFourth").css('display') == 'block') {
                    $("#answerFourth").slideUp(100);
                }
                
                break;
            case 'Fourth':
                $("#answerFourth").slideToggle(100);

                if($("#answerFirst").css('display') == 'block') {
                    $("#answerFirst").slideUp(100);
                } else if($("#answerSecond").css('display') == 'block') {
                    $("#answerSecond").slideUp(100);
                } else if($("#answerThird").css('display') == 'block') {
                    $("#answerThird").slideUp(100);
                }
                
                break;
        }
    })
  });