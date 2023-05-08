/**
 * change mode
 * Change content mode
 */
export function changeMode(context, value)
{
  let mode = null;
  switch (value)
  {
    case 'thumbnail':
    case 'preference':
      mode = value;
      break;
  }
  context.commit('changeMode', mode);
}

/**
 * update preference
 */
export function updatePreference(context, newValue)
{
  // TODO
}

export function foo(context)
{
  console.log('call foo()');
}
