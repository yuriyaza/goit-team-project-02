;(function ($) {

    $.switcher = function (filter) {

        var $haul = $('input[type=checkbox]');

        if (filter !== undefined && filter.length) {
            $haul = $haul.filter(filter);
        }

        $haul.each(function () {

            var $checkbox = $(this).hide(),
                $switcher = $(document.createElement('div'))
                    .addClass('ui-switcher')
                    .attr('aria-checked', $checkbox.is(':checked'));

        
            toggleSwitch = function (e) {
                if (e.target.type === undefined) {
                    $checkbox.trigger(e.type);
                }
                $switcher.attr('aria-checked', $checkbox.is(':checked'));          
            };

            $switcher.on('click', toggleSwitch);
         
            $switcher.insertBefore($checkbox);
        });

    };

})(jQuery);
