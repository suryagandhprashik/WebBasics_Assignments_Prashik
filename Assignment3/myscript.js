const navBar = document.createElement('div');
  navBar.style.backgroundColor = 'black';
  navBar.style.overflow = 'hidden';

  const home = document.createElement('a');
  home.href = '#';
  home.textContent = 'Home';
  applyLinkStyles(home);

  const about = document.createElement('a');
  about.href = '#';
  about.textContent = 'About';
  applyLinkStyles(about);

  const contact = document.createElement('a');
  contact.href = '#';
  contact.textContent = 'Contact';
  applyLinkStyles(contact);

  function applyLinkStyles(link) {
    link.style.float = 'left';
    link.style.display = 'block';
    link.style.color = 'white';
    link.style.textAlign = 'center';
    link.style.padding = '14px 16px';
    link.style.textDecoration = 'none';
  }

  navBar.appendChild(home);
  navBar.appendChild(about);
  navBar.appendChild(contact);

  document.body.insertBefore(navBar, document.body.firstChild);