const footer = document.querySelector("footer");

footer.innerHTML = `
<div class="footer-inner">
<div class="footer-col-1">
  <h2 class="footer-h2">Обзоры популярных направлений</h2>

  <ul class="footer-ul">
    <li class="footer-li">
      <a href="./" class="footer-link">
      Наши сервисы
      </a>
    </li>

    <li class="footer-li">
      <a href="./tours" class="footer-link">
        Поиск туров
      </a>
    </li>

    <li class="footer-li">
      <a target="_blank" href="https://myrentacar.com/en/?r=2869&utm_source=travelpayouts&trace_id=060fe6e37e8245249f588e804-290725" class="footer-link">
        Арендовать машину
      </a>
    </li>

    <li class="footer-li">
      <a target="_blank" href="https://poezd.ru/?utm_source=travelpayouts&utm_medium=cpa&utm_campaign=e9aa94411d8d490184fe37e21-290725&referal_url=mail.google.com" class="footer-link">
      Поиск билетов на поезд
      </a>
    </li>
    
    <li class="footer-li">
      <a target="_blank" href="https://b2b.aviasales.ru/?utm_source=travelpayouts&sub_id=5ba30469a5774d858212654fc-290725" class="footer-link">
      Авиабилеты для бизнеса
      </a>
    </li>
  </ul>
</div>

<div class="footer-col-2">
  <h2 class="footer-h2">Y-Flights.com &copy; 2020</h2>

  <div class="footer-align-container">
    <h3 class="footer-h4">
      Поиск дешевых авиабилетов и отелей, бронирование туров онлайн
    </h3>
  </div>

  <p class="footer-col-2-p">
    При копировании материалов прямая ссылка обязательна.
  </p>

  <div class="social-media-container">
    <ul class="social-media-ul">
      <li class="social-media-li">
        <a
          target="_blank"
          href="https://vk.com/y.flights"
          class="social-media-a"
        >
          <img
            src="./assets/social media icons/vk.svg"
            alt="Vkontakte"
            class="social-media-icon"
          />
        </a>
      </li>
      <li class="social-media-li">
        <a
          target="_blank"
          href="https://twitter.com/y_flights"
          class="social-media-a"
        >
          <img
            src="./assets/social media icons/twitter.svg"
            alt="twitter"
            class="social-media-icon"
          />
        </a>
      </li>
      <li class="social-media-li">
        <a
          target="_blank"
          href="https://t.me/yflights"
          class="social-media-a"
        >
          <img
            src="./assets/social media icons/telegram.svg"
            alt="telegram"
            class="social-media-icon"
          />
        </a>
      </li>
      <li class="social-media-li">
        <a
          target="_blank"
          href="https://facebook.com/y.flights"
          class="social-media-a"
        >
          <img
            src="./assets/social media icons/facebook.svg"
            alt="facebook"
            class="social-media-icon"
          />
        </a>
      </li>
    </ul>
  </div>
  <div class="footer-col-2-last-div">
    <a href="./sitemap" class="link-h5 link-spacer">Карта сайта</a>
    <a href="./personal-data" class="link-h5 link-spacer">
      Политика конфиденциальности
    </a>
    <a href="./terms-of-use" class="link-h5 link-spacer">
      Правила пользования
    </a>
  </div>
</div>

<div class="footer-col-3"></div>
</div>

`;
