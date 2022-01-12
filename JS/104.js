$(document).ready(function(){
    //

    // header
    $('.top-nav .more').click(function(){
        $(this).find('ul').slideToggle();
    })
    // title
    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 61){
            $('.title').addClass('title-fix');
            $('.title-box').addClass('title-box-fix');
        }
        if(scrollVal < 61){
            $('.title').removeClass('title-fix');
            $('.title-box').removeClass('title-box-fix');
        }
    })
    $('.v-btn').click(function(){
        $(this).parent().find('.apply-place').slideToggle();
    })

    // row-fixed
    $(window).scroll(function(){
        var scrollVal_row = $(this).scrollTop();
        if(scrollVal_row > $(window).height()*0.55){
            $('.row-fixed').addClass('row-fix');
        }
        if(scrollVal_row < $(window).height()*0.55){
            $('.row-fixed').removeClass('row-fix')
        }
    })

    //Json & Ajax

    // text-content
    var append_works_detal = function(works_detal,work_list_number){
        for (let index = 0; index < works_detal.length; index++){
            var $newList = $('#list-template').clone(true);
            $newList.find('.list-title').text(works_detal[index]['title']);
            if(index>0 && works_detal[index-1]['title'] == works_detal[index]['title']){
                $newList.find('.list-title').addClass('disappear')
            };
            $newList.find('.list-content').text(works_detal[index]['content']);
            $newList.attr('id', '');
            $newList.addClass('m-b-12');
            $newList.addClass('lh-20');
            $('#works-list-'+work_list_number+'').append($newList);
        }
    }
    $.ajax({
        type: "Get",
        url: "/Data/Json/104.json",
        cache: false,
        success: function(result){
            append_works_detal(result,1);
        },
        error: function(xhr){
            alert("An Error Occured" + xhr.status + " " + xhr.statusText);
        }
    })
    $.ajax({
        type: "Get",
        url: "/Data/Json/104-2.json",
        cache: false,
        success: function(result){
            append_works_detal(result,2);
        },
        error: function(xhr){
            alert("An Error Occured" + xhr.status + " " + xhr.statusText);
        }
    })

    // works-ad-data
    var append_works_ad_data = function(works_ad_data){
        for(let i = 0; i < works_ad_data.length; i++){
            var $newWork = $('#work-ad-template').clone(true);
            $newWork.find('.date').text(works_ad_data[i]['date']);
            $newWork.find('.ad-main-title').text(works_ad_data[i]['main-title']);
            $newWork.find('.subtitle').text(works_ad_data[i]['subtitle']);
            $newWork.find('.history').text(works_ad_data[i]['history']);
            $newWork.find('.work-content').text(works_ad_data[i]['work-content']);
            $newWork.find('.label').text(works_ad_data[i]['tag']);
            $newWork.find('.people-number').text(works_ad_data[i]['people number']);
            $newWork.attr('id', '');
            $('.work-ad').append($newWork);
        }
    }

    $.ajax({
        type:"Get",
        url:"/Data/Json/104works.json",
        cache: false,
        success: function(result){
            append_works_ad_data(result);
        },
        error: function(xhr){
            alert("An Error Occured" + xhr.status + " " + xhr.statusText);
        }
    })

    // Job-Recommend
    var append_works_recommend_data = function(works_recommend_data){
        for(let i = 0; i < works_recommend_data.length;i++){
            var $newJob = $('#work-recommend-template').clone(true);
            $newJob.find('.job-name').text(works_recommend_data[i]['JobName']);
            $newJob.find('.company-name').text(works_recommend_data[i]['Company']);
            $newJob.attr('id','');
            $('.work-recommend').append($newJob);
        }
    }

    $.ajax({
        type:"Get",
        url:"/Data/Json/works-recommend.json",
        cache: false,
        success: function(result){
            append_works_recommend_data(result);
        },
        error: function(xhr){
            alert("An Error Occured" + xhr.status + " " + xhr.statusText);
        }
    })

    //
})


