$(function(){
   var $firstNewsBox=$(".first-news  .scrolltext .box");
    //console.log($firstNewsBox.height());
    var $firstNewsBoxA=$(".first-news .scrolltext .box a");
    var $firstNewsBoxAheight=$firstNewsBoxA.height();
    //console.log($firstNewsBoxAheight);
    //console.log($firstNewsBoxA.height());
    var $firstNewsBoxLength=$firstNewsBoxA.length;
    //console.log($firstNewsBoxLength);
    var index=0;
    setInterval(function(){
        index++;
        if(index==$firstNewsBoxLength){
            index=0;
        }
        $firstNewsBox.animate({marginTop:-index*$firstNewsBoxAheight})

    },1000);

});