let rate;
    const button = document.getElementById('submit');
    const rating_container = document.getElementById('rating-container')
    const thanks_container = document.getElementById('thanks-container');
    const rating_section = document.getElementById('rating-section');
    const rating_box = document.getElementsByClassName('rating-box')
    button.addEventListener('click', change);
    rating_section.addEventListener('click', rateIt);
    function rateIt(e){
        if(e.target.classList.contains('rating-box')){
        rate = e.target.innerText;
        e.target.style.backgroundColor = 'orange';
        
        }else{
        rate = undefined;
        }
      
    };
     function change(){
      if(rate == undefined){
        alert('Please rate us')
      }else{
      rating_container.style.display = 'none';
      thanks_container.style.display = 'block';
      rating.innerText = rate;
      }
    }