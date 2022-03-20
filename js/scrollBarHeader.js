window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("myBar").style.width = ((winScroll / height) * 100) + "%";
  };
  