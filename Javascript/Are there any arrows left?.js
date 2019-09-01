// https://www.codewars.com/kata/are-there-any-arrows-left/train/javascript

function anyArrows(arrows){
    // arrow it
    return arrows.some( e => !e.damaged );
  }