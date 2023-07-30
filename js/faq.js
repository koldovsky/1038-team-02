$(document).ready(function(){
    $('.faq-case-icon').click(function(){
        let temp = $(this).attr('id');
        temp = temp.slice(6);

        switch(temp) {
            case 'First':
                $("#answerFirst").slideToggle(100);
                
                $("#answerSecond").css('display', 'none');
                $("#answerThird").css('display', 'none');
                $("#answerFourth").css('display', 'none');
                break;
            case 'Second':
                $("#answerSecond").slideToggle(100);

                $("#answerFirst").css('display', 'none');
                $("#answerThird").css('display', 'none');
                $("#answerFourth").css('display', 'none');
                break;
            case 'Third':
                $("#answerThird").slideToggle(100);

                $("#answerFirst").css('display', 'none');
                $("#answerSecond").css('display', 'none');
                $("#answerFourth").css('display', 'none');
                break;
            case 'Fourth':
                $("#answerFourth").slideToggle(100);

                $("#answerFirst").css('display', 'none');
                $("#answerSecond").css('display', 'none');
                $("#answerThird").css('display', 'none');
                break;
        }
    })
  });