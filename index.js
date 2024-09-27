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
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2""
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

const admin = document.getElementById('admin');
const form = document.getElementById('addFe');
admin.addEventListener('click', () => {
  form.classList.toggle('visibility');
});
