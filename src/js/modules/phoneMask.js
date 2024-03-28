export function initPhoneMask() {
  const inputs = document.querySelectorAll('.input-phone-mask');

  inputs.forEach(input => {
    const maskOptions = {
      mask: '+{7}(000)000-00-00',
      overwrite: true,
      lazy: false,
      autofix: true
    }

    const mask = new IMask(input, maskOptions);
  })
}
