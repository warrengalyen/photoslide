/**
 * shuffle
 *
 * @param {HTMLElement} $el
 * @param {Object} options
 * @return {void}
 */
function shuffle($el, options)
{
  // merge options
  options = Object.assign({}, {
    text: '', // text displayed at the end
    waitChar: '-', // Text displayed before change
    charSpeed: 1, // The number of characters that change at one time
    moveFix: 25, // delay time when text changes
    moveRange: 10, // time related when letters are randomly changing
    moveTrigger: 25, // time related when letters are randomly changing
    fps: 60, // speed
    pattern: 'abcdefghijklmnopqrstuvwxyz0123456789-_!@#$%^&*()+~<>', // random text pattern
    randomTextType: null, // unicode,pattern
    retry: true, // Each time the function runs, the text is created anew.
    callback: null, // function to be executed after animation
  }, options);
  options.text = options.text.trim();

  // set values
  let textKeys = [];
  let frame;
  let position;
  let currentText;
  let checkLast;
  let checkPlay = false;

  /**
   * stack
   */
  function stack()
  {
    let str = currentText;
    checkLast = true;

    for (let tick = position; tick <= frame; tick++)
    {
      if (0 !== textKeys[tick] && null != textKeys[tick])
      {
        checkLast = false;
        const selectKey = textKeys[tick];
        if (Math.abs(selectKey) <= options.moveTrigger)
        {
          let txt = '';
          switch(options.randomTextType)
          {
            case 'pattern':
              txt = randomWord(options.pattern);
              break;
            case 'unicode':
            default:
              const unicode = Math.min(Math.max(options.text.charCodeAt(tick) + selectKey, 33), 126);
              txt = String.fromCharCode(unicode);
              break;
          }
          str += txt;
        }
        else
        {
          str += options.waitChar;
        }
        selectKey > 0 ? textKeys[tick] -= 1 : textKeys[tick] += 1;
      }
      else
      {
        if (position === tick - 1)
        {
          position = tick;
          currentText = options.text.substring(0, position);
        }
        str += options.text.charAt(tick);
      }
      $el.textContent = str;
    }

    if (frame <= options.text.length)
    {
      frame += options.charSpeed;
    }
    else
    {
      checkPlay = true;
    }

    // last stack
    if (checkLast && checkPlay)
    {
      if ($el.dataset.id) clearInterval(parseInt($el.dataset.id));
      $el.textContent = currentText;
      $el.dataset.run = 'false';
      if (options.callback) options.callback();
    }
  }

  /**
   * get random word
   * get a random character
   *
   * @param {string} pattern
   * @return {string}
   */
  function randomWord(pattern)
  {
    const n = Math.floor(Math.random() * pattern.length);
    return pattern.substring(n, n + 1);
  }

  // play
  if (options.text || (options.text && !options.retry && $el.dataset.run !== 'true'))
  {
    $el.dataset.run = 'true';
    $el.textContent = options.waitChar;

    // set values
    for (let i=0; i<=options.text.length-1; i++)
    {
      if (' ' !== options.text.charAt(0))
      {
        textKeys[i] = (options.moveFix + Math.round(Math.random() * options.moveRange)) * (Math.round(Math.random()) - .5) * 2;
      }
      else
      {
        textKeys[i] = 0;
      }
    }

    // reset values
    frame = 0;
    position = 0;
    currentText = '';

    // set interval
    if ($el.dataset.id) clearInterval(parseInt($el.dataset.id));
    const intervalId = setInterval(stack, 1e3 / options.fps);
    $el.dataset.id = intervalId.toString();
  }
}

export default shuffle;
