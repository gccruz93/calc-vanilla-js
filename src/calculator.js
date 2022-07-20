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

  /**
   *
   * @param {String} id document.getElementById(id)
   */
  constructor(id) {
    if ((this.$main = document.getElementById(id))) this.mount();
    else console.error(`Element id '${id}' doesn't exist.`);
  }

  mount() {
    this.$main.innerHTML = '';

    this.mountResult();
    this.mountInput();
    this.mountGrid();

    this.$input.value = '0';
  }

  mountResult() {
    this.$result = document.createElement('p');
    this.$result.setAttribute('id', 'result');
    this.$main.appendChild(this.$result);
  }

  mountInput() {
    this.$input = document.createElement('input');
    this.$input.setAttribute('id', 'input');
    this.$input.setAttribute('disabled', true);
    this.$main.appendChild(this.$input);
  }

  mountGrid() {
    this.$grid = document.createElement('div');
    this.$grid.setAttribute('id', 'grid');
    this.$main.appendChild(this.$grid);

    this.mountButton('%', 'action', 'calcPercentage');
    this.mountButton('CE', 'action', 'CE');
    this.mountButton('C', 'action', 'C');
    this.mountButton('«', 'action', 'fix');

    this.mountButton('1/x', 'action', 'oneDivX');
    this.mountButton('x²', 'action', 'square');
    this.mountButton('Vx²', 'action', 'squareRoot');
    this.mountButton('÷', 'action', 'divide');

    this.mountButton('7', '', 'appendInput', '7');
    this.mountButton('8', '', 'appendInput', '8');
    this.mountButton('9', '', 'appendInput', '9');
    this.mountButton('×', 'action', 'multiply');

    this.mountButton('4', '', 'appendInput', '4');
    this.mountButton('5', '', 'appendInput', '5');
    this.mountButton('6', '', 'appendInput', '6');
    this.mountButton('-', 'action', 'subtract');

    this.mountButton('1', '', 'appendInput', '1');
    this.mountButton('2', '', 'appendInput', '2');
    this.mountButton('3', '', 'appendInput', '3');
    this.mountButton('+', 'action', 'sum');

    this.mountButton('+/-', '', 'invert');
    this.mountButton('0', '', 'appendInput', '0');
    this.mountButton('.', '', 'dot');
    this.mountButton('=', 'action2', 'result');
  }

  /**
   * @param {String} title
   * @param {String} type 'action', 'action2', ''
   * @param {String} functionName
   * @param {String} functionValue
   */
  mountButton(title, type, functionName, functionValue = null) {
    const el = document.createElement('div');

    el.classList.add('grid-item');
    if (type) el.classList.add(type);

    const ctx = this;
    if (functionValue) {
      el.onclick = () => ctx.functions[functionName](functionValue);
    } else {
      el.onclick = () => ctx.functions[functionName]();
    }

    el.appendChild(document.createTextNode(title));

    this.$grid.appendChild(el);
  }

  functions = {
    /**
     *
     * @param {String} str
     */
    setInput(str) {
      window.calc.$input.value = str;
    },
    /**
     *
     * @returns {String}
     */
    getInput() {
      return window.calc.$input.value;
    },
    clearInput() {
      window.calc.functions.setInput('0');
    },
    /**
     *
     * @param {String} str
     */
    appendInput(str) {
      if (window.calc.functions.getInput().length >= 14) return;
      if (window.calc.functions.getInput() == '0') {
        if (str == '0') return;
        window.calc.functions.setInput(str);
      } else {
        window.calc.$input.value += str;
      }
    },
    popInput() {
      if (!window.calc.functions.getInput())
        window.calc.functions.setInput('0');
      window.calc.functions.setInput(window.calc.$input.value.slice(0, -1));
      if (!window.calc.functions.getInput())
        window.calc.functions.setInput('0');
    },
    /**
     *
     * @param {String} str
     */
    setResult(str) {
      window.calc.$result.innerHTML = str;
    },
    clearResult() {
      window.calc.functions.setResult('');
    },

    calcPercentage() {
      console.log('calcPercentage');
    },
    CE() {
      window.calc.functions.clearInput();
      window.calc.functions.clearResult();
    },
    C() {
      window.calc.functions.clearInput();
      window.calc.functions.clearResult();
    },
    fix() {
      window.calc.functions.popInput();
    },
    oneDivX() {
      console.log('oneDivX');
    },
    square() {
      console.log('square');
    },
    squareRoot() {
      console.log('squareRoot');
    },
    divide() {
      console.log('divide');
    },
    multiply() {
      console.log('multiply');
    },
    subtract() {
      console.log('subtract');
    },
    sum() {
      console.log('sum');
    },
    invert() {
      console.log('invert');
    },
    dot() {
      console.log('dot');
    },
    result() {
      console.log('result');
    },
  };
}
