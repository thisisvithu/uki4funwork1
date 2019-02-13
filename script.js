SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {

  SC.stream('/tracks/354663899', function(sound) {

    $('#start').click(function(e) {

      e.preventDefault();

      sound.start();

    });
      $('#stop').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/362416091', function(sound) {

    $('#start1').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop1').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/19492919', function(sound) {

    $('#start2').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop2').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/15367086', function(sound) {

    $('#start3').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop3').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/75141510', function(sound) {

    $('#start4').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop4').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/155818035', function(sound) {

    $('#start5').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop5').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/107780850', function(sound) {

    $('#start6').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop6').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/557856666', function(sound) {

    $('#start7').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop7').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/168179704', function(sound) {

    $('#start8').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop8').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/242542934', function(sound) {

    $('#start9').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop9').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/225519099', function(sound) {

    $('#start10').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop10').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

  SC.stream('/tracks/270905820', function(sound) {

    $('#start11').click(function(e) {

      e.preventDefault();

      sound.start();

    });

    $('#stop11').click(function(e) {

      e.preventDefault();

      sound.stop();

    });

  });

});
