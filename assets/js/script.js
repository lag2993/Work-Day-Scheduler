

$(document).ready(function () {
    // Update Date for Header
    var currentDate = new Date();
    $('#currentDay').text(currentDate);
    // Get saved user inputted tasks.  
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14.description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16.description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  //Event listener for save button click. 
  $('.saveBtn').on('click',function(){

  // Store the written task as well as what time it was saved to. 
    var schdlTask = $(this).siblings('.description').val();
    var timeSchdld = $(this).parent().attr('id');
  // Store variables to local storage that will add key name and value to the givenn object
    localStorage.setItem(timeSchdld,schdlTask);
  });
  // Function applied to each  hourly bracket to compare
  function blockUpdtr(){
    
  // Get current time for comparison
      var dateTime = new Date();
      var currentTime = dateTime.getHours();

      
      $('.time-block').each(function(){
  // Get current time block class element then split string by - to grab the hour bracket.  

        var scheduleTime = parseInt($(this).attr('id').split('-')[1]);

  // Conditional to remove unwanted classes and add time relevant class. 

      if(scheduleTime<currentTime){
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
       
      }else if(scheduleTime === currentTime){
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }else{
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
      
      
   
      });

  }
  blockUpdtr();

});
