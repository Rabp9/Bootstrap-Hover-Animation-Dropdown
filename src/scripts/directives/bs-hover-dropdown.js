'use strict';

/**
 * @ngdoc directive
 * @name bootstrapHoverAnimationDropdown.directive:bsHoverDropdown
 * @description
 * # bsHoverDropdown
 */
angular
.module('bootstrapHoverAnimationDropdown')
.directive('bsHoverDropdown', function () {
    return {
        restrict: 'A',
        scope: {
            animationIn: '=',
            animationOut: '='
        },
        link: function postLink(scope, element, attrs) {
            var updateAnimation = function() {
                var menu = element.find('.dropdown-menu');
                var animationIn = scope.animationIn;
                var animationOut = scope.animationOut;
                var hover = attrs.bsHover || true;
                
                console.log(animationIn);
                console.log(animationOut);
                
                if (hover === true) {
                    element.find('button').hover(
                        function() {
                            element.find('button').trigger('click.bs.dropdown');
                        }, function() {
                            if (element.attr('class') !== 'dropdown') {
                                element.find('button').trigger('click.bs.dropdown');
                            }
                        })
                }
                element.unbind("show.bs.dropdown");
                menu.addClass('animated');
                element.on("show.bs.dropdown", function (event) {
                    event.preventDefault();
                    menu.addClass(animationIn);
                    menu.removeClass(animationOut);
                    setTimeout(function() {
                        element.addClass('open');
                    }, 1); 
                });
                element.unbind("hide.bs.dropdown");
                element.on("hide.bs.dropdown", function (event) {
                    event.preventDefault();
                    menu.removeClass(animationIn);
                    menu.addClass(animationOut);
                    setTimeout(function() {
                        element.removeClass('open');
                        menu.removeClass(animationOut);
                    }, 700); 
                });
            }

            scope.$watch('animationIn', function(newValue, oldValue) {
                updateAnimation();
            });
            
            scope.$watch('animationOut', function(newValue, oldValue) {
                updateAnimation();
            });
        }
    };
});