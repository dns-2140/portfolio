function toggleMobileMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  console.log('click', menu.classList);
}

const feForm = document.forms[0];
const feList = document.querySelector('#feList');
const beList = document.querySelector('#beList');

const startVal = document.querySelector('#start').value;
const endVal = document.querySelector('#end').value;
const jobList = document.querySelector('.jobs');
console.log(jobList);

console.log(feList);
feForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const valFe = document.querySelector('#fe').value;
  const valBe = document.querySelector('#be').value;
  const companyVal = document.querySelector('#company').value;
  const startVal = document.querySelector('#start').value;
  const endVal = document.querySelector('#end').value;
  if (valFe) {
    feList.insertAdjacentHTML('beforeend', `<li>${valFe}</li>`);
  }

  if (valBe) {
    beList.insertAdjacentHTML('beforeend', `<li>${valBe}</li>`);
  }
  if (startVal && endVal && companyVal) {
    jobList.insertAdjacentHTML(
      'beforeend',
      `<article>
            <figure>
              <div>
                <img
                  src="/assets/images/workplace-1.jpg"
                  alt="workplace1"
                  width="100%"
                />
                <figcaption>${companyVal}</figcaption>
              </div>
            </figure>
            <h3>${companyVal}</h3>
            <div>${startVal}-${endVal}</div>
            <p></p>
          </article>`
    );
  }
  console.log(startVal, endVal, companyVal);
});
