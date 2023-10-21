$(document).ready (function() {
    $('.dl1').click (function() {
        $('.dl3').animate ({
            scale: '0.8',
            opacity: '0.8'
        })
        
    })
    
})
$('.dl1').mouseover (function() {
        $('.dl3').animate ({
            scale: '0',
            opacity: '0'
        })
    
})
$('.dl1').click (function() {
        $('.dl4').animate ({
            scale: '0.7',
            opacity: '0.8'
        })
        
$('.dl1').mouseover (function() {
        $('.dl4').animate ({
            scale: '0',
            opacity: '0'
        })
    
})
})