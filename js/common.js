$(document).ready(function() {
    $('#indicatorContainer,#indicatorContainerOne,#indicatorContainerTwo,#indicatorContainerThree,#indicatorContainerFour,#indicatorContainerFive,#indicatorContainerSix,#indicatorContainerSeven,#indicatorContainerEight').radialIndicator({
        barColor: '#23ed37',
        barWidth: 10,
        initValue: 0,
        roundCorner: true,
        percentage: true
    });
    var radialObj = $('#indicatorContainer').data('radialIndicator');
    radialObj.animate(100);
    var radialObj = $('#indicatorContainerOne').data('radialIndicator');
    radialObj.animate(70);
    var radialObj = $('#indicatorContainerTwo').data('radialIndicator');
    radialObj.animate(100);
    var radialObj = $('#indicatorContainerThree').data('radialIndicator');
    radialObj.animate(70);
    var radialObj = $('#indicatorContainerFour').data('radialIndicator');
    radialObj.animate(30);
    var radialObj = $('#indicatorContainerFive').data('radialIndicator');
    radialObj.animate(50);
    var radialObj = $('#indicatorContainerSix').data('radialIndicator');
    radialObj.animate(30);
    var radialObj = $('#indicatorContainerSeven').data('radialIndicator');
    radialObj.animate(60);
    var radialObj = $('#indicatorContainerEight').data('radialIndicator');
    radialObj.animate(35);
});