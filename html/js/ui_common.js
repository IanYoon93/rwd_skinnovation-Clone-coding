$(function () {
  var header = $('#header');

  $('#header .gnb_wrap').on('mouseenter', function () {
    header.addClass('on');
  });

  $('#header .gnb_wrap').on('mouseleave', function () {
    header.removeClass('on');
  });

  function aniHeader() {
    $('#header .gnb>li').on('mouseenter', function () {
      var posX = $(this).position().left;
      var outW = $(this).find('>a').outerWidth();

      $('#header .gnb .depth02').show();
      $('#header .gnb_wrap .gnb_depth_wrap').show();
      $('#header .gnb_bar')
        .css({
          transform: 'translateX(' + posX + 'px)',
          width: outW + 'px',
          opacity: 1,
        })
        .show();
    });

    $('#header .gnb_wrap').on('mouseleave', function () {
      $('#header .gnb .depth02').hide();
      $('#header .gnb_wrap .gnb_depth_wrap').hide();
      $('#header .gnb_bar').css({ opacity: 0 }).hide();
    });

    $('#header .gnb_wrap .gnb_depth_wrap').on('mouseenter', function () {
      $('#header .gnb_bar').hide();
    });
  }
  aniHeader();

  //헤더 gnb 슬라이더
  var gnbSlider = new Swiper('.gnb_slider', {
    loop: true,
    slidesPerView: 1,
    // 드래그 거리 이상일 때 적용
    threshold: 20,
    pagination: {
      el: '.gnb_slider_wrap .swiper-pagination',
      clickable: true,
    },
  });

  // 헤더 util_wrap
  // sns 버튼
  $('#header .util_wrap .util .sns_depth02_wrap').hide();

  $('#header .util_wrap .util .sns_wrap').on('mouseenter', function () {
    $(this).find('.sns_depth02_wrap').show();
  });
  $(
    '#header .util_wrap .util .sns_wrap, #header .util_wrap .util .sns_depth02_wrap'
  ).on('mouseleave', function () {
    $('#header .util_wrap .util .sns_depth02_wrap').hide();
  });

  // 헤더 검색모달
  // 헤더 검색모달 열기
  $('#header .util_wrap .util .btn_search').on('click', function (e) {
    e.preventDefault();
    $('#header .search_area, #header .dimmed').show();
  });

  // 헤더 검색모달 닫기
  $('#header .search_wrap .btn_search_claer').on('click', function (e) {
    e.preventDefault();
    $('#header .search_area, #header .dimmed').hide();
  });

  // 헤더 검색모달 입력필드
  $('#header .search_wrap .search').on('click', function (e) {
    e.preventDefault();

    $('#header .search_wrap .search .search_box_wrap').show();
  });

  $('#header .search_wrap .search .search_box').on('click', function () {
    $(this).hide();
  });

  var searchInput = $('#header .search_wrap input[type=text]');
  var btnClear = $('#header .search_wrap .search .btn_claer');

  btnClear.on('click', function () {
    searchInput.val('').trigger('focus');
    $(this).hide();
    $('#header .search_wrap .search .search_box').hide();
  });

  searchInput.on('keyup', function () {
    btnClear.show();
    $('#header .search_wrap .search .search_box').show();

    if (searchInput.val() === '') {
      btnClear.hide();
      $('#header .search_wrap .search .search_box').hide();
    }
  });

  //언어선택 버튼
  $('#header .util_wrap .util .lang_depth02_wrap').hide();

  $('#header .util_wrap .util .lang_wrap').on('mouseenter', function () {
    $(this).find('.lang_depth02_wrap').show();
  });
  $(
    '#header .util_wrap .util .lang_wrap, #header .util_wrap .util .lang_depth02_wrap'
  ).on('mouseleave', function () {
    $('#header .util_wrap .util .lang_depth02_wrap').hide();
  });

  //언어선택 버튼 액티브
  $('#header .util_wrap .util .lang_depth02 li').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });

  //전체메뉴 열기
  $('#header .btn_pc_hamburger').on('click', function (e) {
    e.preventDefault();
    $('#header .all_menu_wrap').fadeIn().addClass('on');
    $('body').addClass('on');
  });

  //전체메뉴 닫기
  $('#header .btn_close').on('click', function (e) {
    e.preventDefault();
    $('#header .all_menu_wrap').fadeOut().removeClass('on');
    $('body').removeClass('on');
  });
});
