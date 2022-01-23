let count =0;
if(count <=2){
      $('.kolo').click(function (e) { 

            $('.kolo').animate({
                  height: '100px', 
                  width: '20px',
                  top: '300px',
                  left: '600px',
                  border: '3px solid #33FF33'
            },1000).css('background-color', 'rgb(13, 184, 113)'),

            $('.kolo').animate({
                  height: '200px', 
                  width: '200px',
                  'background-color': 'rgb(13, 184, 113)',
                  top: '400px',
                  left: '800px'
            },2000).css('background-color', 'rgb(226, 7, 43)');

            $('.kolo').animate({
                  height: '30px', 
                  width: '150px',
                  'background-color': 'rgb(13, 184, 113)',
                  top: '200px',
                  left: '200px',
                  border: '3px solid #33FF33'
            },3000).css('background-color', 'rgb(226, 7, 208)')
    })
  }