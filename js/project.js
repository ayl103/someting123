$(function() {
    console.log( "page ready!" );
    loadData();

    // if()
      // var index = url.split('#project/')[1].trim();
      // renderSingleProjectPage(index, students);
});

function loadData() {
  $.getJSON( "students.json", function( data ) {
    // Write the data into our global variable.
    students = data;
    var index = window.location.hash.split('#')[1].trim();

    // Call a function to create HTML for all the students.
    renderSingleProjectPage(index,students);
  });
}

function renderSingleProjectPage(index, data){
  var counter = 0 ;
  var tagCounter = 0 ;
  var prevComma = 0  ;
  var newComma = 0 ;
  var position = 0 ;
  // var setPageOnce = true ;

  var portTrue = false ;
  var fbTrue = false ;
  var instaTrue = false ;
  var twitterTrue = false ;
  var linkTrue = false ;

  var page = $('.single-project'),
    container = $('.popup-detail');

  // Find the wanted project by iterating the data object and searching for the chosen index.
  if(data.length){
    data.forEach(function (item) {
      // console.log(index) ;
      if(item.id == 1 && item.id == index) {
        page.find('.page-name').text(item.name);
        page.find('.page-image').find('img').attr('src',"portraits/"+item['profile-pic']);
        if(item.social['portfolio'] != "") {
          page.find('.portfolio').text("Portflio  |") ;
          page.find('.portfolio').attr('href', item.social['portfolio']) ;
          portTrue = true ;
        }
        if(item.social['facebook'] != "") {
          page.find('.fb').text("Facebook  |") ;
          page.find('.fb').attr('href', item.social['facebook']) ;
          fbTrue = true ;
        }
        if(item.social['instagram'] != "") {
          page.find('.insta').text("Instagram |") ;
          page.find('.insta').attr('href', item.social['instagram']) ;
          instaTrue = true ;
        }
        if(item.social['linkedin'] != "") {
          page.find('.linkedin').text("Linkedin  |") ;
          page.find('.linkedin').attr('href', item.social['linkedin']) ;
          linkTrue = true ;
        }
        if(item.social['twitter'] != "") {
          page.find('.twitter').text("Twitter  |") ;
          page.find('.twitter').attr('href', item.social['twitter']) ;
          twitterTrue = true ;
        }
        if(item.social['other'] != "") {
          page.find('.other').text(item.social['other']) ;
          if(item.social['other'][0] == "h") {
            // console.log("Other is a website!!!") ;
            page.find('.other').attr('href', item.social['other']) ;
          }
        } else {
            if(twitterTrue === true) {
              page.find('.twitter').text("Twitter") ;
            } else if (linkTrue === true) {
              page.find('.linkedin').text("Linkedin") ;
            } else if (instaTrue === true) {
              page.find('.insta').text("Instagram") ;
            } else if(fbTrue === true) {
              page.find('.fb').text("Facebook") ;
            } else if (portTrue === true) {
              page.find('.portfolio').text("Portfolio") ;
            }
        }
        for(var i = 0 ; i < item.aboutme.length ; i++) {
          page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
        }

        if(item.project['website'] != "") {
          page.find('.websiteLink').text("Project Website") ;
          page.find('.websiteLink').attr('href', item.project['website']) ;
          instaTrue = true ;
        }


        page.find('.project-name').text(item.project.title);
        page.find('.project-desc').append(item.project.description[0] + "<br>" + "<br>");
        page.find('.project-desc').append(item.project.description[1] + "<br>" + "<br>");
        // page.find('.project-desc').append('More details: ') ;
        // var newLink = document.createElement('a') ;
        // newLink.setAttribute('class', 'aimeeLink') ;
        // newLink.setAttribute('src', "http://coexistgame.com/")
        // $( ".project-desc" ).append(newLink) ;
        // page.find('.aimeeLink').append("http://coexistgame.com/") ;

        var newVideo = document.createElement('iframe') ;
        newVideo.setAttribute('src', item.project.video[0]) ;
        newVideo.setAttribute('allowFullScreen', 'true')
        $('#theProject').append(newVideo) ;

        var newText = document.createElement('h5');
        newText.setAttribute('class', 'project-desc2') ;
        newText.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText) ;
        page.find('.project-desc2').append("<br>" + item.project.description[2] + "<br>" + "<br>");

        var newImage = document.createElement('img');
        newImage.id = "projectImages" ;
        console.log(newImage.id) ;
        newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[0] );
        newImage.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage) ;

        var newText3 = document.createElement('h5');
        newText3.setAttribute('class', 'project-desc3') ;
        newText3.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText3) ;
        page.find('.project-desc3').append(item.project.description[3] + "<br>");

        var newImage2 = document.createElement('img');
        newImage2.id = "projectImages" ;
        console.log(newImage2.id) ;
        newImage2.setAttribute('src',"project/"+ item.id + "/" + item.project.image[1] );
        newImage2.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage2) ;

        var newText4 = document.createElement('h5');
        newText4.setAttribute('class', 'project-desc4') ;
        newText4.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText4) ;
        page.find('.project-desc4').append(item.project.description[4] + "<br>" + "<br>");
        page.find('.project-desc4').append(item.project.description[5]);

        var newImage3 = document.createElement('img');
        newImage3.id = "projectImages" ;
        newImage3.setAttribute('src',"project/"+ item.id + "/" + item.project.image[2] );
        newImage3.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage3) ;

        var newText5 = document.createElement('h5');
        newText5.setAttribute('class', 'project-desc5') ;
        newText5.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText5) ;
        page.find('.project-desc5').append(item.project.description[6]);

        var newImage4 = document.createElement('img');
        newImage4.id = "projectImages" ;
        newImage4.setAttribute('src',"project/"+ item.id + "/" + item.project.image[3] );
        newImage4.setAttribute('style', "width:50vw; margin-bottom:30px;")
        $( "#theProject" ).append(newImage4) ;

        var newText6 = document.createElement('h5');
        newText6.setAttribute('class', 'project-desc6') ;
        newText6.setAttribute('id', 'project-description') ;
        $("#theProject").append(newText6) ;
        page.find('.project-desc6').append(item.project.description[7]);



        for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
           page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
        }

        for(var i = 0 ; i < item.project['tags'].length ; i++) {
          page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
        }
        page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
        page.find('.studio1').append(item.project['writing-professor-1']) ;
        if(item.project.hasOwnProperty('other-professor-1')) {
          console.log("ran") ;
          page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
        }
        page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
        page.find('.studio2').append(item.project['writing-professor-2']) ;
        if(item.project.hasOwnProperty('other-professor-2')) {
          page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
        }

        container.find('h4').text(item.project.blurb);
        container.find('p').text(item.project.description);
      } else if(item.id == index){
        console.log("this also ran") ;
        // console.log(item.profile-pic);
        // Populate '.popup-detail' with the chosen project's data.
        page.find('.page-name').text(item.name);
        page.find('.page-image').find('img').attr('src',"portraits/"+item['profile-pic']);
        if(item.social['portfolio'] != "") {
          page.find('.portfolio').text("Portflio") ;
          page.find('.portfolio').attr('href', item.social['portfolio']) ;
          page.find('#port1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          portTrue = true ;
        }
        if(item.social['facebook'] != "") {
          page.find('.fb').text("Facebook") ;
          page.find('.fb').attr('href', item.social['facebook']) ;
          page.find('#fb1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          fbTrue = true ;
        }
        if(item.social['instagram'] != "") {
          page.find('.insta').text("Instagram") ;
          page.find('.insta').attr('href', item.social['instagram']) ;
          page.find('#insta1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          instaTrue = true ;
        }
        if(item.social['linkedin'] != "") {
          page.find('.linkedin').text("Linkedin") ;
          page.find('.linkedin').attr('href', item.social['linkedin']) ;
          page.find('#linkedin1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          linkTrue = true ;
        }
        if(item.social['twitter'] != "") {
          page.find('.twitter').text("Twitter") ;
          page.find('.twitter').attr('href', item.social['twitter']) ;
          page.find('#twitter1').append("&nbsp;&nbsp;|&nbsp;&nbsp;") ;
          twitterTrue = true ;
        }
        if(item.social['other'] != "") {
          page.find('.other').text(item.social['other']) ;
          if(item.social['other'][0] == "h") {
            page.find('.other').attr('href', item.social['other']) ;
          }
        } else {
            if(twitterTrue === true) {
              page.find('.twitter').text("Twitter") ;
              page.find('#twitter1').text("") ;
            } else if (linkTrue === true) {
              page.find('.linkedin').text("Linkedin") ;
              page.find('#linkedin1').text("") ;
            } else if (instaTrue === true) {
              page.find('.insta').text("Instagram") ;
              page.find('#insta1').text("") ;
            } else if(fbTrue === true) {
              page.find('.fb').text("Facebook") ;
              page.find('#fb1').text("") ;
            } else if (portTrue === true) {
              page.find('.portfolio').text("Portfolio") ;
              page.find('#port1').text("") ;
            }
        }
        for(var i = 0 ; i < item.aboutme.length ; i++) {
          page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
        }
        page.find('.project-name').text(item.project.title);
        for( var i = 0 ; i < item.project.description.length ; i++) {
          page.find('.project-desc').append(item.project.description[i] + "<br>" + "<br>");
        }
        if(item.project.image[0] != "") {
          for(var i = 0 ; i < item.project.image.length ;i++) {
            var newImage = document.createElement('img');
            newImage.id = "projectImages" ;
            console.log(newImage.id) ;
            newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[i] );
            newImage.setAttribute('style', "width:50vw; margin-bottom:30px;")
            $( "#theProject" ).append(newImage) ;
          }
        }
        if(item.project['website'] != "") {
          page.find('.websiteLink').text("Project Website") ;
          page.find('.websiteLink').attr('href', item.project['website']) ;
          instaTrue = true ;
        }

        if(item.project.hasOwnProperty('video')) {
          for(var i = 0 ; i < item.project.video.length ; i++) {
            var newVideo = document.createElement('iframe') ;
            newVideo.setAttribute('src', item.project.video[i]) ;
            newVideo.setAttribute('allowFullScreen', 'true')
            $('#theProject').append(newVideo) ;
          }
        }
        for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
           page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
        }
       

        for(var i = 0 ; i < item.project['tags'].length ; i++) {
          page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
        }
        page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
        page.find('.studio1').append(item.project['writing-professor-1']) ;
        if(item.project.hasOwnProperty('other-professor-1')) {
          console.log("ran") ;
          page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
        }
        page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
        page.find('.studio2').append(item.project['writing-professor-2']) ;
        if(item.project.hasOwnProperty('other-professor-2')) {
          page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
        }

        container.find('h4').text(item.project.blurb);
        container.find('p').text(item.project.description);
      }
    });
  }

  // Show the page.
  page.addClass('visible');

}
