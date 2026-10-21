import { Page } from '@playwright/test';

export default class DarkLabElements {
  constructor(readonly page: Page) {}

  getCategoriaCreatina() {
    return this.page
      .getByRole('link', { name: 'Creatina', exact: true })
      .first();
  }

  getTituloCreatina() {
    return this.page.getByRole('heading', {
      name: 'Creatina Dark Lab'
    });
  }

  getProdutoCreatina500g() {
    return this.page
      .getByRole('link', {
        name: 'Creatina 500g Dark Lab | Aprovado pela Anvisa'
      })
      .first();
  }

  getTituloProdutoCreatina500g() {
    return this.page.getByRole('heading', {
      name: 'Creatina 500g Dark Lab | Aprovado pela Anvisa',
      level: 1
    });
  }

  getPrecoPix() {
    return this.page
      .getByText(/R\$ .* no Pix/i)
      .first();
  }

  getProdutoEsgotado() {
    return this.page
      .getByText('Esgotado')
      .first();
  }

  getCarrinhoVazio() {
    return this.page.getByText(
      'Seu carrinho esta vazio'
    );
  }
}