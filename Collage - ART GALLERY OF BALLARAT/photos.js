window.addEventListener('load', () => {

    setTimeout(() => {
        $('#p-1').css('display', 'flex');
        $('.p-show-button').css('display', 'flex');
    }, 3000);

    for(let i = 2; i <= 45; i++) {
        setTimeout(() => {
            $(`#p-${i}`).css('display', 'flex');
        }, Math.random() * (3000));
    }

    let pData = {
        '1': {'name': 'Good boy 1', 'theme': 'Good boy', 'color': '#478cd0'},
        '2': {'name': 'Good boy 2', 'theme': 'Good boy', 'color': '#ff5fbe'},
        '3': {'name': 'Good boy 3', 'theme': 'Good boy', 'color': '#e6e4e0'},
        '4': {'name': 'Good boy 4', 'theme': 'Good boy', 'color': '#bd683f'},
        '5': {'name': 'Good boy 5', 'theme': 'Good boy', 'color': '#bbdb93'},
        '6': {'name': 'Good boy 6', 'theme': 'Good boy', 'color': '#f2a761'},
        '7': {'name': 'Good boy 7', 'theme': 'Good boy', 'color': '#adcdca'},
        '8': {'name': 'Good boy 8', 'theme': 'Good boy', 'color': '#ebb3ce'},
        '9': {'name': 'Good boy 9', 'theme': 'Good boy', 'color': '#70a995'},
        '10': {'name': 'Good boy 10', 'theme': 'Good boy', 'color': '#f47d76'},
        '11': {'name': 'Good boy 11', 'theme': 'Good boy', 'color': '#fed4b7'},
        '12': {'name': 'Good boy 12', 'theme': 'Good boy', 'color': '#478cd0'},
        '12': {'name': 'Good boy 13', 'theme': 'Good boy', 'color': '#ff5fbe'},
        '14': {'name': 'Good boy 14', 'theme': 'Good boy', 'color': '#e6e4e0'},
        '15': {'name': 'Good boy 15', 'theme': 'Good boy', 'color': '#bd683f'},
        '16': {'name': 'Good boy 16', 'theme': 'Good boy', 'color': '#bbdb93'},
        '17': {'name': 'Good boy 17', 'theme': 'Good boy', 'color': '#f2a761'},
        '18': {'name': 'Good boy 18', 'theme': 'Good boy', 'color': '#adcdca'},
        '19': {'name': 'Good boy 19', 'theme': 'Good boy', 'color': '#ebb3ce'},
        '20': {'name': 'Good boy 20', 'theme': 'Good boy', 'color': '#70a995'},
        '21': {'name': 'Good boy 21', 'theme': 'Good boy', 'color': '#f47d76'},
        '22': {'name': 'Good boy 22', 'theme': 'Good boy', 'color': '#fed4b7'},
        '23': {'name': 'Good boy 23', 'theme': 'Good boy', 'color': '#478cd0'},
        '24': {'name': 'Good boy 24', 'theme': 'Good boy', 'color': '#ff5fbe'},
        '25': {'name': 'Good boy 25', 'theme': 'Good boy', 'color': '#e6e4e0'},
        '26': {'name': 'Good boy 26', 'theme': 'Good boy', 'color': '#bd683f'},
        '27': {'name': 'Good boy 27', 'theme': 'Good boy', 'color': '#bbdb93'},
        '28': {'name': 'Good boy 28', 'theme': 'Good boy', 'color': '#f2a761'},
        '29': {'name': 'Good boy 29', 'theme': 'Good boy', 'color': '#adcdca'},
        '30': {'name': 'Good boy 30', 'theme': 'Good boy', 'color': '#ebb3ce'},
        '31': {'name': 'Good boy 31', 'theme': 'Good boy', 'color': '#70a995'},
        '32': {'name': 'Good boy 32', 'theme': 'Good boy', 'color': '#f47d76'},
        '33': {'name': 'Good boy 33', 'theme': 'Good boy', 'color': '#fed4b7'},
        '34': {'name': 'Good boy 34', 'theme': 'Good boy', 'color': '#478cd0'},
        '35': {'name': 'Good boy 35', 'theme': 'Good boy', 'color': '#ff5fbe'},
        '36': {'name': 'Good boy 36', 'theme': 'Good boy', 'color': '#e6e4e0'},
        '37': {'name': 'Good boy 37', 'theme': 'Good boy', 'color': '#bd683f'},
        '38': {'name': 'Good boy 38', 'theme': 'Good boy', 'color': '#bbdb93'},
        '39': {'name': 'Good boy 39', 'theme': 'Good boy', 'color': '#f2a761'},
        '40': {'name': 'Good boy 40', 'theme': 'Good boy', 'color': '#adcdca'},
        '41': {'name': 'Good boy 41', 'theme': 'Good boy', 'color': '#ebb3ce'},
        '42': {'name': 'Good boy 42', 'theme': 'Good boy', 'color': '#70a995'},
        '43': {'name': 'Good boy 43', 'theme': 'Good boy', 'color': '#f47d76'},
        '44': {'name': 'Good boy 44', 'theme': 'Good boy', 'color': '#fed4b7'},
        '45': {'name': 'Good boy 45', 'theme': 'Good boy', 'color': '#fed4b7'},
    }

    $('.p-photo-block').on('mouseover', (e) => {
        $('.p-info-block').stop(true);
        $('.p-info-block').css('bottom', '');
        let id = e.target.id.replace('p-', '');
        $('.p-info-name').html(pData[id]['name']);
        $('.p-info-theme').html(pData[id]['theme']);
        $('.p-info-block').css('background-color', pData[id]['color']);
        $('.p-info-block').animate({
            'bottom': '0'
        }, 500)
    })

    $('.p-photo-block').on('mouseout', () => {
        $('.p-info-block').animate({
            'bottom': '-150px'
        }, 500)
    })

    $('.p-show-button').on('mouseover', () => {
        $('.p-show-block').css({'height': '35px', 'width': '175px', 'bottom': '17px'});
        $('.p-show-text').css('font-size', '14px');
    })

    $('.p-show-button').on('mouseout', () => {
        $('.p-show-block').css({'height': '', 'width': '', 'bottom': ''});
        $('.p-show-text').css('font-size', '');
    })

    $(document).on('click', '.p-show-button', () => {
        $('.p-photos-block-lvl-1').addClass('p-draggable');
        $('.p-show-img').animate({
            'left': '82%'
        }, 700, () => {
            $('.p-show-text').css({'color': 'white', 'margin-left': '0', 'margin-right': '18%'});
            $('.p-show-text').html('Обычный');
            $('.p-hide-button').css('background-color', 'black');
            $('.p-show-animate').animate({'left': '100%'}, 300, () => {
                $('.p-show-animate').css('background-color', 'black');
                $('.p-show-img').css('filter', 'invert(1)');
            });
        })
        $('.p-show-animate').animate({
            'width': '100%'
        }, 700);
        if(window.innerWidth > 768) {
            $('.p-photos-block-lvl-1').css({'left': '-50vw', 'min-width': '200vw', 'min-height': '110vh'});
        } else {
            $('.p-photos-block-lvl-1').css({'left': '-225vw', 'min-width': '550vw', 'min-height': '110vh'});
        }
        $('.p-photos-block-lvl-0').addClass('p-background');
        $('.swiper-wrapper').addClass('disabled');
        $('.swiper-pagination').addClass( "disabled" );
        $('.p-show-button').addClass('p-hide-button');
        $('.p-show-button').removeClass('p-show-button');
    })

    $(document).on('click', '.p-hide-button', () => {
        $('.p-photos-block-lvl-1').css({'left': '', 'min-width': '', 'min-height': ''});
        $('.p-photos-block-lvl-1').removeClass('p-draggable');
        $('.p-show-img').animate({
            'left': '2%'
        }, 700, () => {
            $('.p-show-text').css({'color': '', 'margin-left': '', 'margin-right': ''});
            $('.p-show-text').html('Интерактив');
            $('.p-show-button').css('background-color', '');
            $('.p-show-animate').animate({'width': '0'}, 300, () => {
                $('.p-show-img').css('filter', '');
                $('.p-show-animate').css('background-color', '');
            });
        })
        $('.p-show-animate').animate({
            'left': '0'
        }, 700);
        $('.p-photos-block-lvl-0').removeClass('p-background');
        $('.swiper-wrapper').removeClass('disabled');
        $('.swiper-pagination').removeClass( "disabled" );
        $('.p-hide-button').addClass('p-show-button');
        $('.p-hide-button').removeClass('p-hide-button');
    })

    let dragged = false;
    let X, Y;

    $(document).on('pointerdown', '.p-draggable', (e) => {
        dragged = true;
        X = e.pageX;
        Y = e.pageY;
    })
    
    function onMouseMove(newX, newY) {
        if(dragged == true) {
            if(parseInt($('.p-draggable').css('left')) >= window.innerWidth - parseInt($('.p-draggable').css('width')) && parseInt($('.p-draggable').css('left')) <= 0) {
                $('.p-draggable').css('left', (parseInt($('.p-draggable').css('left')) - X + newX) + 'px');
            } else if(parseInt($('.p-draggable').css('left')) > 0){
                $('.p-draggable').css('left', 0);
            } else {
                $('.p-draggable').css('left',  (window.innerWidth - parseInt($('.p-draggable').css('width'))) + 'px');
            }
            if(parseInt($('.p-draggable').css('top')) >= window.innerHeight - parseInt($('.p-draggable').css('height')) && parseInt($('.p-draggable').css('top')) <= 0) {
                $('.p-draggable').css('top', (parseInt($('.p-draggable').css('top')) - Y + newY) + 'px');
            } else if(parseInt($('.p-draggable').css('top')) > 0){
                $('.p-draggable').css('top', 0);
            } else {
                $('.p-draggable').css('top',  (window.innerHeight - parseInt($('.p-draggable').css('height'))) + 'px');
            }
            X = newX;
            Y = newY;
        }
    }

    $(document).on('pointermove', '.p-draggable', (e) => {
        onMouseMove(e.pageX, e.pageY);
    })

    $(document).on('touchmove', '.p-draggable', (e) => {
        onMouseMove(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    })

    $(document).on('pointerup', (e) => {
        dragged = false;
    })

    $(document).on('touchend', (e) => {
        dragged = false;
    })

    window.addEventListener('resize', () => {
        $('.p-hide-button').click();
    })
})