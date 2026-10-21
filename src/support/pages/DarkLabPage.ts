import { Page, expect } from '@playwright/test';
import DarkLabElements from '../elements/DarkLabElements';
import BasePage from './BasePage';

export default class DarkLabPage extends BasePage {
  readonly darkLabElements: DarkLabElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.darkLabElements = new DarkLabElements(page);
  }

  async acessarCategoriaCreatina(): Promise<void> {
    await this.darkLabElements
      .getCategoriaCreatina()
      .click();
  }

  async validarPaginaCreatina(): Promise<void> {
    await expect(
      this.darkLabElements.getTituloCreatina()
    ).toBeVisible();
  }

  async acessarProdutoCreatina500g(): Promise<void> {
    await this.darkLabElements
      .getProdutoCreatina500g()
      .click();
  }

  async validarProdutoCreatina500g(): Promise<void> {
    await expect(
      this.darkLabElements
        .getTituloProdutoCreatina500g()
    ).toBeVisible();
  }

  async validarPrecoProduto(): Promise<void> {
    await expect(
      this.darkLabElements.getPrecoPix()
    ).toBeVisible();
  }

  async validarProdutoEsgotado(): Promise<void> {
    await expect(
      this.darkLabElements.getProdutoEsgotado()
    ).toBeVisible();
  }

  async validarCarrinhoVazio(): Promise<void> {
    await this.page.goto(
      'https://darklabsuplementos.com.br/cart'
    );

    await expect(
      this.darkLabElements.getCarrinhoVazio()
    ).toBeVisible();
  }
}