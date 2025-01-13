import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-container max-width">
        <div class="left-container">
          <div>
            <p><b>PRODUITS</b></p>
            <a routerLink="/products/electronics">Electronique</a>
            <a routerLink="/products/jewerly">Bijoux</a>
            <a routerLink="/products/men's clothing">Habits homme</a>
            <a routerLink="/products/women's clothing">Habits femme</a>
          </div>
          <div>
            <p><b>LIENS</b></p>
            <a href="" target="blank">Tutoriel Youtube</a>
            <a href="" target="blank">Code GitHub</a>
            <a href="" target="blank">Malakisi</a>
          </div>
        </div>
        <p>
          <b>ngDuka {{ date.getFullYear() }} </b> <br />
          Developpé par DRC Mind
        </p>
      </div>
    </footer>
  `,

  styles: `
  footer{
    background: #e4e4e4;
  }

  .footer-container{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 2rem;
    flex-wrap: wrap;

    .left-container{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    a{
      display: block;
      margin: 0.5rem 0
    }
    }
  }

  
  `,
})
export class FooterComponent {
  date = new Date();
}
