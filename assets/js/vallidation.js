// /* 

//   <form id="form" novalidate action="" class="us--me__form">
//         <input id="form--input" type="text" required id="fullName" name="name" placeholder="Name" class="form-input">
//         <input id="form--input" type="email" required id="userEmail" name="email" placeholder="Email" class="form-input">
//         <input id="form--input" type="text" required id="userEmail" name="Website" placeholder="Website"
//             class="form-input">
//         <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
//         <button class="btn btn--effect">Submit
//             <i class="far fa-arrow-right"></i>
//         </button>
//     </form>
// */
// // variables
// const form = document.querySelector('#form');
// const formTxt = document.querySelector('#form--txt');
// const inputs = document.querySelectorAll('#form--input');
// // functions
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   inputs.forEach((input) => {
//     let check = true;
//     const InputName = input.name;
//     const InputVal = input.value;
//     const InputLength = input.value.length;
//     if (InputName == 'email') {
//       if (!InputVal) {
//         check = false;
//         showError('input required.', 'alert');
//         if (InputLength < 5) {
//           check = false;
//           showError('less 5 word', 'alert');
//         }
//       } else {
//         check = true;
//       }
//     }
//     if (InputName == 'name') {
//       if (!InputVal) {
//         check = false;
//         showError('input required.', 'alert');
//         if (InputLength < 5) {
//           check = false;
//           showError('less 5 word', 'alert');
//         }
//       } else {
//         check = true;
//       }
//     }
//     if (InputName == 'website') {
//       if (!InputVal) {
//         check = false;
//         showError('input required.', 'alert');
//         if (InputLength < 5) {
//           check = false;
//           showError('less 5 word', 'alert');
//         }
//       } else {
//         check = true;
//       }
//     }

//     if (!formTxt.length) {
//       check = false;
//       showError('input required.', 'alert');
//       if (InputLength < 5) {
//         check = false;
//         showError('less 5 word', 'alert');
//       }
//     } else {
//       check = true;
//     }

//     if (check) {
//       //   form.submit();
//     }
//   });
// });
// function showError(error, className) {
//   let div = document.createElement('div');
//   div.classList = className;
//   div.appendChild(document.createTextNode(error));
//   document.querySelector('#status').appendChild(div);
//   setTimeout(() => {
//     const alert = document.querySelector('.alert');
//     if (alert) {
//       alert.remove();
//     }
//   }, 1000);
// }
