'use strict';
(function () {
  var hands = [
    'high card',
    'one pair',
    'two pair',
    'three of a kind',
    'straight',
    'flush',
    'full house',
    'four of a kind',
    'straight flush',
    'royal flush'
  ];

  var nRight = 0;
  var nWrong = 0;

  window.onload = function () {
    // initialize DOM
    var dom = {
      hand1: document.getElementById('hand1'),
      hand2: document.getElementById('hand2'),
      nRight: document.getElementById('right'),
      nWrong: document.getElementById('wrong')
    };

    update(dom);
  };

  function update(dom) {
    // select two random hands
    var i = parseInt(Math.random() * 100) % hands.length;

    // make sure `j` doesn't equal `i`
    var j;
    do {
      j = parseInt(Math.random() * 100) % hands.length;
    } while (j == i);

    dom.hand1.onclick = function () {
      i > j ? ++nRight : ++nWrong;
      window.onload();
    };
    dom.hand2.onclick = function () {
      j > i ? ++nRight : ++nWrong;
      window.onload();
    };

    // update DOM
    dom.hand1.innerHTML = hands[i];
    dom.hand2.innerHTML = hands[j];
    dom.nRight.innerHTML = nRight;
    dom.nWrong.innerHTML = nWrong;
  }
})();
