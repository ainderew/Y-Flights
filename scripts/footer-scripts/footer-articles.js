const footer = document.querySelector("footer");

footer.innerHTML = `
<div class="footer-inner">
<div class="footer-col-1">
  <h2 class="footer-h2">Обзоры популярных направлений</h2>

  <ul class="footer-ul">
    <li class="footer-li">
      <a href="../blogs/Phuket" class="footer-link">Отдых на Пхукете</a>
    </li>

    <li class="footer-li">
      <a href="../blogs/Thailand" class="footer-link">
        Таиланд, как добраться, где отдохнуть
      </a>
    </li>

    <li class="footer-li">
      <a href="../blogs/Bangkok" class="footer-link">
        Столица Таиланда – Бангкок
      </a>
    </li>

    <li class="footer-li">
      <a href="../blogs/flightticket" class="footer-link">
        Поиск авиабилетов, отелей и туров – почему мы
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
            src="../assets/social media icons/vk.svg"
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
            src="../assets/social media icons/twitter.svg"
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
            src="../assets/social media icons/telegram.svg"
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
            src="../assets/social media icons/facebook.svg"
            alt="facebook"
            class="social-media-icon"
          />
        </a>
      </li>
    </ul>
  </div>
  <div class="footer-col-2-last-div">
    <a href="../sitemap" class="link-h5 link-spacer">Карта сайта</a>
    <a href="../personal-data" class="link-h5 link-spacer">
      Политика конфиденциальности
    </a>
    <a href="../terms-of-use" class="link-h5 link-spacer">
      Правила пользования
    </a>
  </div>
</div>

<div class="footer-col-3"></div>
</div>

`;
