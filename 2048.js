document.addEventListener('keydown', logKey);
    function logKey(e) {
      if (`${e.code}` == "ArrowRight") {
        //code here
        alert("Right Arrow was pressed");
      }
          if (`${e.code}` == "ArrowLeft") {
        //code here
        alert("Left Arrow was pressed");
      }
          if (`${e.code}` == "ArrowDown") {
        //code here
        alert("Down Arrow was pressed");

      }
          if (`${e.code}` == "ArrowUp") {
        //code here
        alert("Up Arrow was pressed");

      }
    }
