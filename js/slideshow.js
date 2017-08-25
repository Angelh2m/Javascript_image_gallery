
    // Variable declaration

    var controls, items, next, prev, counter, amount, currentSlide,check;

    controls = document.querySelectorAll('.slider li');
    items = document.querySelectorAll('.slider li');
    next = document.querySelector('.next');
    prev = document.querySelector('.prev');
    counter = 0;
    amount = items.length;
    currentSlide = controls[0];
    check = controls[counter + 1].getAttribute('data-value');

    color();

    // Add and remove classes

    function navigation(number) {

      currentSlide.classList.remove('active');

        counter = counter + number;

        console.log(counter);

        if( controls.length == counter){
          counter = 0;
          currentSlide = controls[0];
          currentSlide.classList.add('active');
          console.log('the end');
        }

        if(number === -1 && counter < 0){

          counter = amount-1;
          // 4
          console.log(counter);
          // 4
          currentSlide = controls[4 - 1 ];

          // console.log(currentSlide + 'hey');
          currentSlide.classList.add('active');

          color();
        }


        color();

        currentSlide = items[counter];
        currentSlide.classList.add('active');

      }//End

      // Color function

      function color(){

        if( counter < items.length - 1){

          check = controls[counter ].getAttribute('data-value');

        }else{
          check = controls[counter].getAttribute('data-value');

        };

        if( check === 'black' ) {
            next.style.color = 'white';
            prev.style.color = 'white';

        }else {
          next.style.color = 'black';
          prev.style.color = 'black';

        }
        console.log(check);

      };

      // Controllers

      next.addEventListener('click', function() {
        navigation(1);
      });

      prev.addEventListener('click', function() {
        navigation(-1);
      });

      document.addEventListener('keydown', function(event){
        // console.log(event);
        if(event.keycode === 39 || event.which == 39){
          navigation(1);
        }

        if(event.keycode === 37 || event.which == 37){
          navigation(-1);
        }

      });
