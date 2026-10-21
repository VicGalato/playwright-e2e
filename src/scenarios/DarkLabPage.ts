import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import DarkLabPage from '../support/pages/DarkLabPage';

test.describe('Testes do site Dark Lab', () => {
  const CONFIG = join(
    __dirname,
    '../support/fixtures/config.yml'
  );

  let darkLabPage: DarkLabPage;

  const BASE_URL = TheConfig
    .fromFile(CONFIG)
    .andPath('application.darklab_QA')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    darkLabPage = new DarkLabPage(page);
    await page.goto(BASE_URL);
  });

  test('Acessar categoria de Creatina', async () => {
    await darkLabPage.acessarCategoriaCreatina();
    await darkLabPage.validarPaginaCreatina();
  });

  test('Acessar produto Creatina 500g', async () => {
    await darkLabPage.acessarCategoriaCreatina();
    await darkLabPage.acessarProdutoCreatina500g();
    await darkLabPage.validarProdutoCreatina500g();
  });

  test('Validar preço do produto', async () => {
    await darkLabPage.acessarCategoriaCreatina();
    await darkLabPage.acessarProdutoCreatina500g();
    await darkLabPage.validarPrecoProduto();
  });

  test('Validar produto esgotado', async () => {
    await darkLabPage.acessarCategoriaCreatina();
    await darkLabPage.validarProdutoEsgotado();
  });

  test('Validar carrinho vazio', async () => {
    await darkLabPage.validarCarrinhoVazio();
  });
});