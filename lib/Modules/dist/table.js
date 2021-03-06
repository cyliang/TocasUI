// Generated by CoffeeScript 2.0.0-beta4
var TocasTable;

TocasTable = (function() {
  class TocasTable {
    $init({$this}) {
      var $expandIcon, expandables, hasExpandable;
      expandables = $this.find('.expandable');
      hasExpandable = expandables.length !== 0;
      if (hasExpandable) {
        $expandIcon = $selector('<i>').addClass('chevron down icon');
        $this.find('thead > tr').prepend($selector('<th>'));
        $this.find('tbody > tr').prepend($selector('<td>'));
        $this.find('tbody > tr.expandable td:first-child').addClass('expand control').prepend($expandIcon);
      }
      $this.find('tbody > tr.expandable + tr td:first-child').remove();
      $this.find('tbody > tr.expandable + tr td').attr('colspan', 99);
      return $this.find('tbody > tr td.expand.control').on('click', function() {
        return $selector(this).parent().toggleClass('expanded');
      });
    }

  };

  TocasTable.prototype.$name = 'table';

  TocasTable.prototype.$methods = {
    expand: function() {},
    collapse: function() {}
  };

  return TocasTable;

})();

new ts(TocasTable);
