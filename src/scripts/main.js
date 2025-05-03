'use strict';

const headerTitles = document.querySelector('thead');

headerTitles.addEventListener('click', (e) => {
  const param = e.target.textContent;
  const rows = [...document.querySelectorAll('tbody tr')];

  rows.sort((r1, r2) => {
    switch (param) {
      case 'Name':
        return r1.children[0].textContent.localeCompare(
          r2.children[0].textContent,
        );
      case 'Position':
        return r1.children[1].textContent.localeCompare(
          r2.children[1].textContent,
        );
      case 'Age':
        const age1 = +r1.children[2].textContent;
        const age2 = +r2.children[2].textContent;

        return age1 - age2;

      case 'Salary':
        const sal1 = +r1.children[3].textContent
          .replace('$', '')
          .replace(',', '');
        const sal2 = +r2.children[3].textContent
          .replace('$', '')
          .replace(',', '');

        return sal1 - sal2;
    }
  });

  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.append(row));
});
