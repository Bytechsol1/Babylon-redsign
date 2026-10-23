(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileNav.hidden = true;
  };
  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !opening;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  const desktopQuery = window.matchMedia('(min-width: 901px)');
  desktopQuery.addEventListener('change', event => { if (event.matches) closeMenu(); });

  const disciplines = [...document.querySelectorAll('.discipline')];
  disciplines.forEach(item => item.addEventListener('toggle', () => {
    if (!item.open) return;
    disciplines.forEach(other => { if (other !== item) other.open = false; });
    document.querySelector('.molecule').dataset.material = item.dataset.material;
    document.getElementById('study-number').textContent = `${item.dataset.number} / 04`;
    const caption = document.getElementById('study-caption');
    caption.replaceChildren();
    item.dataset.caption.split('|').forEach((line, index) => {
      if (index) caption.append(document.createElement('br'));
      caption.append(document.createTextNode(line));
    });
  }));

  const sectors = {
    skincare: { formats: 'Hydrosols. Serums. Micro-emulsions.\nBarrier creams. Oil cleansers.', texture: 'Light fluid mists to rich barrier creams.', packaging: 'Glass droppers, airless dispensers, aluminum tubes.' },
    haircare: { formats: 'Clarifying cleansers. Bond repair masques.\nScalp exfoliating tonics.', texture: 'Clarifying liquids to intensive rich masques.', packaging: 'High-output pumps, squeeze tottles, wide-mouth HDPE jars.' },
    bodycare: { formats: 'AHA/BHA washes. Whipped lipid butters.\nFirming peptide lotions.', texture: 'Silky hydrating fluids to dense whipped balms.', packaging: 'PCR rPET bottles, disc-top closures, metal containers.' },
    suncare: { formats: 'Mineral dispersions.\nSheer daily sun care fluids.', texture: 'Ultra-sheer shake-well fluids to cushion lotions.', packaging: 'UV-inhibiting opaque bottles, precision nozzle tubes.' }
  };
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const selectTab = tab => {
    tabs.forEach(item => { item.setAttribute('aria-selected', String(item === tab)); item.tabIndex = item === tab ? 0 : -1; });
    const sector = sectors[tab.dataset.sector];
    document.getElementById('sector-panel').setAttribute('aria-labelledby', tab.id);
    document.querySelector('.sector-formats').textContent = sector.formats;
    document.getElementById('sector-texture').textContent = sector.texture;
    document.getElementById('sector-packaging').textContent = sector.packaging;
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); selectTab(tabs[next]); tabs[next].focus();
    });
  });

  const dialog = document.getElementById('brief-dialog');
  document.querySelector('[data-open-brief]').addEventListener('click', () => {
    dialog.showModal(); document.body.classList.add('modal-open');
  });
  document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  let downloadURL;
  document.getElementById('brief-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Hello Babylon team,\n\nI'd like to discuss a project.\n\nName: ${data.get('name').trim()}\nBrand / company: ${data.get('company').trim()}\nProject stage: ${data.get('stage')}\n\nMy idea:\n${data.get('idea').trim()}\n\nPlease let me know the next steps for a technical consultation.\n`;
    const mailto = `mailto:technical@babylonllc.com?subject=${encodeURIComponent(`Project brief — ${data.get('company').trim()}`)}&body=${encodeURIComponent(body)}`;
    if (downloadURL) URL.revokeObjectURL(downloadURL);
    downloadURL = URL.createObjectURL(new Blob([body], {type: 'text/plain;charset=utf-8'}));
    const download = document.getElementById('download-brief');
    download.href = downloadURL; download.hidden = false;
    document.querySelector('.form-status').textContent = 'Your brief is ready. Review and send it in your email app. If your app did not open, download the brief below and email it to our team.';
    window.location.href = mailto;
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
