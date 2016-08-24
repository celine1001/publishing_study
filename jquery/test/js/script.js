$(function(){
    $('header').mouseenter(function(){
        // console.log('wow')
        $('header').css({
        'background-color':'#00F',
        'color':'#FFF'
        })
        $('header a').css('color','#fff')
    }).mouseleave(function(){
        $('header').css({
        'background-color':'#ccc',
        'color':'#000'
        })
        $('header a').css('color','#000')
    })
    // -------------------------------------------------------------------------
    var top_b = [];
    $('.content section').each(function(i,e){
        top_b.push($(e).offset().top);
        // console.log(top);
    })
    $('header a').click(function(){
        var idx = $(this).parent().index();
        $('body,html').animate({
            scrollTop:top_b[idx]
        })
        return false;
    })
    // -------------------------------------------------------------------------
    // 시작하는 이미지의 인덱스를 랜덤으로
    var length_c = $('.slidebanner ul li')
    var ran_c = Math.floor(Math.random() * length_c.length)
    // console.log(ran_c)
    $('.slidebanner li').eq(ran_c).addClass('on').siblings().removeClass();
    $('.slidebanner li').eq(ran_c).children('img').css('display','block');
    var slideWidth = $('.slidebanner').width();
    // var idx_c = 0;
    $('.next').click(function(){
        $('.slidebanner li').eq(ran_c).removeClass().children('img').animate({
            'left':-slideWidth
        }).parent().next().addClass('on').children('img').css({
            'display':'block',
            'left':slideWidth
        }).stop().animate({
            'left':'0'
        })
        ran_c++
        // console.log(idx)
        if(ran_c > $('.slidebanner li').length-1){
            ran_c = 0;
            $('.slidebanner li').eq(ran_c).addClass('on').children('img').css({
                'display':'block',
                'left':slideWidth
            }).stop().animate({
                'left':'0'
            })
        }
    })
    $('.prev').click(function(){
        $('.slidebanner li').eq(ran_c).removeClass().children('img').animate({
            'left':slideWidth
        }).parent().prev().addClass('on').children('img').css({
            'display':'block',
            'left':-slideWidth
        }).stop().animate({
            'left':'0'
        })
        ran_c--
        // console.log(idx)
        if(ran_c < 0){
            ran_c = $('.slidebanner li').length-1;
            $('.slidebanner li').eq(ran_c).addClass('on').children('img').css({
                'display':'block',
                'left':-slideWidth
            }).stop().animate({
                'left':'0'
            })
        }
    })
    var interval_c = setInterval(function(){
        $('.next').click()
    },4500)
    $('.slidebanner').mouseenter(function(){
        clearInterval(interval_c)
    }).mouseleave(function(){
        interval_c = setInterval(function(){
        $('.next').click()
    },4500)
    })
    
    $('.slidebanner a').click(function(){
        ran_c = $(this).parent().index();
        var preidx = $('.slidebanner li.on').index();
        // console.log(ran_c,preidx)
        if(ran_c > preidx){
            $('.slidebanner li').eq(preidx).removeClass().children('img').animate({
                'left':-slideWidth
            })
            $('.slidebanner li').eq(ran_c).addClass('on').children('img').css({
                'display':'block',
                'left':slideWidth
            }).stop().animate({
                'left':'0'
            })
        }else if(ran_c < preidx){
            $('.slidebanner li').eq(preidx).removeClass().children('img').animate({
                'left':slideWidth
            })
            $('.slidebanner li').eq(ran_c).addClass('on').children('img').css({
                'display':'block',
                'left':-slideWidth
            }).stop().animate({
                'left':'0'
            })
        }
    })
    // -------------------------------------------------------------------------
    var interval_e = setInterval(function(){
        $('.fadebanner li.e').removeClass().children('img').fadeOut(1000).parent().next().addClass('e').children('img').fadeIn(1000)
        var ii = $('.fadebanner li.e').index()
        // console.log(ii)
        if(ii < 0){
            ii = 0;
            // console.log(ii);
            $('.fadebanner li').eq(ii).addClass('e').children('img').css('display','block').fadeIn(1000);
        }
    },1000)
    
    $('.fadebanner').mouseenter(function(){
            clearInterval(interval_e)
    }).mouseleave(function(){
        // console.log("kjljlkj")
        interval_e = setInterval(function(){
            $('.fadebanner li.e').removeClass().children('img').fadeOut(1000).parent().next().addClass('e').children('img').fadeIn(1000)
            var ii = $('.fadebanner li.e').index()
            // console.log(ii)
            if(ii < 0){
                ii = 0;
                // console.log(ii);
                $('.fadebanner li').eq(ii).addClass('e').children('img').css('display','block').fadeIn(1000);
            }
        },1000)
    })

    $('.fadebanner a').click(function(){
        var idx_e = $(this).parent('li').index();
        var preidx_e = $('.fadebanner li.e').index();
        // console.log(idx_e,preidx_e)
        if(idx_e > preidx_e){
            $('.fadebanner li').eq(preidx_e).removeClass().children('img').animate({
                'left':-slideWidth
            })
            $('.fadebanner li').eq(idx_e).addClass('e').children('img').css({
                'display':'block',
                'left':slideWidth
            }).stop().animate({
                'left':'0'
            })
        }else if(idx_e < preidx_e){
            $('.fadebanner li').eq(preidx_e).removeClass().children('img').animate({
                'left':slideWidth
            })
            $('.fadebanner li').eq(idx_e).addClass('e').children('img').css({
                'display':'block',
                'left':-slideWidth
            }).stop().animate({
                'left':'0'
            })
        }
    })
    // -------------------------------------------------------------------------
    $('.movie-view a').click(function() {
        var href = $(this).attr('href');
        var viewSrc = 'https://www.youtube.com/embed/'+href+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen'
        // var viewSrc = '"https://www.youtube.com/embed/'+href+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen'
        $('.view iframe').attr('src',viewSrc);
        // $(this).parent().addClass('youtube').siblings().removeclass();
        // $('.movie-view li.youtube').children('a').children('img').css('opacity','0.5')
        $(this).children('img').css('opacity','0.5').parent().parent().siblings().find('img').css('opacity','1')
        // $(this).parent().siblings('li').children('a').children('img').css('opcity','none')
        return false;
    })
    // -------------------------------------------------------------------------
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        console.log(sct)
        $('.wing').animate({
            'top':sct
        })
    })
    // -------------------------------------------------------------------------
    function blind(){
        
        $('body .btngroup').prepend('<div class="blind"></div>')
        $('.blind').fadeTo(1000,0.5)
    }
    function popMaker(id){
        $('body .'+id+' pop').append('<button class="close">닫아</button>')
    }
    var openEvent = function(){
        var id = $(this).attr('id')
        blind();
        popMaker(id);
    }
    $('.open').click(openEvent)
    
})