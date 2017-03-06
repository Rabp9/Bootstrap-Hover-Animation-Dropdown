'use strict';

/**
 * @ngdoc function
 * @name bootstrapHoverAnimationDropdown.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the bootstrapHoverAnimationDropdown
 */
angular.module('bootstrapHoverAnimationDropdown')
.controller('DemoCtrl', function ($scope) {
    $scope.effects = [
        // Attention Seekers
        {name: 'bounce', type: 'attention-seekers'},
        {name: 'flash', type: 'attention-seekers'},
        {name: 'pulse', type: 'attention-seekers'},
        {name: 'rubberBand', type: 'attention-seekers'},
        {name: 'shake', type: 'attention-seekers'},
        {name: 'swing', type: 'attention-seekers'},
        {name: 'tada', type: 'attention-seekers'},
        {name: 'tada', type: 'attention-seekers'},
        {name: 'wobble', type: 'attention-seekers'},
        {name: 'jello', type: 'attention-seekers'},
        
        // Bouncing Entrances
        {name: 'bounceIn', type: 'bouncing-entrances'},
        {name: 'bounceInDown', type: 'bouncing-entrances'},
        {name: 'bounceInLeft', type: 'bouncing-entrances'},
        {name: 'bounceInRight', type: 'bouncing-entrances'},
        {name: 'bounceInUp', type: 'bouncing-entrances'},
        {name: 'jello', type: 'bouncing-entrances'},
        {name: 'jello', type: 'bouncing-entrances'},
        
        // Bouncing Exits
        {name: 'bounceOut', type: 'bouncing-exits'},
        {name: 'bounceOutDown', type: 'bouncing-exits'},
        {name: 'bounceOutLeft', type: 'bouncing-exits'},
        {name: 'bounceOutRight', type: 'bouncing-exits'},
        {name: 'bounceOutUp', type: 'bouncing-exits'},
        
        // Fading Entrances
        {name: 'fadeIn', type: 'fading-entrances'},
        {name: 'fadeInDown', type: 'fading-entrances'},
        {name: 'fadeInDownBig', type: 'fading-entrances'},
        {name: 'fadeInLeft', type: 'fading-entrances'},
        {name: 'fadeInLeftBig', type: 'fading-entrances'},
        {name: 'fadeInRight', type: 'fading-entrances'},
        {name: 'fadeInRightBig', type: 'fading-entrances'},
        {name: 'fadeInUp', type: 'fading-entrances'},
        {name: 'fadeInUpBig', type: 'fading-entrances'},
        
        // Fading Exits
        {name: 'fadeOut', type: 'fading-exits'},
        {name: 'fadeOutDown', type: 'fading-exits'},
        {name: 'fadeOutDownBig', type: 'fading-exits'},
        {name: 'fadeOutLeft', type: 'fading-exits'},
        {name: 'fadeOutLeftBig', type: 'fading-exits'},
        {name: 'fadeOutRight', type: 'fading-exits'},
        {name: 'fadeOutRightBig', type: 'fading-exits'},
        {name: 'fadeOutUp', type: 'fading-exits'},
        {name: 'fadeOutUpBig', type: 'fading-exits'},
        
        // Flippers
        {name: 'flip', type: 'flippers'},
        {name: 'flipInX', type: 'flippers'},
        {name: 'flipInY', type: 'flippers'},
        {name: 'flipOutX', type: 'flippers'},
        {name: 'flipOutY', type: 'flippers'},
        
        // Lightspeed
        {name: 'lightSpeedIn', type: 'lightspeed'},
        {name: 'lightSpeedOut', type: 'lightspeed'},
        
        // Rotating Entrances
        {name: 'rotateIn', type: 'rotating-entrances'},
        {name: 'rotateInDownLeft', type: 'rotating-entrances'},
        {name: 'rotateInDownRight', type: 'rotating-entrances'},
        {name: 'rotateInUpLeft', type: 'rotating-entrances'},
        {name: 'rotateInUpRight', type: 'rotating-entrances'},
        
        // Rotating Exits
        {name: 'rotateOut', type: 'rotating-exits'},
        {name: 'rotateOutDownLeft', type: 'rotating-exits'},
        {name: 'rotateOutDownRight', type: 'rotating-exits'},
        {name: 'rotateOutUpLeft', type: 'rotating-exits'},
        {name: 'rotateOutUpRight', type: 'rotating-exits'},
        
        // Sliding Entrances
        {name: 'slideInUp', type: 'sliding-entrances'},
        {name: 'slideInDown', type: 'sliding-entrances'},
        {name: 'slideInLeft', type: 'sliding-entrances'},
        {name: 'slideInRight', type: 'sliding-entrances'},
        
        // Sliding Exits
        {name: 'slideOutUp', type: 'sliding-exits'},
        {name: 'slideOutDown', type: 'sliding-exits'},
        {name: 'slideOutLeft', type: 'sliding-exits'},
        {name: 'slideOutRight', type: 'sliding-exits'},
        
        // Zoom Entrances
        {name: 'zoomIn', type: 'zoom-entrances'},
        {name: 'zoomInDown', type: 'zoom-entrances'},
        {name: 'zoomInLeft', type: 'zoom-entrances'},
        {name: 'zoomInRight', type: 'zoom-entrances'},
        {name: 'zoomInUp', type: 'zoom-entrances'},
        
        // Zoom Exits
        {name: 'zoomOut', type: 'zoom-exits'},
        {name: 'zoomOutDown', type: 'zoom-exits'},
        {name: 'zoomOutLeft', type: 'zoom-exits'},
        {name: 'zoomOutRight', type: 'zoom-exits'},
        {name: 'zoomOutUp', type: 'zoom-exits'},
        
        // Specials
        {name: 'hinge', type: 'specials'},
        {name: 'rollIn', type: 'specials'},
        {name: 'rollOut', type: 'specials'}
    ];
    
    $scope.animationInHover = 'fadeIn';
    $scope.animationOutHover = 'fadeOut';
    
    $scope.animationInWhitoutHover = 'fadeIn';
    $scope.animationOutWhitoutHover = 'fadeOut';
});