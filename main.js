(function() {

    $('button').click(function() {
        var link = $('link');
        var $this = $(this);
        var stylesheet = $this.data('file');

        $this.siblings('button').removeAttr('disabled');
        console.log(this);
        link.attr('href', stylesheet + '.css');
        $this.attr('disabled','disabled');
    });

})();