document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const modal = document.querySelector('.menu-modal');
  const header = document.querySelector('.dynamic-header');
  let lastScrollTop = 0;
  let isModalOpen = false;

  const toggleMenu = () => {
    if (!menuIcon.classList.contains('open')) {
      menuIcon.classList.add('open');
      modal.style.display = 'flex'; // モーダルを表示
      header.classList.add('visible'); // ヘッダーを常に表示
      header.classList.remove('hidden');
      isModalOpen = true;
    } else {
      menuIcon.classList.remove('open');
      modal.style.display = 'none'; // モーダルを非表示
      isModalOpen = false;
    }
  };

  menuIcon.addEventListener('click', toggleMenu);

  // スクロールでヘッダーの表示・非表示を制御（モーダルが開いている場合は無効化）
  window.addEventListener('scroll', () => {
    if (isModalOpen) return; // モーダルが開いている場合は処理を無効化
    let currentScroll = window.scrollY;
    if (currentScroll > lastScrollTop) {
      header.classList.add('hidden'); // 下にスクロール中はヘッダーを隠す
      header.classList.remove('visible');
    } else {
      header.classList.add('visible'); // 上にスクロール中はヘッダーを表示
      header.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // スクロール位置を更新
  });

  // 画面リサイズ時に1140px以上の場合は≡アイコンとモーダルを非表示
  const handleResize = () => {
    if (window.innerWidth >= 1140) {
      menuIcon.style.display = 'none';
      modal.style.display = 'none'; // モーダルを常に非表示
      menuIcon.classList.remove('open');
      isModalOpen = false;
    } else {
      menuIcon.style.display = 'flex';
      if (isModalOpen) {
        modal.style.display = 'flex'; // モーダルを再表示
      }
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // 初期ロード時にも実行
});
