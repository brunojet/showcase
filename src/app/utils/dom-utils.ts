import { customAssert } from './custom-assert';

/**
 * DomUtils é uma classe utilitária que contém métodos para manipulação de elementos DOM.
 */
export class DomUtils {
  /**
   * Ajusta a largura de um elemento para corresponder à largura do seu elemento pai.
   * Se um seletor de pai for fornecido, ele será usado para encontrar o elemento pai.
   * Caso contrário, o elemento pai direto será usado.
   *
   * @param element - O elemento cuja largura será ajustada.
   * @param parentSelector - (Opcional) O seletor do elemento pai.
   */
  static syncWithParentWidth(element: HTMLElement, parentSelector?: string): void {
    // Assert que o elemento não é nulo
    customAssert(element, 'Element cannot be null or undefined.');

    const parent = parentSelector
      ? element.closest(parentSelector)
      : element.parentElement;

    // Assert que o elemento pai não é nulo
    customAssert(parent, `Parent element not found for selector: ${parentSelector || 'parentElement'}`);

    console.log(`Parent dimensions: width=${parent.clientWidth}, height=${parent.clientHeight}`);
    if (parent instanceof HTMLElement) {
      console.log(`Parent offsetWidth: ${parent.offsetWidth}, scrollWidth: ${parent.scrollWidth}`);
    }
    console.log(`Element dimensions: width=${element.clientWidth}, height=${element.clientHeight}`);
    console.log(`Parent offsetWidth: ${element.offsetWidth}, scrollWidth: ${element.scrollWidth}`);


    element.style.width = `${parent.clientWidth}px`;

    console.log(`After Element dimensions: width=${element.clientWidth}, height=${element.clientHeight}`);
    console.log(`After Parent offsetWidth: ${element.offsetWidth}, scrollWidth: ${element.scrollWidth}`);

  }
}