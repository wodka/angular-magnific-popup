"use strict";

angular.module().directive('magnificPopup',
    [
        "$compile", 
        function($compile) {
            return {
                restrict: 'A',
                scope: {},
                link: function($scope, element, attr) {
                    attr.callbacks = {
                        ajaxContentAdded: function() {
                            var content = this.content;
    
                            var scope =  content.scope();
                            $compile(content)(scope);
                            scope.$digest();
                        }
                    };
    
                    element.magnificPopup(attr);
                }
            }
        }
    ]
);


