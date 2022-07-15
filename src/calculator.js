class Calculator {
  /**
   * @type HTMLDivElement
   */
  $main;
  /**
   * @type HTMLParagraphElement
   */
  $result;
  /**
   * @type HTMLInputElement
   */
  $input;
  /**
   * @type HTMLDivElement
   */
  $grid;

  constructor(el) {
    if ((this.$main = document.getElementById(el))) this.mount();
    else console.error(`Element id '${el}' doesn't exist.`);
  }

  mount() {
    this.$main.innerHTML = '';

    this.mountResult();
    this.mountInput();
    this.mountGrid();

    this.$input.value = '3+6';
    this.$result.innerHTML = '9';
  }

  mountResult() {
    this.$result = document.createElement('p');
    this.$result.setAttribute('id', 'result');
    this.$main.appendChild(this.$result);
  }

  mountInput() {
    this.$input = document.createElement('input');
    this.$input.setAttribute('id', 'input');
    this.$main.appendChild(this.$input);
  }

  mountGrid() {
    this.$grid = document.createElement('div');
    this.$grid.setAttribute('id', 'grid');
    this.$main.appendChild(this.$grid);

    this.$grid.appendChild(this.btnCalcPercentage());
    this.$grid.appendChild(this.btnCE());
    this.$grid.appendChild(this.btnC());
    this.$grid.appendChild(this.btnFix());

    this.$grid.appendChild(this.btnOneDivX());
    this.$grid.appendChild(this.btnSquare());
    this.$grid.appendChild(this.btnSquareRoot());
    this.$grid.appendChild(this.btnDivision());

    this.$grid.appendChild(this.btn7());
    this.$grid.appendChild(this.btn8());
    this.$grid.appendChild(this.btn9());
    this.$grid.appendChild(this.btnMultiply());

    this.$grid.appendChild(this.btn4());
    this.$grid.appendChild(this.btn5());
    this.$grid.appendChild(this.btn6());
    this.$grid.appendChild(this.btnMinus());

    this.$grid.appendChild(this.btn1());
    this.$grid.appendChild(this.btn2());
    this.$grid.appendChild(this.btn3());
    this.$grid.appendChild(this.btnPlus());

    this.$grid.appendChild(this.btnInverse());
    this.$grid.appendChild(this.btn0());
    this.$grid.appendChild(this.btnDot());
    this.$grid.appendChild(this.btnEquals());
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnCalcPercentage() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('%')).addEventListener(
      'click',
      this.actionCalcPercentage
    );

    return el;
  }
  actionCalcPercentage() {
    console.log('actionCalcPercentage');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnCE() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('CE')).addEventListener('click', this.actionCE);

    return el;
  }
  actionCE() {
    console.log('actionCE');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnC() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('C')).addEventListener('click', this.actionC);

    return el;
  }
  actionC() {
    console.log('actionC');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnFix() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('<-')).addEventListener('click', this.actionFix);

    return el;
  }
  actionFix() {
    console.log('actionFix');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnOneDivX() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('1/x')).addEventListener('click', this.actionOneDivX);

    return el;
  }
  actionOneDivX() {
    console.log('actionOneDivX');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnSquare() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('x²')).addEventListener('click', this.actionSquare);

    return el;
  }
  actionSquare() {
    console.log('actionSquare');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnSquareRoot() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('Vx²')).addEventListener('click', this.actionSquareRoot);

    return el;
  }
  actionSquareRoot() {
    console.log('actionSquareRoot');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnDivision() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('/')).addEventListener('click', this.actionDivision);

    return el;
  }
  actionDivision() {
    console.log('actionDivision');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn7() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('7')).addEventListener('click', this.action7);

    return el;
  }
  action7() {
    console.log('action7');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn8() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('8')).addEventListener('click', this.action8);

    return el;
  }
  action8() {
    console.log('action8');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn9() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('9')).addEventListener('click', this.action9);

    return el;
  }
  action9() {
    console.log('action9');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnMultiply() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('X')).addEventListener('click', this.actionMultiply);

    return el;
  }
  actionMultiply() {
    console.log('actionMultiply');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn4() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('4')).addEventListener('click', this.action4);

    return el;
  }
  action4() {
    console.log('action4');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn5() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('5')).addEventListener('click', this.action5);

    return el;
  }
  action5() {
    console.log('action5');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn6() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('6')).addEventListener('click', this.action6);

    return el;
  }
  action6() {
    console.log('action6');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnMinus() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('-')).addEventListener('click', this.actionMinus);

    return el;
  }
  actionMinus() {
    console.log('actionMinus');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn1() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('1')).addEventListener('click', this.action1);

    return el;
  }
  action1() {
    console.log('action1');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn2() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('2')).addEventListener('click', this.action2);

    return el;
  }
  action2() {
    console.log('action2');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn3() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('3')).addEventListener('click', this.action3);

    return el;
  }
  action3() {
    console.log('action3');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnPlus() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action');
    el.appendChild(document.createTextNode('+')).addEventListener('click', this.actionPlus);

    return el;
  }
  actionPlus() {
    console.log('actionPlus');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnInverse() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('+/-')).addEventListener('click', this.actionInverse);

    return el;
  }
  actionInverse() {
    console.log('actionInverse');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btn0() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('0')).addEventListener('click', this.action0);

    return el;
  }
  action0() {
    console.log('action0');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnDot() {
    const el = document.createElement('div');
    el.classList.add('grid-item');
    el.appendChild(document.createTextNode('.')).addEventListener('click', this.actionDot);

    return el;
  }
  actionDot() {
    console.log('actionDot');
  }

  /**
   *
   * @returns {HTMLDivElement}
   */
  btnEquals() {
    const el = document.createElement('div');
    el.classList.add('grid-item', 'action2');
    el.appendChild(document.createTextNode('=')).addEventListener('click', this.actionEquals);

    return el;
  }
  actionEquals() {
    console.log('actionEquals');
  }
}
